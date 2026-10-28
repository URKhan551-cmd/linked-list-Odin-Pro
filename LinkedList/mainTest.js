import {LinkedList} from "./linkedList.js";

function assert(label, actual, expected){
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(`${pass ? "PASS" : "FAIL"} - ${label}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)} `);

    console.log("1: BAsic test for assignment....");

    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");
    list.append("fish");
    list.append("hamster");
    list.append("turtle");
    list.append("snake");
    console.log(list.toString());

    // expected (dog) > (cat) > (parrot) > (hamster) > (snake)


    console.log("test 2 empty list edge cases...");
    const empty = new LinkedList();
    assert("size empty", empty.size(), 0);
    assert("head empty", empty.head(), undefined);
    assert("tail empty", empty.tail(), undefined);
    assert("at(0) empty", empty.at(), undefined);
    assert("pop empty", empty.pop(), undefined);
    assert("contains empty", empty.contains("dog"), false);
    assert("findIndex empty", empty.findIndex("dog"), -1);
    assert("toString empty", empty.toString(), "");


    onsole.log("test 3: prepend / head/ tail / size / at..");
    const test12 = new LinkedList();
    test12.append("a");
    test12.append("b");
    test12.append("c");

    console.log(test12.toString());  

    assert("size", test12.size(), 3)
    assert("head", test12.head(), "a");
    assert("tail", test12.tail(), "c");
    assert("at(0)", test12.at(0), "a");
    assert("at(1)", test12.at(1), "b");
    assert("at(2)", test12.at(2), "c");
    assert("at(3) out of bounds", test12.at(3), undefined);
    assert("at(-1)", test12.at(-1), undefined);


    console.log("\n--- 4. contains / findIndex (duplicates) ---");
  
    const l3 = new LinkedList();
l3.append(1); l3.append(2); l3.append(2); l3.append(3);
assert("contains 2", l3.contains(2), true);
assert("contains 99", l3.contains(99), false);
assert("findIndex 2 (first)", l3.findIndex(2), 1);
assert("findIndex 99", l3.findIndex(99), -1);


console.log("\n--- 5. pop() - spec says removes HEAD ---");
const l4 = new LinkedList();
l4.append("x"); l4.append("y"); l4.append("z");
assert("pop returns head", l4.pop(), "x");
console.log(l4.toString()); // ( y ) -> ( z ) -> null
assert("pop again", l4.pop(), "y");
assert("pop last", l4.pop(), "z");
assert("pop empty after", l4.pop(), undefined);
assert("size after pops", l4.size(), 0);


console.log("\n--- 6. insertAt extra credit ---");
const l5 = new LinkedList();
l5.append(1); l5.append(2); l5.append(3);
console.log("before:", l5.toString());
l5.insertAt(1, 10, 11);
console.log("after insertAt(1, 10, 11):", l5.toString());
// ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null
assert("size after insert", l5.size(), 5);
l5.insertAt(0, 0); // at start
console.log("insertAt(0, 0):", l5.toString());
l5.insertAt(l5.size(), 99); // at end (size is allowed)
console.log("insertAt(size, 99):", l5.toString());

try { l5.insertAt(-1, 1); console.log("FAIL - should have thrown"); }
catch (e) { console.log(`PASS - insertAt(-1) threw: ${e.constructor.name}: ${e.message}`); }
try { l5.insertAt(100, 1); console.log("FAIL - should have thrown"); }
catch (e) { console.log(`PASS - insertAt(100) threw: ${e.constructor.name}: ${e.message}`); }
console.log("\n--- 7. removeAt extra credit ---");



const l6 = new LinkedList();
l6.append("a"); l6.append("b"); l6.append("c"); l6.append("d");
console.log("before:", l6.toString());
console.log("removeAt(1) returned:", l6.removeAt(1)); // b
console.log("after:", l6.toString()); // a -> c -> d
console.log("removeAt(0) returned:", l6.removeAt(0)); // a
console.log("after:", l6.toString()); // c -> d
console.log("removeAt(last) returned:", l6.removeAt(l6.size() - 1)); // d
console.log("after:", l6.toString()); // c
assert("size after removes", l6.size(), 1);

try { 
    l6.removeAt(-1); 
    console.log("FAIL"); 
} catch (e) { 
    console.log(`PASS - removeAt(-1) threw: ${e.constructor.name}`);
}

try { 
    l6.removeAt(1); 
    console.log("FAIL"); 
} catch (e) { 
    console.log(`PASS - removeAt(size) threw: ${e.constructor.name}`); 
}


console.log("\n--- 8. Different data types ---");


const mixed = new LinkedList();
mixed.append(null);
mixed.append(0);
mixed.append(false);
mixed.append({ name: "obj" });
mixed.append([1, 2]);
console.log(mixed.toString());
assert("contains null", mixed.contains(null), true);
assert("contains 0", mixed.contains(0), true);
assert("size mixed", mixed.size(), 5);

}