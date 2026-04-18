import type { CompareData } from '../data/content';
import CodeBlock from './CodeBlock';

function ComparePanel({ label, content, code }: { label: string; content: string; code?: string }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-elev)',
        border: '1px solid var(--color-line)',
        borderRadius: '10px',
        padding: '16px 20px',
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted)',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        className="compare-content"
        style={{ fontSize: '14px', color: 'var(--color-ink-soft)' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {code && <CodeBlock code={code} />}
      <style>{`
        .compare-content strong { color: var(--color-ink); font-weight: 600; }
        .compare-content code {
          background: var(--color-bg-card);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-accent);
          font-family: var(--font-mono);
          font-size: 0.85em;
          border: 1px solid var(--color-line);
        }
        .compare-content ul { list-style: disc; padding-left: 1rem; }
        .compare-content li { margin-bottom: 4px; font-size: 14px; }
      `}</style>
    </div>
  );
}

export default function Compare({ data }: { data: CompareData }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        margin: '16px 0',
      }}
    >
      <ComparePanel {...data.left} />
      <ComparePanel {...data.right} />
    </div>
  );
}
