/**
 * Iterative solution
 * The fibonacci sequence is a sequence in which each number is the sum of two preceding ones
 * linear time complexity O(n). It's depend on n or you could say input size.
 * BigO = O(n)
 * O(n + 2)
 */
function fibonacciSeq(n) {
  const assumingFeb = [0, 1];
  for (let i = 2; i < n; i++) {
    assumingFeb[i] = assumingFeb[i - 2] + assumingFeb[i - 1];
  }
  return assumingFeb;
}

/**
 * recursive solution
 * we need to keep in mind. when use recursive technique, need a base case to terminate the infinite loop.
 * We need to find out smaller chunk of the same problem  and write code to solve smaller problem.
 * F of n = F of (n - 1) + F of (n - 2).
 * Base case: if F of n = 0, return 0. if F of n = 1, return 1.
 * BigO = O(2^n)
 */

function recursiveFibonacciSeq(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacciSeq(n - 1) + recursiveFibonacciSeq(n - 2);
}

console.log(recursiveFibonacciSeq(0));
console.log(recursiveFibonacciSeq(1));
console.log(recursiveFibonacciSeq(6));
console.log(recursiveFibonacciSeq(7));
