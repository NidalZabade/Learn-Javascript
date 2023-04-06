# Learn Javascript

## Table of Contents

- [Learn Javascript](#learn-javascript)
  - [Table of Contents](#table-of-contents)
  - [Comments](#comments)
  - [Data Types](#data-types)
  - [Variables](#variables)
    - [Difference between `var`, `let` and `const`](#difference-between-var-let-and-const)
  - [Type Conversion](#type-conversion)
  - [Conditional Statements](#conditional-statements)
  - [Loops](#loops)
  - [Functions](#functions)
  - [Arrays](#arrays)
  - [Sets](#sets)
  - [Objects](#objects)
  - [Classes](#classes)
  - [Inheritance](#inheritance)
  - [Class Encapsulation](#class-encapsulation)
  - [JSON](#json)
    - [JSON Syntax](#json-syntax)
  - [API](#api)
  - [Synchronous and Asynchronous](#synchronous-and-asynchronous)
  - [Call Stack](#call-stack)
  - [Callback](#callback)
  - [Event Loop](#event-loop)
  - [Callback Hell or Pyramid of Doom](#callback-hell-or-pyramid-of-doom)
  - [Promises](#promises)
  - [XHR with Promises](#xhr-with-promises)
  - [Fetch API](#fetch-api)
  - [Promise All, All Settled and Race](#promise-all-all-settled-and-race)
  - [Async and Await](#async-and-await)
  - [Try , Catch and Finally](#try--catch-and-finally)

## Comments

You can write a single line comment in Javascript using `//` and use `/* */` for multiple line comment. For example:

```javascript
// This is a Single line comment

/*
This
is
Multiple
lines
comment
*/
```

## Data Types

We can use `typeof` function see the returning type for the data types

- Null
  Using `typeof` function it return `null`

- Undefined
  Using `typeof` function it return `undefined`

- Boolean
  Using `typeof` function it return `boolean`

- Number
  Using `typeof` function it return `number`

- BigInt
  Using `typeof` function it return `bigint`

- String
  Using `typeof` function it return `string`

- Symbol
  Using `typeof` function it return `symbol`

## Variables

- We can declare a variable using the `var` keyword

```javascript
var myName = "John";
```

- We can declare a variable using the `let` keyword

```javascript
let myName = "John";
```

- We can declare a variable using the `const` keyword

```javascript
const myName = "John";
```

### Difference between `var`, `let` and `const`

- `var` is function scoped
- `let` and `const` are block scoped
- `var` can be re-declared and updated
- `let` can be updated but not re-declared
- `const` can neither be re-declared nor updated

## Type Conversion

- We can convert a string to a number using `Number()` function

```javascript
var myAge = "25";
var myAgeNumber = Number(myAge);
```

- We can convert a number to a string using `String()` function

```javascript
var myAge = 25;
var myAgeString = String(myAge);
```

And So on...

- The Boolean value `true` is converted to `1` and `false` is converted to `0` in numeric context.

For example:

```javascript
var myAge = 25;
var myAgeString = String(myAge);
var myAgeBoolean = Boolean(myAge);
console.log(myAgeString); // 25
console.log(myAgeBoolean); // true
```

## Conditional Statements

- `if` statement

```javascript
if (condition) {
  // code to be executed if condition is true
}
```

- `if...else` statement

```javascript
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

- `if...else if...else` statement

```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if the condition1 is false and condition2 is true
} else {
  // code to be executed if the condition1 is false and condition2 is false
}
```

- `switch` statement

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

## Loops

- `for` loop

```javascript

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

For example:

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

- `while` loop

```javascript
while (condition) {
  // code block to be executed
}
```

For example:

```javascript
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- `do...while` loop

```javascript
do {
  // code block to be executed
} while (condition);
```

For example:

```javascript
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## Functions

- We can declare a function using the `function` keyword

```javascript
function myFunction() {
  // code to be executed
}
```

For example:

```javascript
function myFunction() {
  console.log("Hello World");
}
```

- We can call a function using the function name

```javascript
myFunction();
```

We can pass arguments to a function and return a value from a function

```javascript
function myFunction(a, b) {
  return a + b;
}
```

## Arrays

- We can declare an array using the `[]` brackets

```javascript
var myArray = ["John", "Doe", 25];
```

- We can access the array elements using the index number

```javascript
var myArray = ["John", "Doe", 25];

console.log(myArray[0]); // John
console.log(myArray[1]); // Doe
console.log(myArray[2]); // 25
```

- We can change the array elements using the index number

```javascript
var myArray = ["John", "Doe", 25];

myArray[0] = "Jane";
myArray[1] = "Doe";
myArray[2] = 26;

console.log(myArray[0]); // Jane
console.log(myArray[1]); // Doe
console.log(myArray[2]); // 26
```

## Sets

- We can declare a set using the `new Set()` function

```javascript
var mySet = new Set();
```

- We can add elements to a set using the `add()` function

```javascript
var mySet = new Set();

mySet.add("John");
mySet.add("Doe");
mySet.add(25);
```

- We can check if a set has an element using the `has()` function

```javascript
var mySet = new Set();

mySet.add("John");
mySet.add("Doe");
mySet.add(25);

console.log(mySet.has("John")); // true
console.log(mySet.has("Jane")); // false
```

- We can delete an element from a set using the `delete()` function

```javascript
var mySet = new Set();

mySet.add("John");
mySet.add("Doe");
mySet.add(25);

mySet.delete("John");
```

- We can get the size of a set using the `size` property

```javascript
var mySet = new Set();

mySet.add("John");
mySet.add("Doe");
mySet.add(25);

console.log(mySet.size); // 3
```

- We can clear all the elements from a set using the `clear()` function

```javascript
var mySet = new Set();

mySet.add("John");
mySet.add("Doe");
mySet.add(25);

mySet.clear();
```

- **We use sets when we want to store unique values**

## Objects

- We can declare an object using the `{}` brackets

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
```

- We can access the object properties using the dot notation

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

console.log(myObject.firstName); // John
```

- Object properties can also be accessed using the square brackets

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

console.log(myObject["firstName"]); // John
```

- Object can have methods

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(myObject.fullName()); // John Doe
```

- Nested objects

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

console.log(myObject.address.city); // New York
```

- We can add new properties to an object

```javascript
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

myObject.title = "Mr.";

console.log(myObject.title); // Mr.
```

- Creating a new object using the `new` keyword

```javascript
var myObject = new Object();

myObject.firstName = "John";
myObject.lastName = "Doe";
myObject.age = 25;

console.log(myObject.firstName); // John
```

- Creating a new object using the `Object.create()` method

```javascript
var myObject = Object.create(null);

myObject.firstName = "John";
myObject.lastName = "Doe";
myObject.age = 25;

console.log(myObject.firstName); // John
```

## Classes

We can create a class using the `class` keyword

```javascript
class MyClass {
  constructor() {
    // code to be executed
  }
}
```

for example:

```javascript
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

var student1 = new Student("John", "Doe", 25);

console.log(student1.firstName); // John
```

- Static methods

static methods are methods that can be called without instantiating the class

```javascript
class MyClass {
  constructor() {
    // code to be executed
  }

  static myStaticMethod() {
    // code to be executed
  }
}
```

for example:

```javascript
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
}

var student1 = new Student("John", "Doe", 25);

console.log(Student.getFullName("John", "Doe")); // John Doe
```

- Static properties

static properties are properties that can be called without instantiating the class

```javascript
class MyClass {
  constructor() {
    // code to be executed
  }

  static myStaticProperty = "value";
}
```

for example:

```javascript
class Student {
  static myStaticProperty = "value";
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
}

var student1 = new Student("John", "Doe", 25);

console.log(Student.myStaticProperty); // value
```

- Getters and Setters

getters and setters are used to access and modify the properties of a class

```javascript
class MyClass {
  constructor() {
    // code to be executed
  }

  get myProperty() {
    // code to be executed
  }

  set myProperty(value) {
    // code to be executed
  }
}
```

for example:

```javascript
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(value) {
    var nameParts = value.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
}

var student1 = new Student("John", "Doe", 25);

console.log(student1.fullName); // John Doe

student1.fullName = "Jane Doe";

console.log(student1.firstName); // Jane

console.log(student1.lastName); // Doe
```

## Inheritance

We can inherit a class using the `extends` keyword

```javascript
class MyClass extends ParentClass {
  constructor() {
    super();
    // code to be executed
  }
}
```

for example:

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
  }
}

var student1 = new Student("John", "Doe", 25);

console.log(student1.firstName); // John
```

## Class Encapsulation

We can encapsulate a class using the `#` symbol

```javascript
class MyClass {
  #myPrivateProperty = "value";

  constructor() {
    // code to be executed
  }
}
```

for example:

```javascript
class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  getFullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

var person1 = new Person("John", "Doe", 25);

console.log(person1.getFullName()); // John Doe
```

## JSON

- JSON is a syntax for storing and exchanging data
- JSON is text, written with JavaScript object notation
- JSON is language independent
- JSON is "self-describing" and easy to understand
- JSON is used to transmit data between a web browser and a server
- You can not write comments in JSON
- JSON file extension is `.json`

### JSON Syntax

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays
- JSON is case sensitive
- JSON is a string representation of a JavaScript object

Example

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 25,
  "address": {
    "city": "New York",
    "state": "NY",
    "country": "USA"
  }
}
```

## API

API stands for Application Programming Interface. API is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service

- Request

```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/NidalZabade/repos");

xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
```

- Readystates

  - 0: request not initialized
  - 1: server connection established
  - 2: request received
  - 3: processing request
  - 4: request finished and response is ready

- Statuses
  - 200: "OK"
  - 403: "Forbidden"
  - 404: "Not Found"

## Synchronous and Asynchronous

| Synchronous                                     | Asynchronous                                        |
| ----------------------------------------------- | --------------------------------------------------- |
| Synchronous code is executed line by line       | Asynchronous code is executed in a different order  |
| Synchronous code is executed in the main thread | Asynchronous code is executed in a different thread |
| Synchronous code is executed in a blocking way  | Asynchronous code is executed in a non-blocking way |

- Example of synchronous code

```javascript
console.log("Hello");

console.log("World");
```

`Output: Hello World`

- Example of asynchronous code

```javascript
setTimeout(function () {
  console.log("Hello");
}, 1000);

console.log("World");
```

`Output: World Hello`

## Call Stack

The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call)

## Callback

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

## Event Loop

The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program

## Callback Hell or Pyramid of Doom

Callback hell is a problem that occurs when you have a lot of nested callbacks or a function that is passed as an argument to another function

- Example of callback hell

```javascript
setTimeout(function () {
  console.log("Hello");

  setTimeout(function () {
    console.log("World");

    setTimeout(function () {
      console.log("!");
    }, 1000);
  }, 1000);
}, 1000);
```

## Promises

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection

- Pending: initial state, neither fulfilled nor rejected.
- Fulfilled: meaning that the operation completed successfully.
- Rejected: meaning that the operation failed.

- Example of promise

```javascript
var promise = new Promise(function (resolve, reject) {
  let connection = true;

  if (connection) {
    resolve("Connection is established");
  } else {
    reject("Connection is not established");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## XHR with Promises

XHR stands for XML HTTP Request. XHR is an API in the form of an object whose methods transfer data between a web browser and a web server

- Example of XHR with promises

```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var promise = new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/NidalZabade/repos");

  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resolve(this.responseText);
    } else {
      reject("Error");
    }
  };
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## Fetch API

Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network

- Example of fetch API

```javascript
fetch("https://api.github.com/users/NidalZabade/repos")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Promise All, All Settled and Race

- Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises
- Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise
- Race method takes an iterable of promises as an input, and returns a single Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise

- Example of Promise.all()

```javascript
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});
```

`Output: [3, 42, "foo"]`

- Example of Promise.allSettled()

```javascript
const promises = [
  new Promise((resolve) => setTimeout(resolve, 200, "one")),
  new Promise((resolve, reject) => setTimeout(reject, 100, "two")),
  new Promise((resolve) => setTimeout(resolve, 300, "three")),
];

Promise.allSettled(promises).then((results) => console.log(results));
```

`Output: [{status: "fulfilled", value: "one"}, {status: "rejected", reason: "two"}, {status: "fulfilled", value: "three"}]`

- Example Race

```javascript
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "one")
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "two")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "three")
);

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster because it only takes 100ms
});
```

`Output: two`

## Async and Await

- Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains

- Example of async and await

```javascript
async function myFunction() {
  try {
    const response = await fetch(
      "https://api.github.com/users/NidalZabade/repos"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
```

## Try , Catch and Finally

- Try statement lets you test a block of code for errors
- Catch statement lets you handle the error
- Finally statement lets you execute code, after try and catch, regardless of the result

- Example of try, catch and finally

```javascript
try {
  let x = 10;
  let y = 0;
  let z = x / y;
  console.log(z);
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally block");
}
```
