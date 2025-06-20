const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

describe('Basic accessibility tests', () => {
  it('main sample page snippet should have no a11y violations', async () => {
    const html = `
      <main role="main">
        <h1>Forum 2025</h1>
        <button aria-label="Scroll to top" id="btn-back-to-top">Top</button>
      </main>
    `;
    const results = await axe(html);
    expect(results).toHaveNoViolations();
  });
});