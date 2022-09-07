class BinaryTreeNode<T = any> {
  public val: T;
  public left: BinaryTreeNode<T> | null;
  public right: BinaryTreeNode<T> | null;

  constructor(
    value: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null = null
  ) {
    this.val = value;
    this.left = left;
    this.right = right;
  }

  public get maxDepth() {
    const walker = (node: BinaryTreeNode<T> | null): number => {
      if (!node) {
        return 0;
      }

      const left = walker(node.left);
      const right = walker(node.right);

      return Math.max(left, right) + 1;
    };

    return walker(this);
  }
}

export default BinaryTreeNode;
