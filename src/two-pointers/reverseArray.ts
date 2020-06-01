/**
 * 把数组逆序排列
 */
function reverseArray(items: any[]): void {
  let start = 0;
  let end = items.length - 1;
  while (start < end) {
    const temp = items[start];
    items[start] = items[end];
    items[end] = temp;
  }
}

export default reverseArray;
