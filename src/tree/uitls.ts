import { BinaryTreeNode } from '@/collections';

/**
 * @description 与 leetcode 一样，按数组从左至右的顺序，构建树的从上至下，从左至右的元素
 */
export function buildTreeFromArray<T>(items: Array<T | null>) {
  if (!items || items[0] === null) {
    return null;
  }

  const root = new BinaryTreeNode(items[0] as T);
  let currentNodes: BinaryTreeNode<T>[] = [root];
  let index = 1;

  while (currentNodes.length) {
    const nextNodes: BinaryTreeNode<T>[] = [];

    while (currentNodes.length) {
      const node = currentNodes.shift() as BinaryTreeNode<T>;

      if (index < items.length) {
        if (items[index] !== null) {
          const left = new BinaryTreeNode(items[index] as T);
          node.left = left;
          nextNodes.push(left);
        }
        index++;
      }

      if (index < items.length) {
        if (items[index] !== null) {
          const right = new BinaryTreeNode(items[index] as T);
          node.right = right;
          nextNodes.push(right);
        }
        index++;
      }
    }

    currentNodes = nextNodes;
  }

  return root;
}

export function printBinaryTree<T = any>(root: BinaryTreeNode<T> | null) {
  /**
   * 参考：https://leetcode.cn/problems/print-binary-tree
   *
   * 假设树的深度为 d，矩阵是 m*n，m 是行数，n 是列数，则：
   * m = 2d - 1
   * n = 2**(d+1) - 3
   * 根节点需要放置在顶行的正中间，对应位置为 [0][(n-1)/2]
   *
   * 对于每个节点，设位置为 [r][c]
   *
   * '/' 放置在 [r+1][c-2**(d-(r/2)-2)]，左节点放置在 [r+2][c-2**(d-(r/2)-1)]
   * '\' 放置在 [r+1][c+2**(d-(r/2)-2)]，右节点放置在 [r+2][c+2**(d-(r/2)-1)]
   */

  const d = root ? root.maxDepth : 0;
  const m = 2 * d - 1;
  const n = 2 ** (d + 1) - 3;

  const matrix: string[][] = Array.from({ length: m }, () =>
    Array(n).fill(' ')
  );

  const filler = (node: BinaryTreeNode<T> | null, r: number, c: number) => {
    if (r >= m || !node) {
      return;
    }

    matrix[r][c] = String(node.val);

    if (node.left) {
      matrix[r + 1][c - 2 ** (d - r / 2 - 2)] = '/';
      filler(node.left, r + 2, c - 2 ** (d - r / 2 - 1));
    }

    if (node.right) {
      matrix[r + 1][c + 2 ** (d - r / 2 - 2)] = '\\';
      filler(node.right, r + 2, c + 2 ** (d - r / 2 - 1));
    }
  };

  filler(root, 0, (n - 1) / 2);
  const str = matrix.map(row => row.join('')).join('\n');

  console.log(str);
}
