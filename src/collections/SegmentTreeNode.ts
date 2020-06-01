class SegmentTreeNode {
  public start: number;
  public end: number;
  public sum: number;
  public leftChild: SegmentTreeNode | null;
  public rightChild: SegmentTreeNode | null;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.sum = 0;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export default SegmentTreeNode;
