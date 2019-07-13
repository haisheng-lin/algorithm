import { SingleLinkedList } from '../collections'

const ListNode = SingleLinkedList.ListNode

/**
 * 判断链表是否有环
 *
 * @param {SingleLinkedList} list
 * @returns boolean
 */
function hasCycle<T>(list: SingleLinkedList<T>): boolean {
  return false
}

// test case
// const list = new SingleLinkedList<number>()
// const node1 = new ListNode(1)
// const node2 = new ListNode(2)
// const node3 = new ListNode(3)
// const node4 = new ListNode(4)

// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node2
// list.head = node1

// console.log(hasCycle(list))

export default hasCycle
