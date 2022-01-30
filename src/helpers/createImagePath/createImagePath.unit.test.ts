import createImagePath, { IMAGERY_URL } from './createImagePath';

describe('createImagePath', () => {
  it('should return the default imagery', () => {
    const path = createImagePath('');

    expect(path.includes(IMAGERY_URL)).toBeTruthy();
  });

  it('should join the default imagery with the suffix', () => {
    const path = createImagePath('potato');

    expect(path).toBe(`${IMAGERY_URL}potato`);
  });
});
