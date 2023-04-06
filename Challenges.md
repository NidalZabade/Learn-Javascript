# Challenges

- Challenge 1

  ```javascript
  let a = 10;
  let b = "20";
  let c = 80;

  console.log(++a + +b++ + +c++ - +a++);
  console.log(++a + -b + +c++ - -a++ + +a);
  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
  ```

  - Output

    ```javascript
    100; // 11 + 20 + 80 - 11 = 100  a = 11, b = 21, c = 81
    100; // 12 + -21 + 81 - -12 + 12 = 100  a = 13, b = 21, c = 82
    100; // 81 + 21 + 12 * 21 - 21 * 13 + 12 - 1 = 100  a= 11, b = 22, c = 81
    ```

- Challenge 2

  ```javascript
  let a = 1_00;
  let b = 2_00.5;
  let c = 1e2;
  let d = 2.4;

  //print the minimum number as an integer

  //compute 10000 using the variables a, d

  //get the number 2 using the variables a, b, c, d in two different ways

  //get the number 66.67 using the variables b,d

  //get the number 67 using the variables b,d
  ```

  - Answer

    ```javascript
    console.log(Math.trunc(Math.min(a, b, c, d)));

    console.log(Math.pow(a, Math.trunc(d)));

    console.log(Math.trunc(d));

    console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));

    console.log(Math.round(Math.floor(b) / Math.ceil(d)));
    ```

- Challenge 3

  ```javascript
  let a = "Elzero Web School";

  //print zero using the variable a
  //print 8 H
  //return array [ 'Elzero' ]
  //using substr() print "Elzero School"
  //given a string make the first and last letter lowercase
  ```

  - Answer

    ```javascript
    console.log(a.substr(2, 4));

    console.log("H".repeat(8));

    console.log(a.match(/Elzero/g));

    console.log(a.substr(0, 6) + " " + a.substr(11, 6));

    console.log(
      a.substr(0, 1).toLowerCase() +
        a.substr(1, a.length - 2) +
        a.substr(a.length - 1, 1).toLowerCase()
    );
    ```

- Challenge 4

  ```javascript
  let zero = 0;

  let counter = 3;

  let my = ["Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ammer"];

  //using string functions and the variables above to print the following
  //print ["Osama", Elham", "Mazero", "Ahmad"]
  //print ["Elham", Mazero"]
  //print "Elzero"
  //print "rO"
  ```

  - Answer

    ```javascript

    ```
