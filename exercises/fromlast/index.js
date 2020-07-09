function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    next--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}