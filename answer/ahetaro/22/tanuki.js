var original =
    "ふわたたしが両手をひろげても、お空はちっとも飛べないが、飛べる小鳥はわたしのように、地面を早く走れない。わたたしがからだをゆすっても、ふきれいな音はでないけど、あの鳴る鈴はわたたしのように、たたくさんなうたたは知らないよ。鈴と、小鳥と、みんなふちがって、みんないい。"
var batch = original.replace(/たた/g, "た").replace(/ふ/g, "");
console.log(batch);