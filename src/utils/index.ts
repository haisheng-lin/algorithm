/**
 * 数组交换元素
 */
export function swap<T>(items: T[], i: number, j: number) {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}
