function change() {
    const num = parseInt(document.to_binary_form.elements[0].value);
    document.getElementById("result").innerHTML = num.toString(16);
}