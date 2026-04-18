import { useState, useEffect } from 'react';
import { tocItems } from '../data/content';

interface SidebarProps {
  activeId: string;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ activeId, collapsed, onToggleCollapse }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeId]);

  return (
    <>
      {/* Mobile hamburger — hidden on lg+ */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sidebar-mobile-btn fixed z-50"
        style={{
          display: 'block',
          top: '1rem',
          left: '1rem',
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-line)',
          color: 'var(--color-ink)',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="메뉴 열기"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display: 'block', margin: 'auto' }}>
          {mobileOpen ? (
            <>
              <line x1="4" y1="4" x2="14" y2="14" />
              <line x1="14" y1="4" x2="4" y2="14" />
            </>
          ) : (
            <>
              <line x1="3" y1="5" x2="15" y2="5" />
              <line x1="3" y1="9" x2="15" y2="9" />
              <line x1="3" y1="13" x2="15" y2="13" />
            </>
          )}
        </svg>
      </button>

      {/* Desktop collapse toggle — visible on lg+ only */}
      <button
        onClick={onToggleCollapse}
        className="sidebar-collapse-btn fixed z-50"
        style={{
          display: 'none',
          top: '1rem',
          left: collapsed ? '1rem' : 'calc(var(--sidebar-w, 16rem) - 2.5rem)',
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-line)',
          color: 'var(--color-ink-muted)',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'left 0.25s ease, border-color 0.15s, color 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-accent)';
          e.currentTarget.style.color = 'var(--color-accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-line)';
          e.currentTarget.style.color = 'var(--color-ink-muted)';
        }}
        aria-label={collapsed ? '사이드바 열기' : '사이드바 닫기'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
          {collapsed ? (
            // chevron right (open)
            <polyline points="6,3 11,8 6,13" />
          ) : (
            // chevron left (close)
            <polyline points="10,3 5,8 10,13" />
          )}
        </svg>
      </button>

      {/* Overlay (mobile only) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className="fixed z-40 sidebar-panel"
        style={{
          top: 0,
          left: 0,
          height: '100vh',
          width: 'var(--sidebar-w, 16rem)',
          backgroundColor: 'var(--color-bg-card)',
          borderRight: '1px solid var(--color-line)',
          overflowY: 'auto',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(calc(-1 * var(--sidebar-w, 16rem)))',
          transition: 'transform 0.25s ease',
        }}
      >
        <div style={{ padding: '1.5rem 1.25rem 1rem' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            Swift Exam Kit
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-ink-muted)' }}>
            인터넷프로그래밍 핵심 정리
          </div>
        </div>
        <nav style={{ padding: '0 0.75rem 2rem' }}>
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '10px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'background 0.15s, color 0.15s',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-ink-soft)',
                  backgroundColor: isActive ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-elev)';
                    e.currentTarget.style.color = 'var(--color-ink)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-ink-soft)';
                  }
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: isActive ? 'var(--color-accent)' : 'rgba(45, 212, 191, 0.5)',
                    flexShrink: 0,
                  }}
                >
                  {item.number}
                </span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.title}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      <style>{`
        @media (min-width: 1024px) {
          .sidebar-panel {
            transform: ${collapsed ? 'translateX(calc(-1 * var(--sidebar-w, 16rem)))' : 'translateX(0)'} !important;
          }
          .sidebar-mobile-btn { display: none !important; }
          .sidebar-collapse-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
