const SinglyLinkedList = require('../singlyLinkedList');

const list = new SinglyLinkedList();

test('Pop from empty list', () => {
  expect(list.pop()).toBe(undefined);
});

test('Push to empty list', () => {
  list.push(100);
  expect(list.tail.val).toBe(100);
  expect(list.head.val).toBe(100);
  expect(list.length).toBe(1);
});

test('Push to end of list', () => {
  list.push(200);
  expect(list.head.val).toBe(100);
  expect(list.tail.val).toBe(200);
  expect(list.length).toBe(2);
});

test('Shift', () => {
  const result = list.shift();
  expect(list.tail.val).toBe(200);
  expect(list.head.val).toBe(200);
  expect(list.length).toBe(1);
  expect(result.val).toBe(100);
});

test('Get', () => {
  let val = list.get(-1);
  expect(val).toBeNull();
  val = list.get(20);
  expect(val).toBeNull();
  val = list.get(0);
  expect(val.val).toBe(200);
});

test('Set', () => {
  let val = list.set(10, -1);
  expect(val).toBeFalsy();
  val = list.get(10, 20);
  expect(val).toBeFalsy();
  val = list.set(10, 0);
  expect(val).toBeTruthy();
  expect(list.tail.val).toBe(10);
  expect(list.head.val).toBe(10);
  expect(list.length).toBe(1);
});
