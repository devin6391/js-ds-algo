const _top = Symbol("top");
const _size = Symbol("size");
class Stack {
  constructor() {
    this[_top] = null;
    this[_size] = 0;
  }

  push(val) {
    var node = {
      data: val,
      next: null
    };
    node.next = this[_top];
    this[_top] = node;
    this[_size]++;
  }

  pop() {
    var retData;
    if(this[_top] != null && this[_size] > 0) {
      retData = this[_top].data;
      this[_top] = this[_top].next;
      this[_size]--;
    } else {
      retData = null;
    }
    return retData;
  }

  getSize() {
    return this[_size];
  }

  peek() {
    var top = this[_top];
    if(top != null) {
      return top.data;
    } else {
      return null;
    }
  }

  displayAll() {
    var top = this[_top];
    var size = this[_size];
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

}
module.exports = Stack;
