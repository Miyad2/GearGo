$(document).ready(function(){
$('.multiple-items').slick({
  autoplay:false,
  infinite: true,
  speed: 300,
  dots: true,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1

});
$('.s_video').slick({
  autoplay:false,
  infinite: true,
  speed: 300,
  dots: true,
  arrows:false,
});
// 
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    
  ]
});















})




