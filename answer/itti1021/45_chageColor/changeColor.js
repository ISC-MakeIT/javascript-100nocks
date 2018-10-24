$('.a').on('click', function() {
    $(this).attr('style', 'background-color: red;');
});

$('.b').on('click', function() {
    $(this).css('background-color', 'blue');
});

$('.c').on('click', function() {
    $(this).addClass('color');
});