//= require vendor/jquery.min
//= require vendor/bootstrap.min

$(document).ready(function() {
  var currentFooter = $('#footer-socialmedia');
  $('#footer-socialmedia').show();

  $('#about-footer-nav').click(function() {
    currentFooter.hide(0)
    currentFooter = $('#footer-about');
    $('#footer-about').show();
  });

  $('#partners-footer-nav').click(function() {
    currentFooter.hide(0)
    currentFooter = $('#footer-partners');
    $('#footer-partners').show();
  });

  $('#social-footer-nav').click(function() {
    currentFooter.hide(0)
    currentFooter = $('#footer-socialmedia');
    $('#footer-socialmedia').show();
  });

  $('#find-footer-nav').click(function() {
    currentFooter.hide(0)
    currentFooter = $('#footer-findus');
    $('#footer-findus').show();
  });

  $('.socialmedia .image').css({
    'background-repeat': 'no-repeat',
    'background-position': 'right'
  });
});
