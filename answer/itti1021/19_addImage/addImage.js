function addImage() {
    let div = document.createElement("div");
    div.className = "image";

    let img = document.createElement("img");
    img.src = "icon_1r_192.png";
    img.alt = "ボール";

    div.appendChild(img);
    document.getElementById("div").appendChild(div);
}