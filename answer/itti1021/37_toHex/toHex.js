function change() {
    const num = parseInt(document.form1.elements[0].value);
    document.getElementById("box").innerHTML = num.toString(16);
}