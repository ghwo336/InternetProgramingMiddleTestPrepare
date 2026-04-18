import { useState, useEffect, useRef, useCallback } from 'react';
import { sections } from './data/content';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Section from './components/Section';
import BackToTop from './components/BackToTop';

const SIDEBAR_WIDTH = '16rem'; // 256px
const STORAGE_KEY = 'swift-exam-kit-last-section';

function App() {
  const [allExpanded, setAllExpanded] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Restore last viewed section on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const el = document.getElementById(saved);
      if (el) {
        // Small delay so DOM is fully laid out
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'instant' });
        });
      }
    }
  }, []);

  // Save active section to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeId);
  }, [activeId]);

  useEffect(() => {
    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleExpandAll = useCallback(() => setAllExpanded((v) => !v), []);
  const handleToggleSidebar = useCallback(() => setSidebarCollapsed((v) => !v), []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Sidebar activeId={activeId} collapsed={sidebarCollapsed} onToggleCollapse={handleToggleSidebar} />

      {/* Main content — offset by sidebar on lg+ */}
      <div
        className="min-h-screen"
        style={{
          marginLeft: `var(--sidebar-offset, 0px)`,
          transition: 'margin-left 0.25s ease',
        }}
      >
        <Hero />

        {/* Sticky bar: expand/collapse quiz only */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backgroundColor: 'rgba(13, 13, 18, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--color-line)',
            padding: '10px 2rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={handleExpandAll}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-bg-elev)',
              border: '1px solid var(--color-line)',
              borderRadius: '8px',
              color: 'var(--color-ink)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-line)';
              e.currentTarget.style.color = 'var(--color-ink)';
            }}
          >
            {allExpanded ? '퀴즈 모두 접기' : '퀴즈 모두 펼치기'}
          </button>
        </div>

        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem' }}>
          {sections.map((section) => (
            <Section
              key={section.id}
              section={section}
              allExpanded={allExpanded}
            />
          ))}
        </main>

        <footer
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', borderTop: '1px solid var(--color-line)' }}
          className="text-center text-[13px] font-mono"
        >
          <span style={{ color: 'var(--color-ink-muted)' }}>
            Internet Programming · Swift Exam Kit · v2.0 · 18개 파일 기반 · All-in-One
          </span>
        </footer>
      </div>

      <BackToTop />

      <style>{`
        :root { --sidebar-offset: 0px; --sidebar-w: ${SIDEBAR_WIDTH}; }
        @media (min-width: 1024px) {
          :root { --sidebar-offset: ${sidebarCollapsed ? '0px' : SIDEBAR_WIDTH}; }
        }
      `}</style>
    </div>
  );
}

export default App;
