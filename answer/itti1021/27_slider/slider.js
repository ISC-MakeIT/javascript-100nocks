let elem = document.getElementById("slider");
let target = document.getElementById("speed");

elem.addEventListener("input", slideInput);

function slideInput() {
    target.innerHTML = this.value;
    document.getElementById("move").scrollDelay = this.value;
}