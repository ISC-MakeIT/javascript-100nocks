// let cnt = 0;
// $('button').on('click', function() {
//     if(cnt < 3) {
//         $('div').append('<img>');
//         $('img').attr('src', './../img/wakaru.jpg');
//         cnt++;
//     }
// });

$('button').on('click', function() {
    let image = $('img').length;
    if (image < 3) {
        $('div').append('<img src="./../img/wakaru.jpg">');
    }
});