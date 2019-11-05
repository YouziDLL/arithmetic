//栈 Stack
function Stack() {
    this.arr = [];
    this.push = function push(value) {
        this.arr.push(value);
    };
    this.pop = function pop() {
        return this.arr.pop();
    }
}
var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);

//队列 Queue

function Queue() {
    this.arr = [];
    this.push = function push(value) {
        this.arr.push(value);
    };
    this.pop=function () {
        return this.arr.shift();
    }
}