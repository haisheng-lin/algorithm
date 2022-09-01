import { swap } from '@/utils';

/**
 * 调整堆，使堆符合定义
 */
const heapify = (items: number[], index: number, length: number) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index; // 先假设自己是最大的

  if (left < length && items[left] > items[largest]) {
    largest = left;
  }

  if (right < length && items[right] > items[largest]) {
    largest = right;
  }

  if (largest !== index) {
    // 表明左或右子节点比自己大，则需要交换位置，再递归一次看看
    swap(items, largest, index);
    heapify(items, largest, length);
  }
};

/**
 * https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/7.heapSort.md
 * https://www.cnblogs.com/chengxiao/p/6129630.html
 */
const heapSort = (items: number[]) => {
  let length = items.length;

  // 建大顶堆，从第一个非叶子节点开始
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    heapify(items, i, length);
  }

  for (let i = items.length - 1; i >= 0; i--) {
    swap(items, 0, i);
    length--;
    heapify(items, 0, length);
  }
};

export default heapSort;
