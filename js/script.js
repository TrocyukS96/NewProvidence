$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header-novigation, .btn').toggleClass('active');
      $('body').toggleClass('lock');
   });
   AOS.init();
   $('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
      slidesToScroll:1,
		speed:300,
      InitialSlide:3,
      TouchTreshhold:5,
      easing: 'ease-in',
      responsive:[
         {
            breakpoint:600,
            settings:{
               slidesToShow:1
            }
         }
      ]
	});
});