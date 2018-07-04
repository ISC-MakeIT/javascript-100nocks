const ary = ["晴れ", "雨", "曇り", "槍"];

function wather() {
    let wather = ary[Math.floor(Math.random() * ary.length)];
    document.getElementById("result").innerHTML += `今日の天気は ${wather} です <br>`;
}