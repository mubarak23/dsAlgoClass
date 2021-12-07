// define class

// var newFirst = new Node("Demo");
// first.next = new Node ('Account');
// first.next.next = new Node('workflow');
// first.next.next.next = new Node("Head connect to Tail and continues")

// pushing item to a LINKEDLIST Pseudocode
// 1. the function should accept a value
// 2. create a new node using the value pass to the function
// 3. if there is no head property in the list, set the head and tail to be
//    the newly created node
// 4. otherwise set the next property on the tail to be the new node and set the tail
//    property on the list to be the newly created node
// 5. Increment the length by one
// 6. return the link list

// Popping from a linked List
// removing item from the end of the Linked List
// Popping Pseducode
// 1. if no nodes in the list return undefined
// 2. loop through the entire list until you reach the tail
// 3. set the next property of the 2nd to the last node to be null
// 4. set the tail to be 2nd to the last node
// 5. Decrement the length of the list by 1
// 6. Return the value of the node removed

// SHIFT Method on LinkList
// Remove a new node from the beginning of a linked list
// Pseudocode
// 1. if there is no node, return undefined
// 2. store the current head property in a variable
// 3. set the head property to be the current head next property
// 4. Decrement the length by 1
// 5. Return the value of the node remove

// UNSHIFT on LinkedList
// Adding a new Node to the beginning of the linkedlist
// Pseudocode
// 1. Define a function that accept a value we are going to add to the linked list
// 2. create a new node using the value passed to the function
// 3. if there is no head property on the list , set the head and tail to be
//  the newly created node
// 4. Otherwise set the newly created node's next property to be the current head property
//    on the list
// 5. Set the head property on the list to be that newly created node

// GET Method in Linked List
// Retrieving a node by it's position in a linked List
// Pseudocode
// 1. function should accept an index
// 2. if the index is less than zero or greater than or equal to the length of the list
//    return null
// 3. Loop through the list until we reach the index and return the node at that
//   specific index
//

// SET Method
// change the VALUE of a node base on it's postion in a linked List
// it accept a index of a node and the value we want to change
// Pseudocode
// 1. Define a function that acept a value and an index
// 2. Use the GET Method to find the specific node
// 3. if the node is not found return undfined
// 4. if the node is found, set the value of that node to be the value passed to
//  the function and return TRUE

// INSET Methods
// Adding a node to the linked list at a specific position
//  Pseudocode
// 1. Define a function that accept two values, index and the value
// 2. if the index is less than zero or greater than the length, return false
// 3.if the index is same as the length of the linked list, push the node at the
//  end of the list (use shift)
// 4. if the index is zero, unshift the node to the start of the linked list
//  4.0 creare new Node
// 5. otherwirse, use the GET method , access the node at index-1(the item before the index)
// 6. Set the next property on that node to be the new node
// 7. Set the next property on the new Node to the previous next
//  8. Increment the length and return

// REMOVE METHOD
// take an index and remove the node from the linked List at that specific position
// Pseudocode
// Define a function that accept an index
// 1. if the index is less than zero or greater than the length of the linked list,
//  return undefined
// 2. if the index is the same as the length of index - 1, pop
// 3. if the index is 0, shift
// 4. otherwise use our GET Method, access the node at the index - 1
// 5. Set the next property on that node to be next of the next node
// 6. dcrement the length
// 7. return the value of the node remove

// Reverse
// reverse the linked list in place
// we dont make a copy or duplicate
// Pseudocode
// 1. Swap the HEAD and TAIL
// 2. Create variable and called it NEXT
// 3. Another variable called Prev
// 4. create varaible called NODE and initialize it to the HEAD property
// 5. Loop through the list
// 6. Set the next to be the next property on whatever node is
// 7. set the next propery on the node to be whatever the Prev is
// 8. set the prev to be the value of the node variable
// 9. set the node variable to be the value of the next variable

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var prevNode = this.get(index - 1);
    var remove = prevNode.next;
    prevNode.next = remove.next;
    this.length--;
    return remove;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// set(index, value){
//   const targetNode = this.get(index);
//   if(targetNode){
//     targetNode.val = value
//     return true
//   }
//   return false
// }
var list = new SinglyLinkedList();
// list.push("Demo Account");
// list.push("Welcome Home");
// list.push("Remove this at the end");
// list.push("Connecting the dots");
//console.log(list);
//list.traverse();
// console.log(list.pop());
// console.log(list);
// console.log(list.shift());
// list.unshift("Testing Testing");
//console.log(list.get(0));
// console.log(list.set(1, "This is Home"));
// console.log(list);
// console.log(list.insert(0, "From Insert Demo"));
// console.log(list);
// console.log(list.remove(2));
list.push(35);
list.push(56);
list.push(90);
list.push(10);
list.print();
//console.log(list.reverse());
list.print(list.reverse());

// git remote set-url origin https://cinderbuild@github.com/cinderbuild/cinderbuildwebsite.git
// git remote add origin https://github.com/cinderbuild/cinderbuildwebsite.git
// https://app-name.ondigitalocean.app
