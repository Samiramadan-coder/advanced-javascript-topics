/* 
  * Official Definition of Recursion:
      In computer science, recursion is a method of solving a problem where the 
      solution depends on solutions to smaller instance of the same problem

  * Unofficial Definition of Recursion
      Any situation where you do somthing, and depends on the results, you might do it 
      again

  * In Programming, recursion occurs when a function calls itself.

  * Any iterator function (aka function with a loop) can be recursive instead
*/

const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
}

// countToTen();

/* 
  recursive function have 2 parts:
    1) the recursive call to the function
    2) at least one condition to exit 
*/

const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
}

// recurToTen();

/*
  Reason to use recursion
    1) less code
    2) elegant code 
    3) increase readability
*/

/*
  Reason to not use recursion
    1) Performance
    2) more difficult to debug (aka follow the logic) 
    3) Is the readability improved?
*/

/*
  the standered example: the fibonacci sequence
  0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
*/

// without recursion
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  };

  return array;
}

// console.log(fibonacci(12));

// with recursion
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
}

console.log(fib(12));
