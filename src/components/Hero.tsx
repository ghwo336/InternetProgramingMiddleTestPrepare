import { heroData } from '../data/content';

export default function Hero() {
  return (
    <header
      style={{
        backgroundColor: 'var(--color-bg-card)',
        borderBottom: '1px solid var(--color-line)',
        padding: '3rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {heroData.eyebrow}
        </div>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--color-ink)',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {heroData.title}
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--color-ink-soft)', marginBottom: '8px' }}>
          {heroData.subtitle}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--color-ink-muted)', maxWidth: '42rem', marginBottom: '6px' }}>
          {heroData.desc}
        </p>
        <p style={{ fontSize: '13px', color: '#ef4444', fontWeight: 500, maxWidth: '42rem', marginBottom: '1.5rem' }}>
          {heroData.disclaimer}
        </p>

        <a
          href="https://x.com/ihojae212644"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(29,161,242,0.15), rgba(45,212,191,0.1))',
            border: '1px solid rgba(29,161,242,0.3)',
            color: '#e4e4e7',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(29,161,242,0.25), rgba(45,212,191,0.18))';
            e.currentTarget.style.borderColor = 'rgba(29,161,242,0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(29,161,242,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(29,161,242,0.15), rgba(45,212,191,0.1))';
            e.currentTarget.style.borderColor = 'rgba(29,161,242,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          가능하시면 팔로우 한번 부탁드립니다!
        </a>
      </div>
    </header>
  );
}
