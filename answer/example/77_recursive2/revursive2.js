const kaidan = (n) => {
    if (n < 0) {
        return 0;
    } else if (n === 0) {
        return 1;
    } else {
        let result = kaidan(n - 3) + kaidan(n - 2) + kaidan(n - 1);
        return result;
    }
}
let n;
let result;
n = 3;
result = kaidan(n);
console.log(`${n} 段の階段を登る方法は ${result} 通りありました`);
n = 20;
result = kaidan(n);
console.log(`${n} 段の階段を登る方法は ${result} 通りありました`);