function factorialP(n = 0) {
  if (n !== 0) {
    return n + factorialP(n - 1);
  } else {
    return n;
  }
}
console.log(factorialP(10));