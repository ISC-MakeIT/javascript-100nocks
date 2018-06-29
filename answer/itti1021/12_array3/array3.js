var ary = [];
var num = 1;
var obj = {};

function judging() {
    document.getElementById("ary").innerHTML = Array.isArray(ary);
    document.getElementById("num").innerHTML = Array.isArray(num);
    document.getElementById("obj").innerHTML = Array.isArray(obj);
}