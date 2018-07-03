var raw = "114514";
var str = "";

for (var i = 0; i < raw.length; i++) {
    str += raw.charAt(i);
    str += Math.floor(Math.random() * 10);
    str += Math.floor(Math.random() * 10);
}

console.log(str);