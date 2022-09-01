import { swap } from '@/utils';

class Heap<T> {
  private comparator: (i1: T, i2: T) => number;
  private items: T[];

  constructor(comparator: (i1: T, i2: T) => number, initValue: T[] = []) {
    this.comparator = comparator;
    this.items = this.buildHeap(initValue);
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public push(value: T) {
    this.items.unshift(value);
    this.heapify(this.items, 0, this.items.length);
  }

  public pop() {
    const item = this.items.shift();
    this.heapify(this.items, 0, this.items.length);

    return item;
  }

  private buildHeap(items: T[]) {
    const cloned = items.slice();
    for (let i = Math.floor(cloned.length / 2); i >= 0; i--) {
      this.heapify(cloned, i, cloned.length);
    }

    return cloned;
  }

  private heapify(items: T[], index: number, length: number) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index; // 先假设自己是最"小"的

    if (left < length && this.comparator(items[left], items[smallest]) < 0) {
      smallest = left;
    }

    if (right < length && this.comparator(items[right], items[smallest]) < 0) {
      smallest = right;
    }

    if (smallest !== index) {
      swap(items, smallest, index);
      this.heapify(items, smallest, length);
    }
  }
}

export default Heap;
