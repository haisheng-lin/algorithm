/**
 * 把数组逆序排列
 *
 * @param {any[]} items
 * @returns void
 */
function reverseArray(items: any[]): void {
  let start = 0,
    end = items.length - 1
  while (start < end) {
    const temp = items[start]
    items[start] = items[end]
    items[end] = temp
  }
}

// test case
// 反转后，nums = [4, 3, 2, 1]

// const nums = [1, 2, 3, 4]
// reverseArray(nums)
// console.log(nums)

export default reverseArray
