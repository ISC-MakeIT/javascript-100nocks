const array = [];
let num = Math.floor(Math.random() * 75) + 1;
array.push(num);

while (array.length < 25) {
    num = Math.floor(Math.random() * 75) + 1;
    let judgement = array.includes(num);
    if (judgement) {
        continue;
    }
    array.push(num);
}
console.log(array);