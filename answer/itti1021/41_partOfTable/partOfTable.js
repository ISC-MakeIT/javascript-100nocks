const array = [];
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

let tableData = document.getElementById("table");
let cnt = 0;
for (let i = 0, cellLen = tableData.rows.length; i < cellLen; i++) {
    // i = 列の添え字
    for (let j = 0; j < cellLen; j++) {
        // j = 行の添え字
        let insert = array[cnt];
        let line = tableData.rows[j];
        let column = line.cells[i];
        column.innerHTML = insert;
        cnt++;
    }
}