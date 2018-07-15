function sosuu(n = 1) {
    let by = 1;
    while (n % by === 0) {
        by++;
    }
    return by;
}
console.log(sosuu(5));