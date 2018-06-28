var cnt = 0;

function countUp() {
    cnt++;
    document.getElementById("number").innerHTML = cnt;
    if ((cnt % 3) == 0) {
        document.getElementById("number").style.color = "red";
        document.getElementById("number").style.fontSize = "128px";
    }
    else {
        document.getElementById("number").style.color = "";
        document.getElementById("number").style.fontSize = "";
    }
}