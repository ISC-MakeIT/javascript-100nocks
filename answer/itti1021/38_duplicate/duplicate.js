const array = [];
let num = Math.floor(Math.random() * 75) + 1;
array.push(num);

for (let i = 1; i < 25; i++) {
    num = Math.floor(Math.random() * 75) + 1;
    let judgement = array.includes(num);
    if (judgement) {
        i--;
    }
    if (!judgement) {
        array.push(num);
    }
}
console.log(array);