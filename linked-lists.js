// 12 ---> 8 ---> 19

// let linkedList = {
//     head: {
//         value: 12,
//         next: {
//             value: 8,
//             next: {
//                 value: 19,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

class linkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const lead = this.traverseList(index - 1);
        const hold = lead.next;
        lead.next = newNode;
        newNode.next = hold;
        this.length++;        
    }

    traverseList(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    printList() {
        const list = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list);
    }

    printNode() {
        //code here
    }

}

const myList = new linkedList(12);
myList.append(8);
myList.append(19);
myList.prepend(14);
myList.printList();
myList.insert(2, 54);
myList.printList();
