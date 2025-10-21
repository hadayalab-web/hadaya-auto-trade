const { greet } = require('../src/index');

describe('greet()', () => {
  it('名前を渡すと挨拶文を返す', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
