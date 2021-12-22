class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  incrementSize() {
    this.size = this.size + 1;
  }

  derementSize() {
    this.size = this.size - 1;
  }

  getSize() {
    return this.size;
  }

  firstInsert(value) {
    this.head = new Node(value);
    this.incrementSize();
    return true;
  }

  append(value) {
    if (this.size === 0) {
      return this.firstInsert(value);
    }

    let node = this.head;
    let newNode = new Node(value);

    if (!this.tail) {
      node.next = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.incrementSize();
  }

  prepend(value) {
    if (this.size === 0) {
      return this.firstInsert(value);
    }

    let newNode = new Node(value);

    newNode.next = this.head;

    if (!this.tail) {
      this.tail = this.head;
    }

    this.head = newNode;
    this.incrementSize();
  }

  insertBefore(before, value) {
    if (this.size === 0) {
      return;
    }

    let node = this.head;

    if (node.value === before) {
      return this.prepend(value);
    }

    while (node) {
      if (node.next && node.next.value === before) {
        let newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
        node = newNode.next;
        this.incrementSize();
      } else {
        node = node.next;
      }
    }
  }

  insertAfter(after, value) {
    if (this.size === 0) {
      return;
    }

    if (this.tail && this.tail.value === after) {
      return this.append(value);
    }

    let node = this.find(after);

    if (!node) {
      return;
    }

    let newNode = new Node(value);

    newNode.next = node.next;
    node.next = newNode;

    this.incrementSize();
  }

  remove(value) {
    if (this.size === 0) {
      return;
    }

    let node = this.head;

    if (node.value === value) {
      this.head = node.next;
      return;
    }

    while (node) {
      if (node.next && node.next.value === value) {
        node.next = node.next.next;
        if (!node.next) {
          this.tail = node;
        }

        this.derementSize();
      }

      node = node.next;
    }
  }

  find(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.next;
    }
  }

  toArray() {
    let result = [];
    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }
}

const list = new LinkedList();

list.insertBefore('Seroj', 'INSERT_BEFORE_SEROJ');
console.log(list.toArray());
list.append('name');
console.log(list.toArray());
list.append('is');
console.log(list.toArray());
list.insertAfter('My', 'INSERT_AFTER_MY');
console.log(list.toArray());
list.prepend('My');
console.log(list.toArray());
list.insertBefore('My', 'INSERT_BEFORE_MY');
console.log(list.toArray());
list.insertAfter('My', 'INSERT_AFTER_MY');
console.log(list.toArray());
list.append('Seroj');
console.log(list.toArray());
list.insertBefore('Seroj', 'INSERT_BEFORE_SEROJ');
console.log(list.toArray());
list.insertAfter('is', 'INSERT_AFTER_IS');
console.log(list.toArray());
list.remove('is');
console.log(list.toArray());
list.remove('Seroj');
console.log(list.toArray());