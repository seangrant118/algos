class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!node) {
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // Nodes exist
      last.next = new Node(data);
    } else {
      // Chain is empty
      this.head = new Node(data);
    }
  }

  getAt(i) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === i) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(i) {
    if (!this.head) {
      return;
    }

    if (i === 0) {
      this.head = this.head.next;
    }

    const prev = this.getAt(i - 1);
    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(i - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }
}
