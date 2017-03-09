const repl = require('repl');
const Stack = require("./stack.js");
const Queue = require("./queue.js");
const LinkedList = require("./linked-list.js");
const DLinkedList = require("./d-linked-list.js");

//creating a context and adding all data structures to this context
let context = repl.start('> ').context;
context.Stack = Stack;
context.Queue = Queue;
context.LinkedList = LinkedList;
context.DLinkedList = DLinkedList;
