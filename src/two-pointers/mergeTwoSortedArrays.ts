/**
 * 把两个有序数组，合并成一个有序数组
 */
function mergeTwoSortedArrays(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = []
  let p1 = 0,
    p2 = 0
  while (p1 < nums1.length && p2 < nums2.length) {
    if (p2 >= nums2.length || (p1 < nums1.length && nums1[p1] <= nums2[p2])) {
      ret.push(nums1[p1])
      p1++
    } else {
      ret.push(nums2[p2])
      p2--
    }
  }
  return ret
}

export default mergeTwoSortedArrays
