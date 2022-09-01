import nextGreaterElement from '../nextGreaterElement';

describe('nextGreaterElement', () => {
  test('test nextGreaterElement', () => {
    const result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
    expect(result).toEqual([-1, 3, -1]);
  });
});
