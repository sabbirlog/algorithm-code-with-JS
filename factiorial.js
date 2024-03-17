/**
 * Negative numbers not allowd for factorial function
 * If the n number is 0 then it always return 1
 * This function work recursively
 */

function factiorial(n) {
  if (n === 0) return 1;
  return factiorial(n - 1) * n;
}

console.log(factiorial(8));

// Big-O = O(1)