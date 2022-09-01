import { SingleLinkedList } from '@/collections';

/**
 * 判断链表是否有环
 */
function hasCycle<T>(list: SingleLinkedList<T>): boolean {
  if (!list.head) {
    return false;
  }
  let slow = list.head,
    fast = list.head;
  while (slow.next && fast.next && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

export default hasCycle;
