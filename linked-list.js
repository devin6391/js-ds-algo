const _head = Symbol("head");
const _count = Symbol("count");

class LinkedList {
  constructor() {
    this[_count] = 0;
    this[_head] = null;
  }

  getCount() {
    return this[_count];
  }

  addFirst(val) {
    var node = {
      data: val,
      next: null
    }
    var headNode = this[_head];
    if(headNode) {
      node.next = headNode;
    }
    this[_head] = node;
    this[_count]++;
  }

  add(val, index) {
    var node = {
      data: val,
      next: null
    }
    if(index == 0) {
      this.addFirst(val);
      return;
    }
    if(index > 0 && index < this[_count]) {
      var current = this[_head];
      var previous = null;
      for(var i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this[_count]++;
    }
  }

  removeFirst() {
    var current = this[_head];
    if(this[_head]){
      this[_head] = this[_head].next;
      this[_count]--;
      return current.data;
    } else {
      return null;
    }
  }

  removeAt(index) {
    var current = this[_head];
    var size = this[_count];
    var previous = null;
    if(index == 0) {
      return this.removeFirst();
    } else if(index > 0 && index < size) {
      for(var i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this[_count]--;
      return current.data;
    } else {
      return null;
    }
  }

  displayAll() {
    var current = this[_head];
    var size = this[_count];
    var arr = [];
    for(var i = 0; i < size; i++) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  displayAt(index) {
    var current = this[_head];
    var size = this[_count];
    if(index > 0 && index < size) {
      for(var i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  }
}

module.exports = LinkedList;
