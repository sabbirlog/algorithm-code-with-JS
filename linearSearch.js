/**
 * Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element not found.
 */

/**
 * Linear search: Start searching from the first element in the array and move towards the last.
 * BigO = O(n)
 */

function findTargetIndex(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(findTargetIndex([-5, 8, 9, 0, 1, 3], -5));
console.log(findTargetIndex([-5, 8, 9, 0, 1, 3], 10));
