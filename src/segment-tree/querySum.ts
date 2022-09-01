import { SegmentTreeNode } from '@/collections';

class QuerySum {
  private node: SegmentTreeNode | null;

  constructor(nums: number[]) {
    this.node = this.buildSegmentTree(nums, 0, nums.length - 1);
  }

  public querySum(start: number, end: number) {
    return this.querySumHelper(this.node, start, end);
  }

  private querySumHelper(
    curNode: SegmentTreeNode | null,
    start: number,
    end: number
  ): number {
    if (!curNode) {
      return 0;
    }

    const leftBound = curNode.start;
    const rightBound = curNode.end;

    if (start === leftBound && end === rightBound) {
      return curNode.sum;
    }

    const midBound = Math.floor((leftBound + rightBound) / 2);

    if (end <= midBound) {
      return this.querySumHelper(curNode.leftChild, start, end);
    } else if (start > midBound) {
      return this.querySumHelper(curNode.rightChild, start, end);
    } else {
      return (
        this.querySumHelper(curNode.leftChild, start, midBound) +
        this.querySumHelper(curNode.rightChild, midBound + 1, end)
      );
    }
  }

  private buildSegmentTree(nums: number[], start: number, end: number) {
    if (start > end) {
      return null;
    } else if (start === end) {
      const node = new SegmentTreeNode(start, end);
      node.sum = nums[start];
      return node;
    }

    const node = new SegmentTreeNode(start, end);
    const mid = Math.floor((start + end) / 2);
    const leftChild = this.buildSegmentTree(nums, start, mid);
    const rightChild = this.buildSegmentTree(nums, mid + 1, end);
    const leftSum = leftChild ? leftChild.sum : 0;
    const rightSum = rightChild ? rightChild.sum : 0;
    node.leftChild = leftChild;
    node.rightChild = rightChild;
    node.sum = leftSum + rightSum;

    return node;
  }
}

export default QuerySum;
