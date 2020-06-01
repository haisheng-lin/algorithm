/**
 * 给定两个数组，以及一个 target
 * 在两个数组中各自找出一个元素，组成一对，使得两个元素的和最接近于 target
 */
function findPair(nums1: number[], nums2: number[], target: number): number[] {
  let ret: number[] = [];
  let closestDiff;

  // 1. 排序
  const sorted1 = nums1.sort((x, y) => x - y);
  const sorted2 = nums2.sort((x, y) => x - y);

  // 2. 双指针
  let p1 = 0,
    p2 = nums2.length - 1;
  while (p1 < sorted1.length && p2 >= 0) {
    const sum = sorted1[p1] + sorted2[p2];
    const diff = Math.abs(sum - target);
    if (closestDiff === undefined || closestDiff > diff) {
      closestDiff = diff;
      ret = [nums1[p1], nums2[p2]];
    }
    if (sum < target) {
      p1++;
    } else if (sum > target) {
      p2--;
    } else {
      return ret;
    }
  }

  return ret;
}

export default findPair;
