const array = [];
let num = Math.floor(Math.random() * 75) + 1;
array.push(num);

for (let i = 0; i < 24; i++) {
    num = Math.floor(Math.random() * 75) + 1;
    let cnt = 0;
    for (let j = 0; j < array.length; j++) {
        let item = array[j];
        if (num === item) {
            num = Math.floor(Math.random() * 75) + 1;
        }
        else {
            cnt++;
        }
    }
    if (cnt === array.length) {
        array.push(num);
    }
    else {
        i--;
    }
}
console.log(array);