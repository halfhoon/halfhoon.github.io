// Homepage — Papers
// Three view modes for publications:
//   - cards: rich expandable cards (click to reveal abstract)
//   - list:  compact academic list (authors · venue)
//   - timeline: horizontal-year spine with papers as nodes

// =========================================================================
// MODE: CARDS (expandable)
// =========================================================================
function H_PubCard({ pub, t }) {
  return (
    <div
      style={{
        background: t.paper,
        borderRadius: 14,
        padding: '20px 22px',
        marginBottom: 12,
        transition: 'all .2s cubic-bezier(.2,.7,.3,1)',
        boxShadow: `0 1px 0 ${t.ink}0a, 0 2px 8px ${t.ink}08`,
        border: `1px solid ${t.rule}`,
      }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
        <span style={{
          background: t.cream,
          color: t.ink,
          padding: '2px 9px', borderRadius: 999,
          fontSize: 11, fontWeight: 600, letterSpacing: '0.04em',
        }}>{pub.year}</span>
        <span style={{ fontSize: 12, color: t.inkSoft, fontWeight: 500 }}>
          {pub.venueShort}
          {pub.status && <span style={{ color: t.muted, fontStyle: 'italic' }}> · {pub.status}</span>}
        </span>
        <div style={{ flex: 1 }} />
        {pub.tags.slice(0, 2).map(tg => (
          <span key={tg} style={{
            fontSize: 10.5, color: t.sage, fontWeight: 600, letterSpacing: '0.04em',
          }}>· {tg}</span>
        ))}
      </div>
      <h3 style={{
        fontFamily: H_FONTS.display, fontSize: 19, lineHeight: 1.3,
        fontWeight: 500, color: t.ink, marginBottom: 6,
        letterSpacing: '-0.005em',
      }}>
        {pub.doi ? (
          <a href={pub.doi} target="_blank" rel="noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}>{pub.title}</a>
        ) : pub.title}
      </h3>
      <div style={{ fontSize: 13, color: t.inkSoft, lineHeight: 1.55 }}>
        {formatAuthors(pub.authors)}
      </div>
      {pub.authors.some(a => a.equal) && (
        <div style={{ fontSize: 11.5, color: t.muted, fontStyle: 'italic', marginTop: 4 }}>
          * contributed equally
        </div>
      )}
    </div>
  );
}

function H_PubCardsView({ pubs, t }) {
  const intl = pubs.filter(p => p.scope === 'international');
  const dom  = pubs.filter(p => p.scope === 'domestic');
  const heading = {
    fontFamily: H_FONTS.hand, fontSize: 22, color: t.sage,
    marginBottom: 12, transform: 'rotate(-0.5deg)', display: 'inline-block',
  };
  return (
    <div>
      {intl.length > 0 && (
        <>
          <div style={heading}>↓ international</div>
          {intl.map((p, i) => <H_PubCard key={i} pub={p} t={t} />)}
        </>
      )}
      {dom.length > 0 && (
        <>
          <div style={{ ...heading, marginTop: intl.length > 0 ? 28 : 0 }}>↓ domestic</div>
          {dom.map((p, i) => <H_PubCard key={i} pub={p} t={t} />)}
        </>
      )}
    </div>
  );
}

// =========================================================================
// MODE: LIST (compact academic)
// =========================================================================
function H_PubRow({ pub, t }) {
  return (
    <li style={{
      padding: '18px 0',
      borderBottom: `1px solid ${t.rule}`,
      display: 'grid',
      gridTemplateColumns: '54px 1fr',
      gap: 20,
      alignItems: 'start',
    }}>
      <span style={{
        display: 'inline-block',
        background: t.cream,
        color: t.ink,
        padding: '3px 8px', borderRadius: 4,
        fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
        textAlign: 'center',
        marginTop: 2,
      }}>{pub.year}</span>
      <div>
        <div style={{
          fontFamily: H_FONTS.display, fontSize: 17.5, lineHeight: 1.35,
          fontWeight: 500, color: t.ink, marginBottom: 5,
          letterSpacing: '-0.005em',
        }}>
          {pub.doi ? (
            <a href={pub.doi} target="_blank" rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'none',
                backgroundImage: `linear-gradient(transparent 82%, ${t.cream} 82%)` }}>
              {pub.title}
            </a>
          ) : pub.title}
        </div>
        <div style={{ fontSize: 13, color: t.inkSoft, lineHeight: 1.55, marginBottom: 3 }}>
          {formatAuthors(pub.authors)}
        </div>
        <div style={{ fontSize: 12.5, color: t.muted, fontStyle: 'italic', lineHeight: 1.5 }}>
          {pub.venueLong}{pub.status ? ` (${pub.status})` : ''}
          {pub.authors.some(a => a.equal) && <span> · * contributed equally</span>}
        </div>
      </div>
    </li>
  );
}

function H_PubListView({ pubs, t }) {
  const intl = pubs.filter(p => p.scope === 'international');
  const dom  = pubs.filter(p => p.scope === 'domestic');
  const heading = {
    fontFamily: H_FONTS.body, fontSize: 11, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: t.accent, fontWeight: 700,
    marginBottom: 6, marginTop: 8,
  };
  return (
    <div>
      {intl.length > 0 && (
        <>
          <div style={heading}>International</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
            {intl.map((p, i) => <H_PubRow key={i} pub={p} t={t} />)}
          </ul>
        </>
      )}
      {dom.length > 0 && (
        <>
          <div style={heading}>Domestic</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {dom.map((p, i) => <H_PubRow key={i} pub={p} t={t} />)}
          </ul>
        </>
      )}
    </div>
  );
}

