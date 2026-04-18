import { useMemo } from 'react';

interface CodeBlockProps {
  code: string;
  label?: string;
}

// Swift syntax highlighting — returns HTML string
function highlightSwift(code: string): string {
  // We process line by line, respecting comments
  return code
    .split('\n')
    .map((line) => {
      // Full-line comment
      const commentIdx = line.indexOf('//');
      if (commentIdx === 0) {
        return `<span class="hl-comment">${esc(line)}</span>`;
      }

      let before = line;
      let commentPart = '';
      if (commentIdx > 0) {
        // Check it's not inside a string
        const beforeComment = line.slice(0, commentIdx);
        const quoteCount = (beforeComment.match(/"/g) || []).length;
        if (quoteCount % 2 === 0) {
          before = line.slice(0, commentIdx);
          commentPart = `<span class="hl-comment">${esc(line.slice(commentIdx))}</span>`;
        }
      }

      return highlightLine(before) + commentPart;
    })
    .join('\n');
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightLine(line: string): string {
  // Tokenize with regex
  const tokens: string[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    let matched = false;

    // String literal (handles \(...) interpolation roughly)
    const strMatch = remaining.match(/^"([^"\\]|\\.)*"/);
    if (strMatch) {
      tokens.push(`<span class="hl-string">${esc(strMatch[0])}</span>`);
      remaining = remaining.slice(strMatch[0].length);
      matched = true;
      continue;
    }

    // Number literal
    const numMatch = remaining.match(/^(\d+\.?\d*)/);
    if (numMatch && (tokens.length === 0 || /[\s(=+\-*/%,<>:[\]{]$/.test(getLastRaw(tokens)))) {
      tokens.push(`<span class="hl-number">${esc(numMatch[0])}</span>`);
      remaining = remaining.slice(numMatch[0].length);
      matched = true;
      continue;
    }

    // Word token (identifier / keyword / type)
    const wordMatch = remaining.match(/^[a-zA-Z_\u00C0-\u024F\u1100-\uFFFF][a-zA-Z0-9_\u00C0-\u024F\u1100-\uFFFF]*/);
    if (wordMatch) {
      const w = wordMatch[0];
      const cls = getWordClass(w);
      if (cls) {
        tokens.push(`<span class="${cls}">${esc(w)}</span>`);
      } else {
        tokens.push(esc(w));
      }
      remaining = remaining.slice(w.length);
      matched = true;
      continue;
    }

    // Operator / punctuation — just pass through
    if (!matched) {
      tokens.push(esc(remaining[0]));
      remaining = remaining.slice(1);
    }
  }

  return tokens.join('');
}

function getLastRaw(tokens: string[]): string {
  if (tokens.length === 0) return ' ';
  // strip html tags to get raw char
  const last = tokens[tokens.length - 1].replace(/<[^>]*>/g, '');
  return last || ' ';
}

const KEYWORDS = new Set([
  'let', 'var', 'func', 'return', 'if', 'else', 'for', 'in', 'while',
  'repeat', 'switch', 'case', 'default', 'break', 'continue', 'import',
  'class', 'struct', 'enum', 'protocol', 'extension', 'guard', 'defer',
  'do', 'catch', 'throw', 'throws', 'try', 'as', 'is', 'where',
  'true', 'false', 'nil', 'self', 'super', 'init', 'deinit',
  'static', 'override', 'private', 'public', 'internal', 'open',
  'mutating', 'nonmutating', 'lazy', 'weak', 'unowned',
  'typealias', 'associatedtype', 'inout',
]);

const DECORATORS = new Set([
  '@IBOutlet', '@IBAction', '@objc', '@discardableResult',
]);

const TYPES = new Set([
  'Int', 'Int8', 'Int16', 'Int32', 'Int64',
  'UInt', 'UInt8', 'UInt16', 'UInt32', 'UInt64',
  'Float', 'Double', 'Bool', 'String', 'Character',
  'Array', 'Dictionary', 'Set', 'Optional',
  'Void', 'Any', 'AnyObject',
  'UIImage', 'UILabel', 'UIButton', 'UITextField', 'UISwitch',
  'UIDatePicker', 'UIPickerView', 'UIAlertController', 'UIAlertAction',
  'UIImageView',
]);

const BUILTINS = new Set([
  'print', 'append', 'count', 'isEmpty', 'map', 'filter', 'reduce',
  'present', 'addAction',
]);

function getWordClass(word: string): string | null {
  if (KEYWORDS.has(word)) return 'hl-keyword';
  if (DECORATORS.has(word)) return 'hl-keyword';
  if (TYPES.has(word)) return 'hl-type';
  if (BUILTINS.has(word)) return 'hl-func';
  // PascalCase heuristic for types
  if (/^[A-Z][a-zA-Z0-9]+$/.test(word) && !BUILTINS.has(word)) return 'hl-type';
  return null;
}

export default function CodeBlock({ code, label }: CodeBlockProps) {
  const highlighted = useMemo(() => highlightSwift(code), [code]);

  return (
    <div
      style={{
        margin: '12px 0',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: '#0c0c14',
      }}
    >
      {/* macOS terminal title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          backgroundColor: '#161620',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28c840' }} />
        <span
          className="font-mono"
          style={{
            marginLeft: 'auto',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
          }}
        >
          {label || 'Swift'}
        </span>
      </div>

      {/* Code area */}
      <pre
        className="font-mono"
        style={{
          margin: 0,
          padding: '16px 20px',
          overflowX: 'auto',
          fontSize: '13px',
          lineHeight: 1.75,
          color: '#d4d4d8',
          backgroundColor: 'transparent',
        }}
      >
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>

      <style>{`
        .hl-keyword { color: #c084fc; font-weight: 500; }
        .hl-string  { color: #86efac; }
        .hl-number  { color: #fcd34d; }
        .hl-comment { color: #4a4a58; font-style: italic; }
        .hl-type    { color: #67e8f9; }
        .hl-func    { color: #fbbf24; }
      `}</style>
    </div>
  );
}
