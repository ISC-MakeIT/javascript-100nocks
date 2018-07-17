const priNam2 = () => {
    let primes = [];
    primes.push(2);
    primes.push(3);
    for (let n = 5; n <= 1000; n += 2) {
        for (let i = 0; i < primes.length; i++) {
            if (n % primes[i] === 0) {
                // console.log(`case: ${n} x`);
                break;
            }
            if ((i + 1) === primes.length) {
                // console.log(`case: ${n} o`);
                primes.push(n);
                break;
            }
        }
    }
    return primes;
}
const primes = priNam2();
primes.forEach((v, i) => {
    console.log(`No.${i} v: ${v}`);
});