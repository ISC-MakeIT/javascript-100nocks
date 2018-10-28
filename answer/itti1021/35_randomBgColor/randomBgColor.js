function change() {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += Math.floor(Math.random() * 15).toString(16);
        // randomColor += (16*Math.random() | 0).toString(16);
    }
    document.bgColor = randomColor;
}