// =========================================================================
// MODE: TIMELINE (vertical spine grouped by year)
// =========================================================================
function H_TimelineNode({ pub, t }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', paddingLeft: 28, marginBottom: 20,
      }}>
      {/* Dot on spine */}
      <div style={{
        position: 'absolute', left: -5, top: 6,
        width: 12, height: 12, borderRadius: '50%',
        background: t.paper,
        border: `2px solid ${pub.status === 'to appear' ? t.accent : t.accentSoft}`,
        transition: 'transform .2s, background .2s',
        transform: hover ? 'scale(1.35)' : 'scale(1)',
      }} />
      <div style={{
        display: 'flex', gap: 10, alignItems: 'center', marginBottom: 4, flexWrap: 'wrap',
      }}>
        <span style={{
          fontSize: 11, color: t.inkSoft, fontWeight: 600, letterSpacing: '0.04em',
        }}>{pub.venueShort}</span>
        {pub.status && <span style={{ fontSize: 11, color: t.muted, fontStyle: 'italic' }}>· {pub.status}</span>}
        <div style={{ flex: 1 }} />
        {pub.tags.slice(0, 2).map(tg => (
          <span key={tg} style={{
            fontSize: 10, color: t.sage, fontWeight: 600, letterSpacing: '0.04em',
            padding: '2px 7px', borderRadius: 999, border: `1px solid ${t.rule}`,
          }}>{tg}</span>
        ))}
      </div>
      <div style={{
        fontFamily: H_FONTS.display, fontSize: 16.5, lineHeight: 1.35,
        fontWeight: 500, color: t.ink, marginBottom: 4,
        letterSpacing: '-0.005em',
      }}>
        {pub.doi ? (
          <a href={pub.doi} target="_blank" rel="noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}>{pub.title}</a>
        ) : pub.title}
      </div>
      <div style={{ fontSize: 12.5, color: t.inkSoft, lineHeight: 1.5 }}>
        {formatAuthors(pub.authors)}
        {pub.authors.some(a => a.equal) && (
          <span style={{ color: t.muted, fontStyle: 'italic' }}> · * contributed equally</span>
        )}
      </div>
    </div>
  );
}

function H_PubTimelineView({ pubs, t }) {
  // Group by year, desc.
  const byYear = {};
  pubs.forEach(p => { (byYear[p.year] = byYear[p.year] || []).push(p); });
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical spine */}
      <div style={{
        position: 'absolute', left: 0, top: 8, bottom: 8,
        width: 1, background: t.rule,
      }} />
      {years.map((yr, yi) => (
        <div key={yr} style={{ marginBottom: 36, paddingLeft: 0 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: H_FONTS.display, fontSize: 34, fontWeight: 500,
            color: t.accent, lineHeight: 1, letterSpacing: '-0.02em',
            background: t.bg, padding: '0 14px 0 0',
            position: 'relative', left: -7, marginBottom: 18,
          }}>
            {yr}
          </div>
          <div>
            {byYear[yr].map((p, i) => <H_TimelineNode key={i} pub={p} t={t} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

// Extract canonical venue key from pub — groups CHI/CHI Poster/CHI EA → 'CHI',
// ACL/ACL Findings → 'ACL', etc.
function venueKey(pub) {
  const v = pub.venueShort || '';
  if (/^CHI/i.test(v)) return 'CHI';
  if (/^ACL/i.test(v)) return 'ACL';
  if (/^IUI/i.test(v)) return 'IUI';
  if (/^ASSETS/i.test(v)) return 'ASSETS';
  if (/^HCIK/i.test(v)) return 'HCIK';
  if (/^JIIS/i.test(v)) return 'JIIS';
  return v;
}

// =========================================================================
// UNIFIED PAPERS SECTION
// =========================================================================
function H_Papers({ t, mode }) {
  const [filter, setFilter] = React.useState('All');

  // Venues present in data, in fixed display order.
  const venueOrder = ['CHI', 'ACL', 'IUI', 'ASSETS', 'HCIK', 'JIIS'];
  const presentVenues = venueOrder.filter(v =>
    PUBLICATIONS.some(p => venueKey(p) === v)
  );
  const filters = ['All', ...presentVenues];

  const filtered = filter === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => venueKey(p) === filter);

  const count = filtered.length;

  return (
    <div id="papers">
      {/* Venue filter chips */}
      <div style={{
        display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24,
        alignItems: 'center',
      }}>
        {filters.map(f => {
          const active = filter === f;
          return (
            <button key={f}
              onClick={() => setFilter(f)}
              style={{
                border: `1px solid ${active ? t.accent : t.rule}`,
                background: active ? t.accent : 'transparent',
                color: active ? t.paper : t.inkSoft,
                padding: '5px 12px', borderRadius: 999,
                fontFamily: H_FONTS.body, fontSize: 12,
                fontWeight: active ? 600 : 500,
                letterSpacing: '0.03em',
                cursor: 'pointer',
                transition: 'all .18s ease',
              }}>
              {f}
            </button>
          );
        })}
        <span style={{
          marginLeft: 'auto', fontSize: 12, color: t.muted,
          fontFamily: H_FONTS.body, letterSpacing: '0.04em',
        }}>
          {count} {count === 1 ? 'paper' : 'papers'}
        </span>
      </div>

      {mode === 'cards'    && <H_PubCardsView    pubs={filtered} t={t} />}
      {mode === 'list'     && <H_PubListView     pubs={filtered} t={t} />}
      {mode === 'timeline' && <H_PubTimelineView pubs={filtered} t={t} />}
    </div>
  );
}

Object.assign(window, {
  H_PubCard, H_PubCardsView,
  H_PubRow, H_PubListView,
  H_TimelineNode, H_PubTimelineView,
  H_Papers,
});
