class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        if (!this.bottom) {
            this.top = new Node(value);
            this.bottom = new Node(value);
        }
        const tempNode = this.top;
        this.top = new Node(value);
        this.top.next = tempNode;
        this.length++;
    }
    pop(){
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const tempNode = this.top;
        this.top = this.top.next;
        this.length--;
    }
    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        return false;
    }
  }
  
const myStack = new Stack();

console.log(myStack.isEmpty());
myStack.push('Google');
myStack.push('Twitch');
myStack.push('Youtube');
console.log(myStack.isEmpty());
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.peek())
