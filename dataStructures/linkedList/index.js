class LinkedList {
  constructor() {
    this.head = null; //first el of list
    this.tail = null; //last el of list
  }

  //add something at end
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  //returns linked list as an array
  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }

  //add something to the beginning
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //delete something
  delete(value) {
    if (!this.head) {
      return;
    }

    //if head needs to be deleted, assign new head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentnode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    //if tail needs to be deleted, assign new tail
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  //find first occurance of some value
  find(value) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //Inserts after a certain value
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList1 = new LinkedList();
