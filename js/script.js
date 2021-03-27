$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header-novigation, .hero__btn').toggleClass('active');
      $('body').toggleClass('lock');
   });
});