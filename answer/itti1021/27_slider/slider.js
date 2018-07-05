let elem = document.getElementById("slider");

elem.addEventListener("input", slideInput);

function slideInput() {
    let target = document.getElementById("speed");
    target.innerHTML = this.value;
    document.getElementById("move").scrollDelay = this.value;
}