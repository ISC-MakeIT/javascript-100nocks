const crypto = "やくこみがんきいばていんるよは";
var str = "";

for (var i = 0; i < crypto.length; i++) {
    if ((i % 3 ) != 2) {
        str += crypto.charAt(i);
    }
}

console.log(str);