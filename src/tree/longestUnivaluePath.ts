import { BinaryTreeNode } from '@/collections';

/**
 * @link https://leetcode.cn/problems/longest-univalue-path
 */
function longestUnivaluePath(root: BinaryTreeNode | null): number {
  let result = 0;

  const walker = (node: BinaryTreeNode | null): number => {
    if (!node) {
      return 0;
    }

    // 无条件执行子任务
    const left = walker(node.left);
    const right = walker(node.right);

    // 有条件更换结果
    const currentLeft = node.left && node.left.val === node.val ? left + 1 : 0;
    const currentRight =
      node.right && node.right.val === node.val ? right + 1 : 0;

    result = Math.max(result, currentLeft + currentRight);

    // 返回当前节点下，经过左或右路径（只能其一）的最长路径
    return Math.max(currentLeft, currentRight);
  };

  walker(root);

  return result;
}

export default longestUnivaluePath;
