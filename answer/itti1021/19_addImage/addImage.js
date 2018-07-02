function addImage() {
    var div = document.createElement("div");
    div.className = "image";

    var img = document.createElement("img");
    img.src = "icon_1r_192.png";
    img.alt = "ボール";

    div.appendChild(img);
    document.getElementById("div").appendChild(div);
}