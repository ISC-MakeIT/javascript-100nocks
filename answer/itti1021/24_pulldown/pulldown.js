function pulldown() {
    let select = document.getElementById("hoge");
    for (let i = 0; i <= 200; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        select.appendChild(option);
    }
}