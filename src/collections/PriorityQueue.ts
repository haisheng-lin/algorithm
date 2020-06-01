class PriorityQueue<T> {
  private comparator: (i1: T, i2: T) => number;
  private items: T[];

  constructor(comparator: (i1: T, i2: T) => number, initValue = []) {
    this.comparator = comparator;
    this.items = initValue.sort(comparator);
  }

  public push(value: T) {
    return this.binaryInsert(value);
  }

  public pop() {
    return this.items.shift();
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  private binaryInsert(value: T) {
    let start = 0;
    let end = this.items.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      const compare = this.comparator(value, this.items[mid]);
      if (compare < 0) {
        end = mid;
      } else if (compare > 0) {
        start = mid + 1;
      } else {
        start = mid;
        end = mid;
      }
    }

    const compare = this.comparator(value, this.items[end]);
    const index = compare > 0 ? end + 1 : end;
    this.items.splice(index, 0, value);
  }
}

export default PriorityQueue;
