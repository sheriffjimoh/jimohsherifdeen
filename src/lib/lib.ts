export function renderMarkdown(md: string): string {
  // Lightweight markdown-to-HTML: headings, code blocks, blockquotes,
  // unordered lists, inline code, tables, and paragraphs.
  const lines = md.split('\n');
  let html = '';
  let inCode = false;
  let inList = false;
  let codeBuffer: string[] = [];

  const closeList = () => {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) {
        html += `<pre><code>${codeBuffer.join('\n').replace(/</g, '&lt;')}</code></pre>`;
        codeBuffer = [];
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuffer.push(line);
      continue;
    }
    if (line.startsWith('### ')) {
      closeList();
      html += `<h3>${line.slice(4)}</h3>`;
    } else if (line.startsWith('## ')) {
      closeList();
      html += `<h2>${line.slice(3)}</h2>`;
    } else if (line.startsWith('> ')) {
      closeList();
      html += `<blockquote>${line.slice(2)}</blockquote>`;
    } else if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${line.slice(2)}</li>`;
    } else if (line.trim() === '') {
      closeList();
    } else if (line.startsWith('|')) {
      closeList();
      // Table row — render as simple formatted line
      const cells = line.split('|').filter((c) => c.trim() && !c.includes('---'));
      if (cells.length > 0) {
        html += `<div style="display:flex;gap:1rem;padding:0.5em 0;border-bottom:1px solid rgba(0,0,0,0.06)">`;
        for (const cell of cells) {
          html += `<span style="flex:1">${cell.trim()}</span>`;
        }
        html += `</div>`;
      }
    } else {
      closeList();
      // Inline code
      const processed = line.replace(/`([^`]+)`/g, '<code>$1</code>');
      html += `<p>${processed}</p>`;
    }
  }
  closeList();
  return html;
}





