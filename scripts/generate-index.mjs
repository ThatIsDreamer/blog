import { readdir, readFile, writeFile } from 'fs/promises';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsDir = join(__dirname, '..', 'posts');
const outputPath = join(__dirname, '..', 'index.json');

const files = await readdir(postsDir);

const posts = (
  await Promise.all(
    files
      .filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
      .map(async f => {
        const content = await readFile(join(postsDir, f), 'utf8');
        const { data } = matter(content);
        return {
          slug: basename(f, '.md'),
          title: data.title ?? '',
          date: data.date ?? null,
          description: data.description ?? '',
          tags: data.tags ?? [],
        };
      })
  )
).sort((a, b) => {
  if (!a.date) return 1;
  if (!b.date) return -1;
  return new Date(b.date) - new Date(a.date);
});

await writeFile(outputPath, JSON.stringify(posts, null, 2));
console.log(`wrote ${posts.length} post(s) to index.json`);
