const word = "だいらんがんばびさふびーがきがふみしろびんまみだ";
var dec = "";
for (var i = 0; i < word.length; i++) {
    if (i % 3 === 2) {
        dec += word[i];
    }
}
console.log(dec);