# linked-list-Odin-Pro
linked list implementation in Odin Vision with immense approach

## How does a test actually work?
Before understanding each test, understand this function:
```
function assert(label, actual, expected) {
    const pass =
        JSON.stringify(actual) === JSON.stringify(expected);

    console.log(
        `${pass ? "PASS" : "FAIL"} - ${label}: ` +
        `got ${JSON.stringify(actual)}, ` +
        `expected ${JSON.stringify(expected)}`
    );
}
```

Let's trace it with one example:
```
assert("size empty", empty.size(), 0);
```

JavaScript evaluates the arguments before calling assert.
Execution trace
1. JavaScript evaluates empty.size().
2. The method returns 0 because the list contains no nodes.
3. The function receives label = "size empty", actual = 0, and expected = 0.
4. JSON.stringify(0) === JSON.stringify(0) evaluates to true.
5. The console prints PASS - size empty: got 0, expected 0.

Notice something important: the test does not implement size() for you. It calls your implementation and checks whether its output matches the expected result.

This is the basic pattern of automated testing:
```
\text{Arrange} \rightarrow \text{Act} \rightarrow \text{Assert}
```

- Arrange: create a list and populate it.
- Act: call a method such as pop().
- Assert: compare the result against the expected value.
Your tests often combine all three in a few lines.

One limitation of your current assert function is that it prints failures but does not stop execution. That's useful while learning, but a larger test suite should count failures and return a nonzero exit code when any test fails.

## Test 1 — Appending nodes
Your code:
```
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("fish");
list.append("hamster");
list.append("turtle");
list.append("snake");

console.log(list.toString());
```
Let's understand what append() must accomplish.

Initially:
After constructing the list
```
head: null     tail: null    size: 0
```
After:
```
list.append("dog");
```
The list must create a node for "dog".
head
```
dog   next: null    tail
```
One node is both the first and the last node.
Now append "cat":


