$(document).ready(function() {
  $('#main').css('height', window.innerHeight);
  $('#about').css('height', window.innerHeight);
  $('#team').css('height', window.innerHeight);
  $('#work').css('height', window.innerHeight);
  $('#contact').css('height', window.innerHeight);
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  $('.scrollspy').scrollSpy();
  $(window).resize(function() {
     $('#main').css('height', window.innerHeight);
     $('#about').css('height', window.innerHeight);
     $('#team').css('height', window.innerHeight);
     $('#work').css('height', window.innerHeight);
     $('#contact ').css('height', window.innerHeight);
  })
})
