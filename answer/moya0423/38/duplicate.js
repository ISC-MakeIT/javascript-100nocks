const ARRAY = [];
for (let i = 0; i < 25;) {
    let result = Math.floor(Math.random() * (75 - 1) + 1);
    let search = ARRAY.indexOf(result, 0);
    if (search == -1) {
        ARRAY.push(result);
        i++
    }
}
console.log(ARRAY);