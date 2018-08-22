const HAIRETSU = [];
for (let i = 0; i < 25;) {
    let kekka = Math.floor(Math.random() * (75 - 1) + 1);
    let kensaku = HAIRETSU.indexOf(kekka, 0);
    if (kensaku == -1) {
        HAIRETSU.push(kekka);
        i++
    }
}

HAIRETSU.sort(function(a,b){
    if(a < b ) return -1;
    if (a > b) return 1;
    return 0;
})
console.log(HAIRETSU);