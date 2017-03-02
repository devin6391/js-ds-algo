const _count = Symbol("count");
const _head = Symbol("head");
const _tail = Symbol("tail");

class Queue {
  constructor() {
    this[_count] = 0;
    this[_head] = null;
    this[_tail] = null;
  }

  enqueue(val) {
    var node = {
      data: val,
      next: this[_head]
    }

    if(this[_head] == null) {
      this[_tail] = node;
    }

    this[_head] = node;
    this[_count]++;
  }

  dequeue() {
    if(this[_count] == 0) {
      return;
    }
    var firstNode = this[_head];
    var secondNode = null;

    while(firstNode.next) {
      secondNode = firstNode;
      firstNode = firstNode.next;
    }

    if(this[_count] == 1) {
      this[_head] = null;
      this[_tail] = null;
    } else {
      this[_tail] = secondNode;
    }

    this[_count]--;
    return firstNode.data;
  }

  displayAll() {
    var top = this[_head];
    var size = this[_count];
    var curNode = top;
    if(top === null) {
      return null;
    }
    var arr = [];

    for(var i = 0; i < size; i++) {
      arr[i] = curNode.data;
      curNode = curNode.next;
    }
    return arr;
  }

  getSize() {
    return this[_count];
  }

  peekAt(index) {
    var top = this[_head];
    var size = this[_count];
    var curNode = top;
    if(top === null || index < 0 || index >= size) {
      return;
    }
    var realIndx = size - 1 - index;
    for(var i = 0; i < realIndx; i++) {
      curNode = curNode.next;
    }
    return curNode.data;
  }
}

module.exports = Queue;
