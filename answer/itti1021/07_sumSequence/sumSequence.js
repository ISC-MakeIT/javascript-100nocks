function sum() {
    var n = document.getElementById("n").value;
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}