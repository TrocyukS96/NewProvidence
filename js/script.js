$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header-novigation, .btn').toggleClass('active');
      $('body').toggleClass('lock');
   });
   AOS.init();
   $('.interface-slider').slick({
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
            breakpoint:870,
            settings:{
               slidesToShow:1
            }
         }
      ]
	});
   $('.feedback__slider').slick({
		arrows:true,
		dots:false,
      adaptiveHeight:true,
		slidesToShow:1,
      slidesToScroll:1,
		speed:300,
      InitialSlide:2,
      TouchTreshhold:5,
      easing: 'ease-in',
      // responsive:[
      //    {
      //       breakpoint:600,
      //       settings:{
      //          slidesToShow:1
      //       }
      //    }
      // ]
	});
});


document.addEventListener("DOMContentLoaded", function(){
   let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
   console.log(scrollbar);
   document.querySelector('[href="#openModal"]').addEventListener('click', function(){
     document.body.style.overflow = 'hidden';
     document.querySelector('#openModal').style.marginLeft = scrollbar;
   });
   document.querySelector('[href="#close"]').addEventListener('click', function(){
     document.body.style.overflow = 'visible';
     document.querySelector('#openModal').style.marginLeft = '0px';
   });
 });