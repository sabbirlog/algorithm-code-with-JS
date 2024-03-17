/**
 * Prime number is only divisible by 1 and itself.
 * Prime numbers are natural number greater than 1.
 * 2 is the smallest prime number.
 * 2 is the only even prime number. All the prime numbers except 2 are odd.
 */

function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  //   if (n > 2 && n % 2 === 0) {
  //     return false;
  //   }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(1)); // false
console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(8)); // false
console.log(isPrimeNumber(11)); // true
