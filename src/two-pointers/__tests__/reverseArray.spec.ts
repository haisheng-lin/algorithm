import reverseArray from '../reverseArray';

describe('reverseArray', () => {
  test('test reverseArray', () => {
    const array = [1, 2, 3, 4, 5];
    reverseArray(array);
    expect(array).toEqual([5, 4, 3, 2, 1]);
  });
});
