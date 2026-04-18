import { useState } from 'react';
import type { QuizItem, QuizGroup } from '../data/content';

function QuizItemCard({ item, forceOpen }: { item: QuizItem; forceOpen: boolean }) {
  const [open, setOpen] = useState(false);
  const isOpen = open || forceOpen;

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        borderRadius: '10px',
        border: `1px solid ${isOpen ? 'var(--color-accent)' : 'var(--color-line)'}`,
        padding: '18px 22px',
        marginBottom: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        backgroundColor: isOpen ? 'var(--color-bg-elev)' : 'var(--color-bg-card)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontWeight: 500, color: 'var(--color-ink)' }}>
        <span
          className="font-mono"
          style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '18px', flexShrink: 0 }}
        >
          Q
        </span>
        <span style={{ whiteSpace: 'pre-line' }}>{item.question}</span>
      </div>
      {isOpen && (
        <div
          className="font-mono"
          style={{
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: '1px dashed var(--color-line)',
            color: 'var(--color-ok)',
            fontSize: '13px',
            whiteSpace: 'pre-line',
          }}
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function QuizCardGroup({
  data,
  allExpanded,
}: {
  data: QuizGroup;
  allExpanded: boolean;
}) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '12px' }}>
        {data.title}
      </h3>
      {data.items.map((item, i) => (
        <QuizItemCard key={i} item={item} forceOpen={allExpanded} />
      ))}
    </div>
  );
}
