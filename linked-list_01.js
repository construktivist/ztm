class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(node) {
        this.head = node;
        this.tail = this.head;
        this.length = 1;
    }
}

const node = new Node(45);
const myList = new List(node);
console.log(node);
console.log(myList);