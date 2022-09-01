/**
 * 把数组逆序排列
 */
function reverseArray<T>(items: T[]) {
  let start = 0;
  let end = items.length - 1;
  while (start < end) {
    const temp = items[start];
    items[start] = items[end];
    items[end] = temp;
    start++;
    end--;
  }
}

export default reverseArray;
