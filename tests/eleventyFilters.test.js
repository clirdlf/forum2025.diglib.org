const configureEleventy = require('../.eleventy.js');

// Set up a fake EleventyConfig to capture filters
async function getFilters() {
  const filters = {};
  const fakeConfig = {
    addBundle: () => {},
    addTransform: () => {},
    addPreprocessor: () => {},
    addPassthroughCopy: () => {},
    addWatchTarget: () => {},
    addPlugin: () => {},
    addCollection: () => {},
    addFilter: (name, fn) => { filters[name] = fn; },
    getFilter: (n) => (n === 'slugify' ? (s) => s : undefined),
  };
  await configureEleventy(fakeConfig);
  return filters;
}

describe('Eleventy filters', () => {
  let filters;
  beforeAll(async () => {
    filters = await getFilters();
  });

  test('usd filter formats numbers and handles invalid input', () => {
    expect(filters.usd(1234.5)).toBe('$1,234.50');
    expect(filters.usd('abc')).toBe('Invalid Input');
  });

  test('randomItem returns a single-element array or empty array', () => {
    const arr = [1, 2, 3];
    const result = filters.randomItem(arr);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeLessThanOrEqual(1);
    expect(filters.randomItem([])).toEqual([]);
  });

  test('head filter returns first n or last n elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(filters.head(arr, 2)).toEqual([1, 2]);
    expect(filters.head(arr, -2)).toEqual([4, 5]);
    expect(filters.head([], 3)).toEqual([]);
  });
});