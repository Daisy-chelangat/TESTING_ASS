const validateBug = require('../utils/validateBug');

describe('Bug validation', () => {
  test('valid bug returns true', () => {
    expect(validateBug({ title: 'Crash on login' })).toBe(true);
  });

  test('missing title returns false', () => {
    expect(validateBug({})).toBe(false);
  });

  test('non-string title returns false', () => {
    expect(validateBug({ title: 123 })).toBe(false);
  });
});
