# Notes and Tips

- To print in efficient way in javascript:

```javascript
var myName = "John";
console.log(`Hello ${myName}`);
```

it is the same concept in python

```python
myName = "John"
print(f"Hello {myName}")
```

- In javascript there is different between `==` and `===`

`==` is for comparing the value (it will convert the type if it is possible)

`===` is for comparing the value and the type (it will not convert the type)

For example:

```javascript
var a = 1;
var b = "1";
console.log(a == b); // true
console.log(a === b); // false
```

- In javascript there is different between `!=` and `!==`

`!=` is for comparing the value (it will convert the type if it is possible)

`!==` is for comparing the value and the type (it will not convert the type)

For example:

```javascript
var a = 1;
var b = "1";
console.log(a != b); // false
console.log(a !== b); // true
```

- Syntax sugar in javascript

```javascript
var a = 10000000;

// this is the same as
var a = 1e7;

// or
var a = 10_000_000;

// or
a = 10 ** 7;
```

- MAX_SAFE_INTEGER

```javascript
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

- MAX_SAFE_VALUE

```javascript
Number.MAX_VALUE; // 1.7976931348623157e+308
```

- if statement using ternary operator

```javascript
var a = 10;

var result = a > 10 ? "a is greater than 10" : "a is less than or equal to 10";
console.log(result); // a is less than or equal to 10
```

- if statement using ternary operator with multiple conditions

```javascript
var a = 10;

var result =
  a > 10
    ? "a is greater than 10"
    : a < 10
    ? "a is less than 10"
    : "a is equal to 10";
console.log(result); // a is equal to 10
```

- add new index to array in the beginning

```javascript
var arr = [1, 2, 3, 4, 5];

arr.unshift(0);

console.log(arr); // [0, 1, 2, 3, 4, 5]
```

- add new index to array in the end

```javascript
var arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr); // [1, 2, 3, 4, 5, 6]
```

- remove index from array in the beginning

```javascript
var arr = [1, 2, 3, 4, 5];

arr.shift();

console.log(arr); // [2, 3, 4, 5]
```

- remove index from array in the end

```javascript
var arr = [1, 2, 3, 4, 5];

arr.pop();

console.log(arr); // [1, 2, 3, 4]
```

- splice array: remove index from array in the middle and add new index

```javascript
var arr = [1, 2, 3, 4, 5];

arr.splice(2, 1, 10);

console.log(arr); // [1, 2, 10, 4, 5]
```

- function rest parameter

```javascript
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

- function default parameter

```javascript
function sum(a, b = 10) {
  return a + b;
}

console.log(sum(1)); // 11
```

- array mappping

```javascript
var arr = [1, 2, 3, 4, 5];

var result = arr.map((item) => item * 2);

console.log(result); // [2, 4, 6, 8, 10]
```

another example:

```javascript
var arr = [1, 2, 3, 4, 5];

var result = arr.map(function (item) {
  return item * 2;
});

console.log(result); // [2, 4, 6, 8, 10]
```

- array filtering

```javascript
var arr = [1, 2, 3, 4, 5];

var result = arr.filter((item) => item % 2 === 0);

console.log(result); // [2, 4]
```

- array reduce: sum all items in array using reduce

```javascript
var arr = [1, 2, 3, 4, 5];

var result = arr.reduce((a, b) => a + b, 0);

console.log(result); // 15
```

- array reduce: sum all items in array using reduce and initial value

```javascript
var arr = [1, 2, 3, 4, 5];

var result = arr.reduce((a, b) => a + b, 10);

console.log(result); // 25
```

- Foreach

```javascript
var arr = [1, 2, 3, 4, 5];

arr.forEach((item) => console.log(item));

// 1
// 2
// 3
// 4
// 5
```

- Array destructuring

```javascript
var arr = [1, 2, 3, 4, 5];

var [a, b, c, d, e] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
```

- Array destructuring with rest parameter

```javascript
var arr = [1, 2, 3, 4, 5];

var [a, b, ...rest] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```

- Array destructuring with default value

```javascript
var arr = [1, 2];

var [a, b, c = 10] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 10
```

- Array destructuring skip index

```javascript
var arr = [1, 2, 3, 4, 5];

var [a, , c] = arr;

console.log(a); // 1
console.log(c); // 3
```

- Array destructuring swap values

```javascript
var a = 10;
var b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

- `this` in javascript

```javascript
var obj = {
  name: "John",
  printName: function () {
    console.log(this.name);
  },
};

obj.printName(); // John
```

- Object destructuring

```javascript
var obj = {
  name: "John",
  age: 30,
};

var { name, age } = obj;

console.log(name); // John
console.log(age); // 30
```

- Regular expression

```javascript
var str = "Hello World";

var result = str.match(/Hello/);

console.log(result); // ["Hello"]
```

- Regular expression with flags

```javascript
var str = "Hello World";

var result = str.match(/Hello/i);

console.log(result); // ["Hello"]
```

- Add new prototype to class

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

Person.prototype.printName = function () {
  console.log(this.name);
};
var person = new Person("John");

person.printName(); // John
```

- Date and time

```javascript
var date = new Date();

console.log(date); // 2020-07-01T08:00:00.000Z
```

- Date and time with specific date

```javascript
var date = new Date("2020-07-01");

console.log(date); // 2020-07-01T00:00:00.000Z
```

- Convert JSON to Javascript object

```javascript
var json = '{"name": "John"} , {"name": "Doe"}';

var obj = JSON.parse(json);

console.log(obj); // [{name: "John"}, {name: "Doe"}]
```

- Convert Javascript object to JSON

```javascript
var obj = [{ name: "John" }, { name: "Doe" }];

var json = JSON.stringify(obj);

console.log(json); // [{"name":"John"},{"name":"Doe"}]
```

- Github repository names using api

```javascript
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhrequest = new XMLHttpRequest();

xhrequest.open("GET", "https://api.github.com/users/NidalZabade/repos");

xhrequest.send();

xhrequest.onreadystatechange = function () {
  if (xhrequest.readyState == 4 && xhrequest.status == 200) {
    var data = JSON.parse(xhrequest.responseText);
    data.forEach((element) => {
      console.log(element.name);
    });
  }
};
```

- Promise then, catch and finally

  - then: called when promise is resolved
  - catch: called when promise is rejected
  - finally: called when promise is resolved or rejected

```javascript
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
```
