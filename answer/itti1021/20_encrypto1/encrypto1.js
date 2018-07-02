var raw = "114514";
var str = "";
const ary = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (var i = 0; i < raw.length; i++) {
    str += `${raw.charAt(i)}`;
    str += `${ary[Math.floor(Math.random() * ary.length)]}`;
    str += `${ary[Math.floor(Math.random() * ary.length)]}`;
}

// raw = str;
// console.log(raw);

console.log(str);