let ary = [];
let num = 1;
let obj = {};

function judging() {
    document.getElementById("ary").innerHTML = Array.isArray(ary);
    document.getElementById("num").innerHTML = Array.isArray(num);
    document.getElementById("obj").innerHTML = Array.isArray(obj);
}