const word = "114514";
var ransuu = "";
for (var i = 0; i < word.length; i++) {
    var num = Math.floor(Math.random() * 10);
    var numm = Math.floor(Math.random() * 10);
    ransuu += word[i] + num + numm;
}
console.log(ransuu);