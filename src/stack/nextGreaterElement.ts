/**
 * @link https://leetcode.cn/problems/next-greater-element-i
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, number> = {};
  const stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const current = nums2[i];
    while (stack.length && stack[stack.length - 1] < current) {
      stack.pop();
    }
    map[current] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(current);
  }

  return nums1.map(value => map[value]);
}

export default nextGreaterElement;
