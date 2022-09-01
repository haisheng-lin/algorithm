/**
 * @link https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop
 */
function finalPrices(prices: number[]) {
  const result = [...prices];
  const stack: number[] = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] -= stack[stack.length - 1];
    }
    stack.push(prices[i]);
  }

  return result;
}

export default finalPrices;
