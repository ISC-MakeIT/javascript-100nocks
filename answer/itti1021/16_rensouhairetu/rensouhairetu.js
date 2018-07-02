var ary = {"color" : "red", "size" : "100"};
ary["count"] = "5";

function output() {
    var message = "";
    for (var key in ary) {
        var value = ary[key];
        message += `keyは: ${key} valueは: ${value} <br>`;
        // message += `keyは: ${key} valueは: ${value} \n`;
    }
    document.getElementById("result").innerHTML = message;
}