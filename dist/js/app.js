$(document).ready(function() {
  const contentBlocks = ['#main', '#about', '#team', '#work', '#contact']
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
  contentBlocks.forEach(function (c) {
    $(c).css('height', window.innerHeight);
  })
})
