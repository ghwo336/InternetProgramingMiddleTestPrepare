import type { TableData } from '../data/content';
import RichText from './RichText';

export default function Table({ data }: { data: TableData }) {
  return (
    <div
      style={{
        overflowX: 'auto',
        border: '1px solid var(--color-line)',
        borderRadius: '12px',
        marginBottom: '20px',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--color-bg-card)' }}>
        <thead>
          <tr>
            {data.headers.map((h, i) => (
              <th
                key={i}
                className="font-mono"
                style={{
                  padding: '14px 18px',
                  textAlign: 'left',
                  backgroundColor: 'var(--color-bg-elev)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink-muted)',
                  borderBottom: '1px solid var(--color-line)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri}>
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: '14px 18px',
                    fontSize: '14px',
                    color: 'var(--color-ink-soft)',
                    borderBottom: ri === data.rows.length - 1 ? 'none' : '1px solid var(--color-line)',
                    verticalAlign: 'top',
                  }}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        table td strong { color: var(--color-ink); font-weight: 600; }
        table td code {
          background: var(--color-bg-elev);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-accent);
          font-family: var(--font-mono);
          font-size: 0.85em;
          border: 1px solid var(--color-line);
        }
        table td mark {
          background: rgba(251, 191, 36, 0.2);
          color: var(--color-ink);
          padding: 1px 4px;
          border-radius: 3px;
        }
        table tr:hover td { background: var(--color-bg-elev); }
      `}</style>
    </div>
  );
}
