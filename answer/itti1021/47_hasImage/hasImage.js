$('button').on('click', function() {
    if ($('img').length === 0){
        $('div').append('<img src="./../img/wakaru.jpg">');
    }
});