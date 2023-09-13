// import { newArrayIntQueue } from '../src/arrayqueue'
import { newLinkedListIntQueue } from '../src/linkedlistqueue.js'

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
// const createQueue = newArrayIntQueue
const createQueue = newLinkedListIntQueue

// TODOs:
// write more test cases to test dequeue and clear functions.

test('test isEmpty: newly created list should be empty', () => {
  expect(createQueue().isEmpty()).toBeTruthy()
})

test('test isEmpty: list with 1 element is not empty', () => {
  const queue = createQueue()
  queue.enqueue(2)
  expect(queue.isEmpty()).toBeFalsy()
})

test('test isEmpty: newly cleared list should be empty', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.clear()
  expect(queue.isEmpty()).toBeTruthy()
})

test('test peek: newly created list should peek null', () => {
  expect(createQueue().peek()).toBeNull()
})

test('test peek: newly cleared list should peek null', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.clear()
  expect(queue.peek()).toBeNull()
})

test('test peek: queue with 2 element should peek the one that was first added', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.enqueue(3)
  expect(queue.peek()).toEqual(2)
}) // this DOES NOT WORK with linkedlistqueue because linkedlistqueue is Wrong

test('test dequeue: newly created list should dequeue null', () => {
  expect(createQueue().peek()).toBeNull()
})

test('test dequeue: newly cleared list should dequeue null', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.clear()
  expect(queue.dequeue()).toBeNull()
})

test('test dequeue: queue with 2 element should dequeue the one that was first added', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.enqueue(3)
  expect(queue.dequeue()).toEqual(2)
}) // this DOES NOT WORK with linkedlistqueue because linkedlistqueue is Wrong

const param = [5, 10, 1000000]
// parameterized test, apply to each value of the parameter
test.each(param)('test enqueue: enqueued number %d is correct', (nr) => {
  const queue = createQueue()
  queue.enqueue(nr)
  expect(queue.peek()).toBe(nr)
})

// can nest tests with shared descriptions for better readability
describe('test size: ', () => {
  test('1 entry', () => {
    const queue = createQueue()
    queue.enqueue(5)
    expect(queue.size()).toBe(1)
  })

  test('11 entries', () => {
    const queue = createQueue()
    for (let i = 0; i < 11; i++) queue.enqueue(i)
    expect(queue.size()).toBe(11)
  })
})

test('test size: newly created list should be size 0', () => {
  const queue = createQueue()
  expect(queue.size()).toBe(0)
})

test('test size: newly cleared list should be size 0', () => {
  const queue = createQueue()
  queue.enqueue(2)
  queue.enqueue(5)
  queue.clear()
  expect(queue.size()).toBe(0)
})
