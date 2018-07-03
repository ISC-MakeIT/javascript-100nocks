const crypto = "ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面をはやくは走れない。わたたしがからだをゆすっても、ふきれいな音は出ないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。鈴と、小鳥と、それからわたたし、みんなふちがって、みんないい。";
var str = "";
var flg = 0;

for (var i = 0; i < crypto.length; i++) {
    if (crypto.charAt(i) !== "ふ") {
        if (crypto.charAt(i) === "た") {
            if (flg == 0) {
                str += crypto.charAt(i);
                flg = 1;
            }
        }
        else {
            str += crypto.charAt(i);
            flg = 0;
        }
    }
}

console.log(str);