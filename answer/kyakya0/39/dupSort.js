const numbers = [...Array(75).keys()].map(i => ++i);    //1~75の配列

const array = [];

for (let i = 0; i < 25; i++) {
    let j = Math.floor(Math.random() * numbers.length);
    array.push(numbers.splice(j, 1) - 0);
}

array.sort((a, b) => a - b);

console.log(array);