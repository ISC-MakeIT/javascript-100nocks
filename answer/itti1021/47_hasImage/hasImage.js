$('button').on('click', function() {
if(!($('img').length)){
        $('div').append('<img>');
        $('img').attr('src', './../img/wakaru.jpg');
    }
});