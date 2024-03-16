function fibonacciSeq(n) {
  const assumingFeb = [0, 1];
  for (let i = 2; i < n; i++) {
    /**
     * linear time complexity O(n). It's depend on n or you could say input size.
     * O(n + 2)
     */
    assumingFeb[i] = assumingFeb[i - 2] + assumingFeb[i - 1];
  }
  return assumingFeb;
}

console.log(fibonacciSeq(6));
