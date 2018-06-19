$('.fade').on('click', function () {
  if ($('.fade').hasClass('fade_image')) {
    $('.fade').removeClass('fade_image');
    $('img').remove();
  } else {
    $('.fade').addClass('fade_image');
    $('.fade').append('<img src=\"../img/somari.jpg\" alt=\"somari\">');
  }
});