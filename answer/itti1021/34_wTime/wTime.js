function time() {
    let now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleString();
}
setInterval("time()",1000);