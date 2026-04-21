// Homepage — Main sections (hero, about, currently, education, contact)
// Uses H_PALETTES + H_FONTS from homepage-core.jsx.

// Shared chapter scaffold — roman numeral + hand label + section content.
function H_Chapter({ number, label, title, children, aside, t, id }) {
  return (
    <section id={id} className="h-reveal" style={{ padding: '72px 0', borderTop: `1px solid ${t.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.1fr', gap: 56, marginBottom: 36 }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: H_FONTS.hand, fontSize: 64, color: t.accent,
            lineHeight: 0.9, marginBottom: 4, fontWeight: 500,
          }}>{number}</div>
          <div style={{
            fontFamily: H_FONTS.body, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: t.muted, fontWeight: 600,
          }}>{label}</div>
          {aside && (
            <div style={{
              marginTop: 24, fontFamily: H_FONTS.hand, fontSize: 19,
              color: t.sage, lineHeight: 1.3,
              transform: 'rotate(-1.5deg)', maxWidth: 220,
            }}>
              ✽ {aside}
            </div>
          )}
        </div>
        <div>
          <h2 style={{
            fontFamily: H_FONTS.display, fontSize: 40, lineHeight: 1.1, fontWeight: 500,
            color: t.ink, letterSpacing: '-0.02em', marginBottom: 20,
          }}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

// Top navigation.
function H_TopBar({ t }) {
  return (
    <div style={{
      padding: '20px 72px', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', borderBottom: `1px solid ${t.rule}`,
      position: 'sticky', top: 0, zIndex: 20,
      background: t.bg + 'ee', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    }}>
      <a href="#top" style={{
        fontFamily: H_FONTS.hand, fontSize: 28, color: t.accent, fontWeight: 500,
        textDecoration: 'none',
      }}>
        jaehoon.
      </a>
      <div style={{ display: 'flex', gap: 26, fontSize: 13, fontWeight: 500, color: t.inkSoft }}>
        {[
          ['hello', 'hello'],
          ['currently', 'currently'],
          ['school', 'school'],
          ['papers', 'papers'],
          ['reach out', 'reachout'],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} style={{
            color: 'inherit', textDecoration: 'none',
            borderBottom: '1px dashed transparent', paddingBottom: 1,
            transition: 'border-color .2s, color .2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderBottomColor = t.accent;
              e.currentTarget.style.color = t.ink;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderBottomColor = 'transparent';
              e.currentTarget.style.color = t.inkSoft;
            }}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

// Hero with photo slider.
function H_Hero({ t }) {
  return (
    <header id="top" style={{ padding: '84px 72px 60px', position: 'relative' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 320px',
        gap: 72, alignItems: 'end',
      }}>
        <div>
          <div style={{
            fontFamily: H_FONTS.hand, fontSize: 30, color: t.sage,
            transform: 'rotate(-2deg)', display: 'inline-block', marginBottom: 10,
          }}>
            hello, I'm —
          </div>
          <h1 style={{
            fontFamily: H_FONTS.display, fontSize: 92, lineHeight: 0.98, fontWeight: 500,
            letterSpacing: '-0.035em', color: t.ink, marginBottom: 22,
          }}>
            Jaehoon,<br />
            <span className="h-researcher" style={{
              color: t.accent, fontStyle: 'italic', fontWeight: 400,
              position: 'relative', display: 'inline-block',
            }}>
              a researcher
              <svg viewBox="0 0 320 14" preserveAspectRatio="none" aria-hidden="true"
                style={{
                  position: 'absolute', left: 0, right: 0, bottom: -6,
                  width: '100%', height: 10, overflow: 'visible',
                }}>
                <path d="M4,9 Q80,2 160,7 T316,5"
                  fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round"
                  style={{
                    strokeDasharray: 360, strokeDashoffset: 360,
                    animation: 'h-draw 1.6s 0.45s cubic-bezier(.65,.05,.36,1) forwards',
                  }} />
              </svg>
            </span>
            <br />
            <span style={{ fontSize: 54, color: t.inkSoft, fontWeight: 400 }}>
              of people{' '}
              <span className="h-times" style={{
                display: 'inline-block', color: t.accent,
                animation: 'h-spin 14s linear infinite',
                transformOrigin: '50% 55%',
              }}>×</span>
              {' '}AI.
            </span>
          </h1>
          {/* Affiliation one-liner */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
            flexWrap: 'wrap',
            fontFamily: H_FONTS.body, fontSize: 12.5, color: t.inkSoft,
            letterSpacing: '0.04em', fontWeight: 500,
          }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: t.accent,
            }} />
            <span>Ph.D. student</span>
            <span style={{ color: t.muted }}>·</span>
            <span>Seoul National University</span>
            <span style={{ color: t.muted }}>·</span>
            <a href={PROFILE.labUrl} target="_blank" rel="noreferrer"
              style={{ color: t.inkSoft, textDecoration: 'none', borderBottom: `1px dashed ${t.rule}` }}>
              Human-Centered Computing Lab
            </a>
          </div>
          <p style={{
            fontSize: 17, lineHeight: 1.65, color: t.inkSoft, maxWidth: 540,
          }}>
            Ph.D. student at Seoul National University, working in the{' '}
            <a href={PROFILE.labUrl} target="_blank" rel="noreferrer"
              style={{
                color: t.accent, textDecoration: 'none',
                backgroundImage: `linear-gradient(transparent 65%, ${t.cream} 65%)`,
              }}>
              Human-Centered Computing Lab
            </a>
            . Quietly obsessed with how AI listens, misunderstands, and learns
            to meet us where we are.
          </p>
        </div>
        <div style={{ position: 'relative', justifySelf: 'end', paddingBottom: 72 }}>
          <H_PhotoSlider t={t} size={320} />
          <div style={{
            position: 'absolute', bottom: 12, left: '50%',
            transform: 'translateX(-50%) rotate(3deg)',
            fontFamily: H_FONTS.hand, fontSize: 20, color: t.sage,
            whiteSpace: 'nowrap',
          }}>
            ✎ hoon95@snu.ac.kr
          </div>
        </div>
      </div>
    </header>
  );
}

// About + research interests.
function H_About({ t }) {
  return (
    <H_Chapter
      t={t} id="hello"
      number="i." label="hello"
      title="About the work, and why."
      aside="the intersection of human-computer & human-AI interaction">
      {ABOUT_PARAGRAPHS.map((p, i) => {
        if (i === 0 && p.length > 0) {
          // First paragraph gets a drop cap.
          const firstChar = p.charAt(0);
          const rest = p.slice(1);
          return (
            <p key={i} style={{
              fontFamily: H_FONTS.display, fontSize: 19, lineHeight: 1.7,
              color: t.ink, marginBottom: 16, maxWidth: 660,
              letterSpacing: '-0.005em', fontWeight: 400,
            }}>
              <span style={{
                float: 'left',
                fontFamily: H_FONTS.display,
                fontSize: 76, lineHeight: 0.85,
                fontWeight: 500,
                color: t.accent,
                paddingRight: 10, paddingTop: 6,
                letterSpacing: '-0.04em',
              }}>{firstChar}</span>
              {rest}
            </p>
          );
        }
        return (
          <p key={i} style={{
            fontFamily: H_FONTS.display, fontSize: 19, lineHeight: 1.7,
            color: t.ink, marginBottom: 16, maxWidth: 660,
            letterSpacing: '-0.005em', fontWeight: 400,
          }}>{p}</p>
        );
      })}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px 28px', marginTop: 30, maxWidth: 640,
      }}>
        {RESEARCH_INTERESTS.map(r => (
          <div key={r.tag} style={{
            display: 'flex', gap: 12, alignItems: 'baseline',
            padding: '10px 0', borderTop: `1px dotted ${t.rule}`,
          }}>
            <span style={{
              fontFamily: H_FONTS.hand, fontSize: 20, color: t.accent,
              fontWeight: 600, minWidth: 44,
            }}>{r.tag}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: t.ink }}>{r.label}</div>
              <div style={{ fontSize: 13, color: t.inkSoft, fontStyle: 'italic' }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </H_Chapter>
  );
}

// Now / currently — split into research focus (left) and off-screen (right).
function H_Now({ t }) {
  return (
    <H_Chapter
      t={t} id="currently"
      number="ii." label="currently"
      title="What I'm into, these days."
      aside="research questions & things that keep me moving">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
        gap: 32, maxWidth: 760,
      }}>
        {/* Left: research focus */}
        <div style={{
          background: t.paper, borderRadius: 18, padding: '24px 28px',
          border: `1px solid ${t.rule}`,
        }}>
          <div style={{
            fontFamily: H_FONTS.body, fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: t.accent, fontWeight: 700,
            marginBottom: 14,
          }}>
            research focus
          </div>
          {NOW_RESEARCH.map((n, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '22px 1fr', gap: 10, alignItems: 'baseline',
              padding: '10px 0',
              borderBottom: i === NOW_RESEARCH.length - 1 ? 'none' : `1px dotted ${t.rule}`,
            }}>
              <span style={{
                fontFamily: H_FONTS.hand, fontSize: 20, color: t.sage, fontWeight: 600,
              }}>✽</span>
              <span style={{
                fontFamily: H_FONTS.display, fontSize: 16, color: t.ink, lineHeight: 1.5,
              }}>
                {n}
              </span>
            </div>
          ))}
        </div>

        {/* Right: off-screen */}
        <div>
          <div style={{
            fontFamily: H_FONTS.body, fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: t.accent, fontWeight: 700,
            marginBottom: 14,
          }}>
            off-screen
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
          }}>
            {NOW_OFFSCREEN.map((act, i) => (
              <div key={i} style={{
                background: t.paper,
                padding: 10, paddingBottom: 14,
                borderRadius: 6,
                boxShadow: `0 6px 18px ${t.ink}12, 0 1px 0 ${t.ink}08`,
                transform: i === 0 ? 'rotate(-1.2deg)' : 'rotate(1deg)',
                transition: 'transform .3s cubic-bezier(.2,.7,.3,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = i === 0 ? 'rotate(-1.2deg)' : 'rotate(1deg)'; }}
              >
                {/* Big photo */}
                {act.img ? (
                  <div style={{
                    width: '100%', aspectRatio: '1 / 1',
                    overflow: 'hidden', borderRadius: 2,
                    background: t.cream,
                  }}>
                    <img src={act.img} alt={act.label} style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    }} />
                  </div>
                ) : (
                  <div style={{
                    width: '100%', aspectRatio: '1 / 1', borderRadius: 2,
                    background: `repeating-linear-gradient(45deg, ${t.cream}, ${t.cream} 6px, ${t.rule} 6px, ${t.rule} 12px)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 11,
                    color: t.inkSoft, textAlign: 'center',
                  }}>
                    photo<br/>{act.label.toLowerCase()}
                  </div>
                )}
                {/* Polaroid caption */}
                <div style={{ paddingTop: 10, textAlign: 'left' }}>
                  <div style={{
                    fontFamily: H_FONTS.display, fontSize: 17, fontWeight: 500,
                    color: t.ink, lineHeight: 1.2, marginBottom: 2,
                  }}>
                    {act.label}
                  </div>
                  <div style={{
                    fontFamily: H_FONTS.hand, fontSize: 15, color: t.sage, lineHeight: 1.3,
                  }}>
                    @ {act.place}
                  </div>
                  {act.since && (
                    <div style={{
                      fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em',
                      color: t.accent, textTransform: 'uppercase',
                      marginTop: 5,
                    }}>
                      since {act.since}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 10, fontSize: 12, color: t.muted,
            fontStyle: 'italic', textAlign: 'right',
          }}>
            — training keeps the thinking honest
          </div>
        </div>
      </div>
    </H_Chapter>
  );
}

