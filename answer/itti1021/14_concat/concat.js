var ary1 = ["a", "b"];
var ary2 = ["c", "d"];

var array = ary1.concat(ary2);

function output() {
    var str = `[ \'${array[0]}\'`;
    for (var i = 1; i < 4; i++) {
        str += ` , \'${array[i]}\'`
    }
    str += ` ]`
    document.getElementById("name").innerHTML = str;
}