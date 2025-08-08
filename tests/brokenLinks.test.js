jest.setTimeout(30000);
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const siteDir = path.join(__dirname, '../_site');
const htmlFiles = glob.sync('**/*.html', { cwd: siteDir });

describe('Broken link checks for all generated pages', () => {
  beforeAll(() => {
    if (htmlFiles.length === 0) {
      throw new Error(
        'No HTML files found in the _site directory. Please run "pnpm run build" before running tests.'
      );
    }
  });

  htmlFiles.forEach((file) => {
    it(`should have no broken links on ${file}`, () => {
      const filePath = path.join(siteDir, file);
      const html = fs.readFileSync(filePath, 'utf-8');
      const dom = new JSDOM(html);
      const anchors = [...dom.window.document.querySelectorAll('a')];

      const brokenLinks = [];

      for (const anchor of anchors) {
        const href = anchor.getAttribute('href');
        if (
          !href ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('javascript:') ||
          href.startsWith('data:') ||
          href.startsWith('http://') ||
          href.startsWith('https://') ||
          href.startsWith('//')
        ) {
          continue;
        }

        const baseHref = href.split('#')[0].split('?')[0];

        let resolvedPath;
        if (baseHref.startsWith('/')) {
          resolvedPath = path.join(siteDir, baseHref.slice(1));
        } else {
          resolvedPath = path.resolve(path.dirname(filePath), baseHref);
        }

        let exists = fs.existsSync(resolvedPath);
        if (!exists && path.extname(resolvedPath) === '') {
          exists = fs.existsSync(path.join(resolvedPath, 'index.html'));
        }
        if (!exists) {
          brokenLinks.push(href);
        }
      }

      expect(brokenLinks).toEqual([]);
    });
  });
});
