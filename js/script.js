$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header-novigation, .btn').toggleClass('active');
      $('body').toggleClass('lock');
   });
   AOS.init();
   
});