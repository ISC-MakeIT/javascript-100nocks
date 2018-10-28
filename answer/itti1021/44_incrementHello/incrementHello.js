let cnt = 0;
$('button').on('click', function() {
    cnt++;
    $('div').append(`Hello ${cnt}回 <br>`);
});