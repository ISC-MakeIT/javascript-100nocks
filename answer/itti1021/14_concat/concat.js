let ary1 = ["a", "b"];
let ary2 = ["c", "d"];
let array = ary1.concat(ary2);

function output() {
    var str = `[ '${array[0]}'`;
    for (var i = 1; i < 4; i++) {
        str += ` , '${array[i]}'`;
    }
    str += ` ]`;
    document.getElementById("name").innerHTML = str;
}