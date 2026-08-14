/**
 * Shared helpers for the writing archive.
 *
 * Posts live in src/pages/blog/*.md as page-based Markdown, so every
 * consumer globs them through loadPosts() and gets the same shape back.
 */

const WORDS_PER_MINUTE = 220;

/** Strip Markdown down to readable prose for word counts and excerpts. */
export function toPlainText(markdown = '') {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')          // fenced code
    .replace(/`[^`]*`/g, ' ')                  // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')     // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')   // links -> label
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')        // headings
    .replace(/^\s{0,3}>\s?/gm, '')             // blockquotes
    .replace(/^\s{0,3}[-*+]\s+/gm, '')         // bullets
    .replace(/[*_~]/g, '')                     // emphasis marks
    .replace(/<[^>]+>/g, ' ')                  // raw html
    .replace(/\s+/g, ' ')
    .trim();
}

export function wordCount(markdown = '') {
  const text = toPlainText(markdown);
  return text ? text.split(' ').length : 0;
}

export function readingTime(markdown = '') {
  return Math.max(1, Math.round(wordCount(markdown) / WORDS_PER_MINUTE));
}

/** First full sentences up to roughly `limit` characters. */
export function excerpt(markdown = '', limit = 190) {
  const text = toPlainText(markdown);
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  const cut = Math.max(clipped.lastIndexOf('. '), clipped.lastIndexOf(' '));
  return `${clipped.slice(0, cut > 60 ? cut : limit).trim()}…`;
}

export function formatDate(value, opts = { day: 'numeric', month: 'short' }) {
  return new Date(value).toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
}

export function formatFullDate(value) {
  return formatDate(value, { day: 'numeric', month: 'long', year: 'numeric' });
}

export function yearOf(value) {
  return new Date(value).getUTCFullYear();
}

/** Tags can contain spaces ("war stories"), so always encode them. */
export function tagHref(tag) {
  return `/tags/${encodeURIComponent(tag)}/`;
}

/**
 * Normalise an import.meta.glob result into sorted post records.
 * Pass the glob output directly: loadPosts(import.meta.glob('./blog/*.md', { eager: true }))
 */
export function loadPosts(globResult) {
  return Object.values(globResult)
    .map((mod) => {
      const fm = mod.frontmatter ?? {};
      const raw = typeof mod.rawContent === 'function' ? mod.rawContent() : '';
      return {
        url: mod.url,
        title: fm.title ?? 'Untitled',
        description: fm.description ?? '',
        pubDate: fm.pubDate,
        author: fm.author ?? 'Matt Cotter',
        tags: fm.tags ?? [],
        isDraft: fm.isDraft ?? false,
        readingTime: readingTime(raw),
        wordCount: wordCount(raw),
        excerpt: excerpt(raw),
      };
    })
    .filter((post) => !post.isDraft && post.url)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

/** Group sorted posts into [{ year, posts }], newest year first. */
export function groupByYear(posts) {
  const groups = new Map();
  for (const post of posts) {
    const year = yearOf(post.pubDate);
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(post);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, posts: items }));
}

/** Every tag with a usage count, most used first. */
export function tagCounts(posts) {
  const counts = new Map();
  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
