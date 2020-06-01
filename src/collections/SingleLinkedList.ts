class SingleLinkedList<T> {
  public head: SingleLinkedList.ListNode<T> | null;

  constructor() {
    this.head = null;
  }
}

namespace SingleLinkedList {
  export class ListNode<T> {
    public val: T;
    public next: ListNode<T> | null;

    constructor(val: T) {
      this.val = val;
      this.next = null;
    }
  }
}

export default SingleLinkedList;
