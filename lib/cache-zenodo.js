import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; // Remove this line if you're using Node 18+ (native fetch)

const COMMUNITY = 'dlf-forum';
// const COMMUNITY = 'clir';
const YEAR = process.argv[2] || '2025';
// const BASE_URL = `https://zenodo.org/api/records/?q=communities:${COMMUNITY}+AND+publication_date:[${YEAR}-01-01+TO+${YEAR}-12-31]&sort=publication_date]&size=100`;
const BASE_URL = `https://zenodo.org/api/records?q=communities:dlf-forum+AND+publication_date:%5B${YEAR}-01-01+TO+${YEAR}-12-31%5D&sort=publication_date&size=25`;

/**
 * Fetch all paginated Zenodo results by following links.next
 */
async function fetchAllPages(url) {
  let results = [];
  let nextUrl = url;

  while (nextUrl) {
    console.log(`🔎 Fetching page: ${nextUrl}`);
    const res = await fetch(nextUrl);

    if (!res.ok) throw new Error(`Zenodo API error: ${res.status} ${res.statusText}`);

    const json = await res.json();
    const items = json.hits.hits.map((item) => ({
      id: item.id,
      title: item.metadata.title,
      authors: item.metadata.creators?.map((c) => c.name).join(', ') || 'Unknown',
      abstract: item.metadata.description || '',
      year: new Date(item.metadata.publication_date).getFullYear(),
      doi: item.metadata.doi ? `https://doi.org/${item.metadata.doi}` : null,
      download_link: item.files?.[0]?.links?.self || null,
    }));

    results = results.concat(items);
    nextUrl = json.links?.next || null; // Follow pagination if available
  }

  return results;
}

/**
 * Main fetch + write logic
 */
async function fetchPresentations() {
  console.log(`📅 Fetching DLF Forum presentations for ${YEAR} from Zenodo...`);
  const presentations = await fetchAllPages(BASE_URL);

  const outputDir = path.join(process.cwd(), 'src', '_data');
  const outputPath = path.join(outputDir, 'presentations.json');
  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputPath, JSON.stringify(presentations, null, 2));
  console.log(`✅ Cached ${presentations.length} presentations for ${YEAR}`);
  console.log(`📁 Saved to: ${outputPath}`);
}

fetchPresentations().catch((err) => {
  console.error('❌ Error fetching Zenodo data:', err);
  process.exit(1);
});
