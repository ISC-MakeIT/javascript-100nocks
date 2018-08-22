const word = "114514";
var randomnum = "";
for (var i = 0; i < word.length; i++) {
    var num = Math.floor(Math.random() * 10);
    var number = Math.floor(Math.random() * 10);
    randomnum += word[i] + num + number;
}
console.log(randomnum);