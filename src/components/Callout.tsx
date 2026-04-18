import type { CalloutData } from '../data/content';

const borderColors: Record<string, string> = {
  warn: 'var(--color-accent)',
  tip: 'var(--color-warn)',
  key: 'var(--color-ok)',
};

const labelColors: Record<string, string> = {
  warn: 'var(--color-accent)',
  tip: 'var(--color-warn)',
  key: 'var(--color-ok)',
};

export default function Callout({ type, label, content }: CalloutData) {
  return (
    <div
      style={{
        margin: '16px 0',
        borderRadius: '10px',
        borderLeft: `4px solid ${borderColors[type]}`,
        backgroundColor: 'var(--color-bg-elev)',
        padding: '16px 20px',
        fontSize: '14px',
      }}
    >
      <span
        className="font-mono"
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: labelColors[type],
          display: 'block',
          marginBottom: '6px',
        }}
      >
        {label}
      </span>
      <div
        className="callout-content"
        style={{ color: 'var(--color-ink-soft)' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style>{`
        .callout-content strong { color: var(--color-ink); font-weight: 600; }
        .callout-content code {
          background: var(--color-bg-card);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-accent);
          font-family: var(--font-mono);
          font-size: 0.9em;
          border: 1px solid var(--color-line);
        }
        .callout-content mark {
          background: rgba(251, 191, 36, 0.2);
          color: var(--color-ink);
          padding: 1px 4px;
          border-radius: 3px;
        }
        .callout-content pre {
          background: var(--color-code-bg);
          border-radius: 8px;
          padding: 12px 16px;
          overflow-x: auto;
          font-family: var(--font-mono);
          color: var(--color-code-ink);
          font-size: 13px;
          margin-top: 8px;
        }
        .callout-content ul { list-style: disc; padding-left: 1rem; }
        .callout-content li { margin-bottom: 4px; }
      `}</style>
    </div>
  );
}
