let ary = {"color" : "red", "size" : "100"};
ary["count"] = "5";

function output() {
    let message = "";
    for (let key in ary) {
        let value = ary[key];
        message += `keyは: ${key} valueは: ${value} <br>`;
        // message += `keyは: ${key} valueは: ${value} \n`;
    }
    document.getElementById("result").innerHTML = message;
}