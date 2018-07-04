function sum() {
    let n = document.getElementById("n").value;
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum);
}