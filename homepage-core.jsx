// Homepage — Final
// Ink Mono layout from Garden, rendered with Navy Ink palette by default.
// Photo slider (300–340px), three papers view modes (cards/list/timeline),
// tweaks for color theme + papers view + accent.

// =========================================================================
// PALETTES
// =========================================================================
const H_PALETTES = {
  navyink: {
    name: 'Navy Ink',
    bg: '#edeff4', paper: '#f7f8fc',
    ink: '#0f1c33', inkSoft: '#37466a', muted: '#8791a8',
    rule: '#d2d7e2', cream: '#dde4f1',
    accent: '#1a2f5c', accentSoft: '#3d6ab0',
    sage: '#5a7490',
    glow: '#1a2f5c',
  },
  ink: {
    name: 'Ink',
    bg: '#ecebe7', paper: '#f7f6f2',
    ink: '#14161a', inkSoft: '#42454d', muted: '#8c8e92',
    rule: '#d5d3ce', cream: '#dddbd5',
    accent: '#2d2f36', accentSoft: '#585a62',
    sage: '#6f7a6b',
    glow: '#2d2f36',
  },
  warm: {
    name: 'Warm',
    bg: '#f6efe3', paper: '#fdfaf1',
    ink: '#3a2e21', inkSoft: '#6e5d48', muted: '#a39377',
    rule: '#e4d9c2', cream: '#f0e5ce',
    accent: '#c4614a', accentSoft: '#d9876f',
    sage: '#7a8f6b',
    glow: '#c4614a',
  },
};

const H_FONTS = {
  display: '"Newsreader", "Source Serif 4", Georgia, serif',
  body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  hand: '"Caveat", "Kalam", cursive',
};

// =========================================================================
// PHOTO SLIDER
// =========================================================================
function H_PhotoSlider({ t, size = 320 }) {
  const photos = (PROFILE.photos && PROFILE.photos.length > 1)
    ? PROFILE.photos
    : [PROFILE.photo];
  const photoPositions = PROFILE.photoPositions || {};
  const [idx, setIdx] = React.useState(0);
  const n = photos.length;

  // Auto-rotate if there's more than one photo.
  React.useEffect(() => {
    if (n <= 1) return;
    const id = setInterval(() => setIdx(i => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n]);

  const go = (dir) => setIdx(i => (i + dir + n) % n);

  return (
    <div style={{ position: 'relative', width: size }}>
      {/* Soft accent halo behind photo */}
      <div style={{
        position: 'absolute', inset: -28, borderRadius: '50%',
        background: `radial-gradient(circle at 50% 48%, ${t.accent}2e, ${t.accent}10 55%, ${t.accent}00 75%)`,
        pointerEvents: 'none',
      }} />

      {/* Photo stack — crossfades between photos */}
      <div style={{
        position: 'relative', width: size, height: size, borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: `0 14px 42px ${t.ink}22`,
      }}>
        {photos.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`${PROFILE.name} ${i + 1}`}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: photoPositions[src] || '50% 50%',
              opacity: i === idx ? 1 : 0,
              transition: 'opacity .8s cubic-bezier(.4,0,.2,1)',
            }}
          />
        ))}
      </div>

      {/* Dots only — clickable, no arrows */}
      {n > 1 && (
        <div style={{
          position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 6,
        }}>
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Photo ${i + 1}`}
              style={{
                width: i === idx ? 18 : 6, height: 6, borderRadius: 3,
                background: i === idx ? t.accent : t.rule,
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all .25s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { H_PALETTES, H_FONTS, H_PhotoSlider });
