var ary1 = ["'a'", "'b'"];
var ary2 = ["'c'", "'d'"];

var array = ary1.concat(ary2);

function output() {
    document.getElementById("name").innerHTML = "["
    document.getElementById("name").innerHTML += " " + array[0] + " ";
    for (var i = 1; i < 4; i++) {
        document.getElementById("name").innerHTML += "," + " " + array[i] + " ";
    };
    document.getElementById("name").innerHTML += "]";
}