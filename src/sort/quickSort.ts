/**
 * @description 快速排序
 *
 * 时间复杂度：
 * 1. 一般而言，时间复杂度是 O(nlogn)
 * 2. 若初始记录序列按关键字有序，或基本有序时
 * 每次划分都是将序列划分为某一半序列的长度为 0 的情况，此时复杂度是 O(n^2)
 * 总结：不稳定，最好是 O(nlogn)，最差是 O(n^2)
 *
 * 空间复杂度：O(1)
 * 如果考虑函数递归的堆栈，则可认为复杂度是 O(logn)
 * 考试时应该以 O(1) 为准
 */
function quickSort(data: number[]) {
  function partition(data: number[], low: number, high: number) {
    const pivot = data[low];
    let i = low;
    let j = high;
    while (i < j) {
      while (i < j && data[j] >= pivot) j--;
      data[i] = data[j];
      while (i < j && data[i] <= pivot) i++;
      data[j] = data[i];
    }
    data[i] = pivot;
    return i;
  }

  function helper(data: number[], low: number, high: number) {
    if (low < high) {
      const loc = partition(data, low, high);
      helper(data, low, loc - 1);
      helper(data, loc + 1, high);
    }
  }

  helper(data, 0, data.length - 1);
}

export default quickSort;
