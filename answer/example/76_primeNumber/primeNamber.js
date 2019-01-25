const priNam1 = () => {
  const primes = [];
  primes.push(2);
  primes.push(3);
  for (let n = 5; n <= 1000; n++) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        break;
      }
      if (n === (i + 1)) {
        primes.push(n);
      }
    }
  }
  return primes;
}
const primes = priNam1();
primes.forEach((v, i) => {
  console.log(`No.${i} v: ${v}`);
});