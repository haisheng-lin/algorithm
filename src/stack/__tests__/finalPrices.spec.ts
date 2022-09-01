import finalPrices from '../finalPrices';

describe('finalPrices', () => {
  test('test finalPrices', () => {
    const prices = [8, 4, 6, 2, 3];
    const result = finalPrices(prices);
    expect(result).toEqual([4, 2, 4, 2, 3]);
  });
});
