// Renders text that may contain HTML tags, badge markers, and newlines

const badgeStyles: Record<string, string> = {
  hot: 'bg-accent text-bg font-bold',
  mid: 'bg-warn text-bg font-bold',
  low: 'bg-ink-muted text-white font-bold',
  new: 'bg-ok text-bg font-bold',
};

function processBadges(text: string): string {
  return text.replace(
    /<badge:(\w+)>(.*?)<\/badge>/g,
    (_, type: string, label: string) => {
      const cls = badgeStyles[type] || badgeStyles.low;
      return `<span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-[0.1em] ml-1 align-middle ${cls}">${label}</span>`;
    }
  );
}

export default function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  const processed = lines.map(processBadges).join('<br/>');

  return (
    <span
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
}
