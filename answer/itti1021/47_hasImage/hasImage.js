$('button').on('click', function() {
    if($('img').length === 0){
        $('div').append('<img>');
        $('img').attr('src', './../img/wakaru.jpg');
    }
});