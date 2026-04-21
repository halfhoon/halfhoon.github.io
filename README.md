# Jaehoon Choi — Homepage

Personal research homepage. Built with React (via CDN + Babel), no build step required.

## Structure

```
index.html              Main entry point (GitHub Pages default)
data.jsx                Profile, publications, education, etc.
homepage-core.jsx       Palette, fonts, photo slider
homepage-sections.jsx   Hero, About, Now, Education, Contact, Footer
homepage-papers.jsx     Papers section (Cards / List / Timeline views)
assets/                 Photos
```

## Deploying to GitHub Pages

1. Create a new repo (e.g. `your-username.github.io` for root domain, or any repo for project page)
2. Copy all files in this folder to the repo root
3. Push to `main` branch
4. Go to Settings → Pages → Source → deploy from `main` branch, root folder
5. Visit `https://your-username.github.io/` (or `/repo-name/`)

## Editing content

Most changes happen in `data.jsx`:

- **Profile info** — `PROFILE` object (email, links, photo paths)
- **About paragraphs** — `ABOUT_PARAGRAPHS` array
- **Research interests** — `RESEARCH_INTERESTS` array
- **Currently** — `NOW_RESEARCH` (research topics), `NOW_OFFSCREEN` (hobbies)
- **Education** — `EDUCATION` array
- **Publications** — `PUBLICATIONS` array

Just edit and reload — no build step.

## Adding photos

Drop photos into `assets/`, then reference them in `data.jsx`:

- **Hero slider photos** — `PROFILE.photos` array
- **Off-screen activity photos** — `NOW_OFFSCREEN[].img`

## Changing theme / view mode

The Tweaks panel (only shown when the design host's edit mode is on) is stripped in production —
to change defaults, edit the `TWEAK_DEFAULTS` JSON block near the top of `index.html`:

```js
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ink",           // "ink" | "sage" | "signal" | "navyink"
  "papersView": "cards"       // "cards" | "list" | "timeline"
}/*EDITMODE-END*/;
```
