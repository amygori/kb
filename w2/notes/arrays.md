autoscale: true

# Arrays

---

# Arrays are ordered lists

* An array contains 0 or more other items
* The items can be anything -- booleans, numbers, strings, null, other arrays, objects
* Arrays count up from 0

---

# Why do we need arrays?

* Arrays make it easy for us to loop through them
* With `customer1`, `customer2`, and so on, we can't easily do the same thing to each customer

---

# Array syntax

```js
var students = [
  'Alyssa', 'Ben', 'Crystal', 'Hunter', 'Jacob',
  'Katie', 'Liz', 'Molly', 'Parker'
];
console.log(students[0]); // => "Alyssa"
console.log(students[4]); // => "Jacob"
```

---

# Arrays don't have to be homogenous

```js
var stuff = [
  "Hello", 29, undefined, true, ["a", "b", "c"]
];
console.log(stuff[1]); // => 29
console.log(stuff[4][1]); // => 'b'
```

But there's not a lot of reason for heterogenous arrays.

---

# Looping through arrays with `for`

```js
for (var index = 0; index < stuff.length; index++) {
  console.log(index, stuff[index])
}

// 0 'Hello'
// 1 29
// 2 undefined
// 3 true
// 4 [ 'a', 'b', 'c' ]
```

---

# What can we do with loops?

* Collect things
* Find things
* Make new things

---

# Collecting things

```js
var nums = [12, 3, 2, 11, 9, -6];
var product = 1;

for (var i = 0; i < nums.length; i++) {
  product *= nums[i];
}

console.log(product);

// -42768
```

---

# Getting the maximum

```js
var nums = [12, 3, 2, 11, 9, -6];
var max;

for (var i = 0; i < nums.length; i++) {
  if (typeof(max) === 'undefined' || nums[i] > max) {
    max = nums[i];
  }
}

console.log(max);

// 12
```

---


# Finding things

```js
function isOdd(n) { return n % 2 == 1 }

var nums = [12, 3, 2, 11, 9, -6];

for (var i = 0; i < nums.length; i++) {
  if (isOdd(nums[i])) {
    console.log(nums[i]);
  }
}

// 3
// 11
// 9
```

---

# Find first

```js
var nums = [12, 3, 2, 11, 9, -6];
var firstOdd;

for (var i = 0; i < nums.length; i++) {
  if (typeof(firstOdd) === 'undefined' && isOdd(nums[i])) {
    firstOdd = nums[i];
  }
}

console.log(firstOdd);

// 3
```
---

## Find first with `break`

```js
var nums = [12, 3, 2, 11, 9, -6];
var firstOdd;

for (var i = 0; i < nums.length; i++) {
  if (isOdd(nums[i])) {
    firstOdd = nums[i];
    break;
  }
}

console.log(firstOdd);

// 3
```

---

# `break` explained

```js
var nums = [12, 3, 2, 11, 9, -6];
var firstOdd;

for (var i = 0; i < nums.length; i++) {
  console.log("i", i);
  if (isOdd(nums[i])) {
    firstOdd = nums[i];
    break;
  }
}

console.log("firstOdd", firstOdd);

// i 0
// i 1
// firstOdd 3
```

---

# Making new things

```js
var nums = [12, 3, 2, 11, 9, -6];
var squares = [];

for (var i = 0; i < nums.length; i++) {
  squares[i] = nums[i] * nums[i];
}

console.log(squares);

// [ 144, 9, 4, 121, 81, 36 ]
```

---

# Filtering arrays

```js
var nums = [12, 3, 2, 11, 9, -6];
var oddNums = [];

for (var i = 0; i < nums.length; i++) {
  if (isOdd(nums[i])) {
    oddNums.push(nums[i])
  }
}

console.log(oddNums);

// [ 3, 11, 9 ]
```

---

# Looping through arrays with `for / of`

```js
var stuff = [
  "Hello", 29, undefined, true, ["a", "b", "c"]
];

for (var item of stuff) {
  console.log(item);
}

// Hello
// 29
// undefined
// true
// [ 'a', 'b', 'c' ]
```

---

# Manipulating arrays

```js
stuff.push("banana")
// => 6
stuff
// => [ 'Hello', 29, undefined, true, [ 'a', 'b', 'c' ], 'banana' ]
stuff.pop()
// => "banana"
stuff.unshift(13)
// => 6
stuff
// => [ 13, 'Hello', 29, undefined, true, [ 'a', 'b', 'c' ] ]
stuff.shift()
// => 13
```
---

# Making new arrays

```js
stuff.concat("apple")
// => [ 'Hello', 29, undefined, true,
//      [ 'a', 'b', 'c' ], 'apple' ]
stuff.concat(["orange", "kiwi"])
// => [ 'Hello', 29, undefined, true, [ 'a', 'b', 'c' ],
//      'orange', 'kiwi' ]
stuff.slice(0, 2)
// => [ 'Hello', 29 ]
```

---

# What else can I do with arrays?

---

# Find the index of an item in an array

```js
stuff.indexOf(29)
// => 1

stuff.indexOf(["a", "b", "c"])
// => -1
// What is happening here?
```

---

# Delete an item from an array

```js
var deletedItems = stuff.splice(3, 1)
console.log(deletedItems);
// => [ true ]

console.log(stuff);
// => [ 'Hello', 29, undefined, [ 'a', 'b', 'c' ] ]
```

---

# Turn an array into a string

```js
var students = [
  'Alyssa', 'Ben', 'Crystal', 'Hunter', 'Jacob',
  'Katie', 'Liz', 'Molly', 'Parker'
];

students.join(", ")

// 'Alyssa, Ben, Crystal, Hunter,
//  Jacob, Katie, Liz, Molly, Parker'
```

---

# Sort an array

```js
var nums = [12, 3, 2, 11, 9, -6];
nums.sort();

console.log(nums);
// [ -6, 11, 12, 2, 3, 9 ]
```

What kind of sort is this?

---

# Sort an array for real

```js
var nums = [12, 3, 2, 11, 9, -6];
nums.sort(function (a, b) { return a - b });

console.log(nums);
// [ -6, 2, 3, 9, 11, 12 ]
```
