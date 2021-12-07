// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that
// each number is the sum of the two preceding ones, starting from 0 and 1. That is,
/**
 * F(0) = 0, F(1) = 1
 *   F(n) = F(n - 1) + F(n - 2), for n > 1.
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const lastTwo = [1, 2];
  const counter = 3;
  if (n <= 1) {
    return n;
  }
  if (n == 2) {
    return 1;
  }

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return lastTwo[0] + lastTwo[1];
};

var fib1 = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};

function fib(n) {
  const lastTwo = [1, 2];
  let counter = 3;
  if (n <= 1) {
    return n;
  }
  if (n == 2) {
    return 1;
  }

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return lastTwo[0] + lastTwo[1];
}

fib(2);

// correct solution
// https://dev.to/rembrandtreyes/let-s-solve-leetcode-fibonacci-number-4cpj
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};
