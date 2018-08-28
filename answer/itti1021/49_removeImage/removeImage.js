$('button').on('click', function() {
    let image = $('img').length;
    if (image < 3) {
        $('div').append('<img src="./../img/wakaru.jpg">');
    }
});

$('div').on('click', 'img', function() {
    $(this).remove();
});