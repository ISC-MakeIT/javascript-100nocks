const priNam1 = () => {
    let primes = [];
    primes.push(2);
    primes.push(3);
    for (let n = 5; n <= 1000; n++) {
        for (let i = 2; i < n; i++) {
            // console.log(`case: ${n} x n: ${i}`);
            if (n % i === 0) {
                break;
            }
            if (n === (i + 1)) {
                // console.log(`case: ${n} o`);
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