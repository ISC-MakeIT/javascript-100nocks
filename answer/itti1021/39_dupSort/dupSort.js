const array = [];
while (array.length < 25) {
    let num = Math.floor(Math.random() * 75) + 1;
    let judgement = array.includes(num);
    if (judgement) {
        continue;
    }
    array.push(num);
}
let result = array.sort(function(a , b) {
    return a - b;
});
console.log(result);