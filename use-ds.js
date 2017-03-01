let repl = require('repl');
var Stack = require("./stack.js");
var Queue = require("./queue.js");
var LinkedList = require("./linked-list.js")

let context = repl.start('> ').context;
context.Stack = Stack;
context.Queue = Queue;
context.LinkedList = LinkedList;
