// PUSH
// adding a node to the end of the doubly Linked List
// Pseudocode
// 1. Create a new node with the value passed to the function
// 2. if the HEAD property is null(Length is ZERO), set the HEAD and TAIL to be the newly created Node
// 3. if not, we set the NEXT propery on the TAIL, to be that  node
// 4. set the previous property of the newly created node, to be the old the tail
// 5. Set the TAIL to be the newly created node
// 6. Increment the Length and return the list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLink {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    // if (!this.head)
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLink();
list.push(20);
console.log(list);
