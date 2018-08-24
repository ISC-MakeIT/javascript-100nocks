const ARRAY = [];
for (let i = 0; i < 25;) {
    let result = Math.floor(Math.random() * (75 - 1) + 1);
    let search = ARRAY.indexOf(result, 0);
    if (search == -1) {
        ARRAY.push(result);
        i++
    }
}

ARRAY.sort(function(a,b){
    if (a < b ) return -1;
    if (a > b) return 1;
    return 0;
})
console.log(ARRAY);