// Education.
function H_Education({ t }) {
  return (
    <H_Chapter
      t={t} id="school"
      number="iii." label="school"
      title="Where I've studied."
      aside="currently in year two of an integrated program">
      {EDUCATION.map((e, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '180px 1fr',
          gap: 28, padding: '18px 0', maxWidth: 660,
          borderBottom: i === EDUCATION.length - 1 ? 'none' : `1px solid ${t.rule}`,
        }}>
          <div style={{
            fontFamily: H_FONTS.hand, fontSize: 22,
            color: e.current ? t.accent : t.muted,
            lineHeight: 1.2,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {e.current && (
              <span style={{
                width: 9, height: 9, borderRadius: '50%', background: t.accent,
                boxShadow: `0 0 0 4px ${t.accent}22`,
                animation: 'h-pulse 2.2s ease-in-out infinite',
                display: 'inline-block', flexShrink: 0,
              }} />
            )}
            {e.dates}
          </div>
          <div>
            <div style={{
              fontFamily: H_FONTS.display, fontSize: 22, color: t.ink,
              marginBottom: 3, fontWeight: 500,
            }}>
              {e.school}
            </div>
            <div style={{ fontSize: 14, color: t.inkSoft, fontStyle: 'italic' }}>{e.degree}</div>
          </div>
        </div>
      ))}
    </H_Chapter>
  );
}

