let cnt = 0;
$('button').on('click', function() {
    if(cnt < 3) {
        $('div').append('<img>');
        $('img').attr('src', './../img/wakaru.jpg').attr('class', 'image');
        cnt++;
    }
});

$('div').on('click', 'img', function() {
    $(this).remove();
    cnt--;
});