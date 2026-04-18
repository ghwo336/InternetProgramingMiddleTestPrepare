interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  onExpandAll: () => void;
  allExpanded: boolean;
}

export default function SearchBar({ value, onChange, onExpandAll, allExpanded }: SearchBarProps) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backgroundColor: 'rgba(13, 13, 18, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-line)',
        padding: '12px 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ position: 'relative', flex: 1, minWidth: '200px', maxWidth: '400px' }}>
        <span
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--color-ink-muted)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <line x1="11" y1="11" x2="14" y2="14" />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="검색 (예: 옵셔널, 배열, Spaces, 얼럿)"
          style={{
            width: '100%',
            paddingLeft: '36px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
            backgroundColor: 'var(--color-bg-elev)',
            border: '1px solid var(--color-line)',
            borderRadius: '8px',
            color: 'var(--color-ink)',
            fontSize: '14px',
            fontFamily: 'var(--font-sans)',
            outline: 'none',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-line)')}
        />
      </div>
      <button
        onClick={onExpandAll}
        style={{
          padding: '10px 16px',
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
  );
}
