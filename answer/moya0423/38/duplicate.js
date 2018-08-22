const HAIRETSU = [];
for (let i = 0; i < 25;) {
    let kekka = Math.floor(Math.random() * (75 - 1) + 1);
    let kensaku = HAIRETSU.indexOf(kekka, 0);
    if (kensaku == -1) {
        HAIRETSU.push(kekka);
        i++
    }
}
console.log(HAIRETSU);