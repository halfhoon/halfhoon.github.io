const params = new URLSearchParams(location.search);
const portraitOption = params.get('portrait');
if (['open', 'offset', 'corners'].includes(portraitOption)) document.documentElement.dataset.portrait = portraitOption;
const panels = [...document.querySelectorAll('[data-view-panel]')];
const targets = [...document.querySelectorAll('[data-view-target]')];

function activeView() {
  const key = location.hash.slice(1);
  if (key.startsWith('pub-')) return 'publications';
  return panels.some(panel => panel.dataset.viewPanel === key) ? key : 'home';
}
function setView(view) {
  panels.forEach(panel => panel.hidden = panel.dataset.viewPanel !== view);
  targets.forEach(target => {
    const active = target.dataset.viewTarget === view;
    target.classList.toggle('is-active', active);
    if (active) target.setAttribute('aria-current', 'page');
    else target.removeAttribute('aria-current');
  });
  document.body.dataset.view = view;
}
function renderRoute() {
  setView(activeView());
  const id = location.hash.slice(1);
  if (id.startsWith('pub-')) {
    if (document.getElementById(id)?.matches('.pub-row')) filterPublications('all');
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  } else window.scrollTo({ top: 0, behavior: 'instant' });
}
targets.forEach(target => target.addEventListener('click', event => {
  event.preventDefault();
  const view = target.dataset.viewTarget;
  history.pushState({}, '', view === 'home' ? `${location.pathname}${location.search}` : `#${view}`);
  renderRoute();
}));
window.addEventListener('popstate', renderRoute);
window.addEventListener('hashchange', renderRoute);
document.querySelectorAll('.year-index a').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  history.pushState({}, '', link.getAttribute('href'));
  renderRoute();
}));

document.querySelectorAll('[data-paper-abstract]').forEach(button => button.addEventListener('click', () => {
  history.pushState({}, '', '#publications');
  setView('publications');
  filterPublications('all');
  const row = document.querySelectorAll('.pub-row')[Number(button.dataset.paperAbstract)];
  row.classList.add('is-open');
  const toggle = row.querySelector('.abstract-toggle');
  toggle?.setAttribute('aria-expanded', 'true');
  row.scrollIntoView({ block: 'start' });
  toggle?.focus({ preventScroll: true });
}));

document.querySelectorAll('.abstract-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const open = button.closest('.pub-row').classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });
});
if (params.get('abstracts') === 'open') document.querySelectorAll('.abstract-toggle').forEach(button => {
  button.closest('.pub-row').classList.add('is-open');
  button.setAttribute('aria-expanded', 'true');
});

const filterButtons = [...document.querySelectorAll('[data-pub-filter]')];
const rows = [...document.querySelectorAll('.pub-row[data-venue]')];
const groups = [...document.querySelectorAll('.pub-group[data-scope]')];
const labels = [...document.querySelectorAll('[data-scope-label]')];
labels.forEach(label => label.dataset.defaultText = label.querySelector('span').textContent);
function filterPublications(filter) {
  rows.forEach(row => {
    const show = filter === 'all' || row.dataset.venue === filter;
    row.classList.toggle('is-filtered-out', !show);
    if (!show) {
      row.classList.remove('is-open');
      row.querySelector('.abstract-toggle')?.setAttribute('aria-expanded', 'false');
    }
  });
  groups.forEach(group => group.classList.toggle('is-filtered-out', ![...group.querySelectorAll('.pub-row')].some(row => !row.classList.contains('is-filtered-out'))));
  labels.forEach(label => {
    const count = rows.filter(row => row.closest('.pub-group').dataset.scope === label.dataset.scopeLabel && !row.classList.contains('is-filtered-out')).length;
    label.classList.toggle('is-filtered-out', count === 0);
    label.querySelector('span').textContent = filter === 'all' ? label.dataset.defaultText : `${count} matching`;
  });
  filterButtons.forEach(button => {
    const active = button.dataset.pubFilter === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
filterButtons.forEach(button => button.addEventListener('click', () => filterPublications(button.dataset.pubFilter)));
filterPublications(filterButtons.some(button => button.dataset.pubFilter === params.get('venue')) ? params.get('venue') : 'all');

const cards = [...document.querySelectorAll('.photo-card')];
const galleryFilters = [...document.querySelectorAll('[data-gallery-filter]')];
galleryFilters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.galleryFilter;
  cards.forEach(card => card.hidden = filter !== 'all' && card.dataset.category !== filter);
  galleryFilters.forEach(item => {
    item.classList.toggle('is-active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
}));

const lightbox = document.querySelector('.lightbox');
const image = document.querySelector('.lightbox-image');
let photoIndex = 0;
function visiblePhotos() { return cards.filter(card => !card.hidden).map(card => card.querySelector('.photo-link')); }
function showPhoto(index) {
  const photos = visiblePhotos();
  photoIndex = (index + photos.length) % photos.length;
  const link = photos[photoIndex];
  image.src = link.href;
  image.alt = link.querySelector('img').alt;
  document.querySelector('.lightbox-caption').textContent = link.closest('figure').querySelector('figcaption').textContent;
  document.querySelector('.lightbox-count').textContent = `${photoIndex + 1} / ${photos.length}`;
}
document.querySelectorAll('.photo-link').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (typeof lightbox.showModal !== 'function') return;
  event.preventDefault();
  showPhoto(visiblePhotos().indexOf(link));
  lightbox.showModal();
}));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
document.querySelectorAll('[data-photo-step]').forEach(button => button.addEventListener('click', () => showPhoto(photoIndex + Number(button.dataset.photoStep))));
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
renderRoute();
