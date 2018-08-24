let array = [];
while (array.length < 25) {
    let num = Math.floor(Math.random() * 75) + 1;
    let judgement = array.includes(num);
    if (judgement) {
        continue;
    }
    array.push(num);
}
array.sort(function(a , b) {
    return a - b;
});
console.log(array);

function judgementNum() {
    let inputNum = parseInt(document.deleteNum.elements[0].value);
    result = array.filter(function(item) {
        return item !== inputNum;
    });
    if (array.length === result.length) {
        console.log("error: Can't deleted");
    } else {
        console.log(result);
    }
    array = result;
}