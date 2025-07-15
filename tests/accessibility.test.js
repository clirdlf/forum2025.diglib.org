const { axe, toHaveNoViolations } = require('jest-axe');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

expect.extend(toHaveNoViolations);

// Path to the built site directory
const siteDir = path.join(__dirname, '../_site');
const htmlFiles = glob.sync('**/*.html', { cwd: siteDir });

describe('Accessibility tests for all generated pages', () => {
  // Before running tests, ensure the site has been built
  beforeAll(() => {
    if (htmlFiles.length === 0) {
      throw new Error(
        'No HTML files found in the _site directory. Please run "pnpm run build" before running tests.'
      );
    }
  });

  // Dynamically create a test for each HTML file
  htmlFiles.forEach((file) => {
    it(`should have no accessibility violations on ${file}`, async () => {
      const filePath = path.join(siteDir, file);
      const html = fs.readFileSync(filePath, 'utf-8');

      // Run the axe check on the page's HTML
      const results = await axe(html, {
        // You can add rules to disable here if needed, for example:
        // rules: {
        //   'region': { enabled: false }
        // }
      });

      expect(results).toHaveNoViolations();
    });
  });
});
