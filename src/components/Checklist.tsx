import { useState, useEffect } from 'react';
import type { ChecklistGroup } from '../data/content';

function getKey(title: string, text: string, idx: number) {
  return `chk_${title}_${text.slice(0, 20)}_${idx}`;
}

export default function ChecklistCard({ data }: { data: ChecklistGroup }) {
  const [checked, setChecked] = useState<boolean[]>(() =>
    data.items.map((item, i) => {
      const key = getKey(data.title, item, i);
      return localStorage.getItem(key) === '1';
    })
  );

  useEffect(() => {
    data.items.forEach((item, i) => {
      const key = getKey(data.title, item, i);
      localStorage.setItem(key, checked[i] ? '1' : '0');
    });
  }, [checked, data.items, data.title]);

  const toggle = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-line)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1.25rem',
      }}
    >
      <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '12px' }}>
        {data.title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.items.map((item, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '10px 0',
              borderBottom: i < data.items.length - 1 ? '1px dashed var(--color-line)' : 'none',
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '14px',
              color: checked[i] ? 'var(--color-ink-muted)' : 'var(--color-ink-soft)',
              textDecoration: checked[i] ? 'line-through' : 'none',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: '18px',
                height: '18px',
                marginTop: '2px',
                borderRadius: '4px',
                border: checked[i] ? 'none' : '1.5px solid var(--color-line)',
                backgroundColor: checked[i] ? 'var(--color-ok)' : 'var(--color-bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: '#fff',
                transition: 'all 0.15s',
              }}
            >
              {checked[i] && '\u2713'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
