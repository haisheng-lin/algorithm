import { PriorityQueue } from 'collections';

const queue = new PriorityQueue<number>((i1, i2) => i1 - i2);

queue.push(123);
queue.push(0);
queue.push(3);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
