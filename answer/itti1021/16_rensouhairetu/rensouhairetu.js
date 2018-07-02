var ary = {"color" : "red", "size" : "100"};
ary["count"] = "5";

function output() {
    for (var key in ary) {
        var value = ary[key];
        document.getElementById("result").innerHTML += `keyは: ${key} valueは: ${value} <br>`;
    }
}