//乱数を昇順にソートしたものを配列ARRAYに格納」
const ARRAY = [];
for (let i = 0; i < 25;) {
    let result = Math.floor(Math.random() * (75 - 1) + 1);
    let search = ARRAY.indexOf(result, 0);
    if (search == -1) {
        ARRAY.push(result);
        i++
    }
}

ARRAY.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})
console.log(ARRAY);

//tableに乱数ARRAYを格納する。
let acquisition = document.getElementById("tbl");
let rowlength = acquisition.rows.length;
let cellrength = acquisition.rows[0].cells.length //rows番号指定なしでcellの長さを知る方法がわからなかったです
let arraylength = ARRAY.length;
for (let indexnum = 0; indexnum < arraylength;) {
    for (let row = 0; row < rowlength; row++) {
        for (let cell = 0; cell < cellrength; cell++) {
            let place = acquisition.rows[row].cells[cell];
            place.innerHTML = ARRAY[indexnum];
            indexnum++
            place.addEventListener("click", function () {
                alert(place.innerHTML + "です"); 
            })
        }
    }
};