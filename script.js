class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  get tail() {
    let current = this.head;

    if (current === null) return null;

    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }
  at(index) {
    let count = 0;
    let currentNode = this.head;
    if (index < 0 || index >= this.size) return null;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  pop() {
    if (this.head === null) return;

    if (this.size === 1) {
      this.head = null;
    } else {
      let current = this.head;
      let count = 1;
      while (count < this.size - 1) {
        current = current.next;
        count++;
      }
      current.next = null;
    }
    this.size--;
  }
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  find(value) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }
  toString() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(`( ${current.value} )`);
      current = current.next;
    }

    return array.join(" -> ");
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;

        count++;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1) {
        current = current.next;
        count++;
      }
      current.next = current.next.next;
    }
    this.size--;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let ll = new LinkedList();
ll.append(123);
ll.append(456);
ll.append(123);
ll.prepend(556);
console.log(ll);
console.log(ll.head);
console.log(ll.tail);
console.log(ll.at(4));
// ll.pop();
// ll.pop();
// ll.pop();
console.log(ll);
console.log(ll.contains(1));
ll.removeAt(1)
console.log(ll.toString());
