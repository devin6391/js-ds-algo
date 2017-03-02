const _head = Symbol("head");
const _tail = Symbol("tail");
const _count = Symbol("count");

class DLinkedList {
  constructor() {
    this[_head] = null;
    this[_tail] = null;
    this[_count] = 0;
  }

  getCount() {
    return this[_count];
  }

  getHead() {
    if(this[_head]) {
        return this[_head];
    }
    return null;
  }

  getTail() {
    if(this[_tail]) {
      return this[_tail];
    }
    return null;
  }

  displayAll() {
    var current = this[_head];
    var size = this[_count];
    var arr = [];

    if(current) {
      for(var i = 0; i < size; i++) {
        arr.push(current.data);
        current = current.next;
      }
      return arr;
    }
    return null;
  }

  displayBackwards() {
    var current = this[_tail];
    var size = this[_count];
    var arr = [];
    if(current) {
      for(var i = 0; i < size; i++) {
        arr.push(current.data);
        current = current.prev;
      }
      return arr;
    }
    return null;
  }

  displayAt(index) {
    var current = this[_head];
    var size = this[_count];
    if(index > 0 && index < size) {
      for(var i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    } else if(index == 0 && size) {
      return current.data;
    } else {
      return null;
    }
  }

  addFirst(val) {
    var head = this[_head];
    var node = {
      data: val,
      next: head,
      prev: null
    }
    this[_head] = node;
    if(!this[_count]) {
      this[_tail] = node;
    } else {
      head.prev = this[_head];
    }
    this[_count]++;
  }

  addLast(val) {
    var tail = this[_tail];
    var node = {
      data: val,
      next: null,
      prev: tail
    }
    this[_tail] = node;
    if(!this[_count]) {
      this[_head] = this[_tail];
    } else {
      tail.next = this[_tail];
    }
    this[_count]++;
  }

  addAt(val, index) {
    var current = this[_head];
    var previous = null;
    var node = {
      data: val,
      next: null,
      prev: null
    }

    if(index > 0 && index < this[_count]) {
      for(var i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      node.prev = previous;
      current.prev = node;
      previous.next = node;
      this[_count]++;
    } else if(index == 0) {
      this.addFirst(val);
    } else {
      this.addLast(val);
    }
  }

  removeFirst() {
    var current = this[_head];
    var next = null;
    if(current && this[_count] > 1) {
      next = current.next;
      next.prev = null;
      current.next = null;
      this[_head] = next;
      this[_count]--;
      return current.data;
    } else if(current && this[_count] == 1) {
      this[_head] = null;
      this[_tail] = null;
      this[_count]--;
      return current.data;
    } else {
      return null;
    }
  }

  removeLast() {
    var current = this[_tail];
    var prev = null;
    if(current && this[_count] > 1) {
      prev = current.prev;
      prev.next = null;
      current.prev = null;
      this[_tail] = prev;
      this[_count]--;
      return current.data;
    } else if(current && this[_count] == 1) {
      this[_head] = null;
      this[_tail] = null;
      this[_count]--;
      return current.data;
    } else {
      return null;
    }
  }

  removeAt(index) {
    var current = this[_head];
    if(index == 0) {
      return this.removeFirst();
    } else if(this[_count] > 1 && index == this[_count] - 1) {
      return this.removeLast();
    } else if(current && index > 0 && index < this[_count]) {
      for(var i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      current.next = null;
      current.prev = null;
      this[_count]--;
      return current.data
    } else {
      return null;
    }
  }

}

module.exports = DLinkedList;
