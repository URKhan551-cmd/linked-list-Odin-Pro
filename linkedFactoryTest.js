import { createLinkedList } from "./linkedListFactory.js";


function assert(label, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${pass ? "PASS" : "FAIL"} - ${label}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
}

// No 'new' keyword — just call the factory
const list = createLinkedList();  // the object will get y list

console.log("--- Basic test ---");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null



console.log("\n--- Empty ---");
const empty = createLinkedList();
assert("size", empty.size(), 0);
assert("head", empty.head(), undefined);
assert("tail", empty.tail(), undefined);
assert("at(0)", empty.at(0), undefined);
assert("pop", empty.pop(), undefined);
assert("contains", empty.contains("dog"), false);
assert("findIndex", empty.findIndex("dog"), -1);
assert("toString", empty.toString(), "");



console.log("\n--- prepend / head / tail / at ---");
const l2 = createLinkedList();
l2.prepend("b").prepend("a").append("c");
console.log(l2.toString()); // ( a ) -> ( b ) -> ( c ) -> null
assert("head", l2.head(), "a");
assert("tail", l2.tail(), "c");
assert("at(1)", l2.at(1), "b");


console.log("\n--- pop (removes HEAD per spec) ---");
const l3 = createLinkedList();
l3.append("x"); l3.append("y"); l3.append("z");
assert("pop 1", l3.pop(), "x");
assert("pop 2", l3.pop(), "y");
console.log(l3.toString()); // ( z ) -> null


console.log("\n--- insertAt / removeAt ---");
const l4 = createLinkedList();
l4.append(1); l4.append(2); l4.append(3);
l4.insertAt(1, 10, 11);
console.log(l4.toString()); // ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null
l4.insertAt(0, 0);
console.log(l4.toString()); // ( 0 ) -> ( 1 ) -> ...
l4.insertAt(l4.size(), 99);
console.log(l4.toString()); // ... -> ( 99 ) -> null
console.log("removeAt(1):", l4.removeAt(1));
console.log(l4.toString());

try { 
    l4.insertAt(-1, 1); 
} catch (e) { 
    console.log(`PASS insertAt(-1) threw ${e.constructor.name}`); 
}
try { 
    l4.insertAt(100, 1); 
} catch (e) { 
    console.log(`PASS insertAt(100) threw ${e.constructor.name}`); 
}
try { 
    l4.removeAt(-1); 
} catch (e) { 
    console.log(`PASS removeAt(-1) threw ${e.constructor.name}`); 
}
try { 
    l4.removeAt(l4.size()); 
} catch (e) { 
    console.log(`PASS removeAt(size) threw ${e.constructor.name}`); 
}


console.log("\n--- Two lists are independent ---");


const a = createLinkedList();

const b = createLinkedList();

a.append("only in A");
b.append("only in B");

console.log("A:", a.toString());

console.log("B:", b.toString());