// Contact.
function H_Contact({ t }) {
  const items = [
    { label: 'email',    value: PROFILE.email,          href: `mailto:${PROFILE.email}`, ic: '✉' },
    { label: 'scholar',  value: PROFILE.scholarHandle,  href: PROFILE.scholar,           ic: 'GS' },
    { label: 'github',   value: PROFILE.githubHandle,   href: PROFILE.github,            ic: '◐' },
    { label: 'linkedin', value: PROFILE.linkedinHandle, href: PROFILE.linkedin,          ic: 'in' },
  ];
  return (
    <H_Chapter
      t={t} id="reachout"
      number="v." label="reach out"
      title="Say hello, honestly."
      aside="always up for a coffee in Gwanak">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 500 }}>
        {items.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{
            display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 16, alignItems: 'center',
            padding: '16px 20px', background: t.paper,
            border: `1px solid ${t.rule}`, borderRadius: 14,
            color: t.ink, textDecoration: 'none', transition: 'all .2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = t.accent;
              e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = t.rule;
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: t.cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: H_FONTS.display, fontSize: 16, color: t.accent,
              fontWeight: 600,
            }}>{c.ic}</div>
            <div>
              <div style={{ fontFamily: H_FONTS.hand, fontSize: 16, color: t.muted }}>{c.label}</div>
              <div style={{ fontFamily: H_FONTS.display, fontSize: 18, color: t.ink }}>{c.value}</div>
            </div>
            <span style={{ fontSize: 18, color: t.accent }}>→</span>
          </a>
        ))}
      </div>
    </H_Chapter>
  );
}

// Footer with last-updated stamp.
function H_Footer({ t }) {
  const updated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  return (
    <footer style={{
      borderTop: `1px solid ${t.rule}`, padding: '32px 72px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: H_FONTS.hand, fontSize: 18, color: t.muted,
      flexWrap: 'wrap', gap: 12,
    }}>
      <span>made with care · Seoul, {new Date().getFullYear()}</span>
      <span style={{
        fontFamily: H_FONTS.body, fontSize: 11,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: t.muted, fontWeight: 500,
      }}>
        Last updated · {updated}
      </span>
      <span>✽ ✽ ✽</span>
    </footer>
  );
}

Object.assign(window, {
  H_Chapter, H_TopBar, H_Hero, H_About, H_Now, H_Education, H_Contact, H_Footer,
});
