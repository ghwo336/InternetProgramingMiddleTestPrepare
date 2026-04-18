import type { Section as SectionType, ContentBlock } from '../data/content';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import Table from './Table';
import Compare from './Compare';
import QuizCardGroup from './QuizCard';
import ChecklistCard from './Checklist';
import RichText from './RichText';

const badgeColors: Record<string, { bg: string; color: string }> = {
  hot: { bg: 'var(--color-accent)', color: 'var(--color-bg)' },
  mid: { bg: 'var(--color-warn)', color: 'var(--color-bg)' },
  new: { bg: 'var(--color-ok)', color: 'var(--color-bg)' },
};

function Badge({ text, type = 'hot' }: { text: string; type?: string }) {
  const colors = badgeColors[type] || badgeColors.hot;
  return (
    <span
      className="font-mono"
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        backgroundColor: colors.bg,
        color: colors.color,
      }}
    >
      {text}
    </span>
  );
}

function renderBlock(block: ContentBlock, idx: number, allExpanded: boolean) {
  switch (block.type) {
    case 'text':
      return (
        <p
          key={idx}
          style={{
            marginBottom: '12px',
            color: 'var(--color-ink-soft)',
            fontSize: '14px',
          }}
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      );

    case 'heading3':
      return (
        <h3
          key={idx}
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: 'var(--color-ink)',
            marginTop: '2rem',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {block.content}
          {block.badge && <Badge text={block.badge} type={block.badgeType} />}
        </h3>
      );

    case 'heading4':
      return (
        <h4
          key={idx}
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--color-ink)',
            marginTop: '16px',
            marginBottom: '8px',
          }}
        >
          {block.content}
        </h4>
      );

    case 'table':
      return <Table key={idx} data={block.data} />;

    case 'code':
      return <CodeBlock key={idx} code={block.data.code} label={block.data.label} />;

    case 'callout':
      return <Callout key={idx} {...block.data} />;

    case 'compare':
      return <Compare key={idx} data={block.data} />;

    case 'quiz-group':
      return <QuizCardGroup key={idx} data={block.data} allExpanded={allExpanded} />;

    case 'checklist-group':
      return <ChecklistCard key={idx} data={block.data} />;

    default:
      return null;
  }
}

interface SectionProps {
  section: SectionType;
  allExpanded: boolean;
}

export default function Section({ section, allExpanded }: SectionProps) {
  return (
    <section id={section.id} style={{ marginBottom: '3.5rem', scrollMarginTop: '80px' }}>
      <div
        className="font-mono"
        style={{
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: 'var(--color-accent)',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        {section.number} · {section.label}
      </div>
      <h2
        style={{
          fontSize: 'clamp(24px, 3vw, 34px)',
          fontWeight: 600,
          color: 'var(--color-ink)',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {section.title}
        {section.badge && <Badge text={section.badge} type={section.badgeType} />}
      </h2>
      {section.desc && (
        <p style={{ color: 'var(--color-ink-soft)', marginBottom: '1.5rem', fontSize: '15px', whiteSpace: 'pre-line' }}>
          <RichText text={section.desc} />
        </p>
      )}
      {section.blocks.map((block, idx) => renderBlock(block, idx, allExpanded))}
    </section>
  );
}
