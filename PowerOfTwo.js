/**
 * Using bitwise
 * Big-O = O(1)
 */
function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

/**
 * Using while loop
 * Big-O = O(logn)
 */
function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

/**
 * Using for loop
 * Big-O = O(n)
 */
function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  for (let i = 1; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));
