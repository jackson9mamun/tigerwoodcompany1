$(".banner-slider") .slick({
    arrows:false,
    dots:true,
})
$(".testi-slider") .slick({
    arrows:false,
    dots:true,
   
})
$(".slider-part") .slick({
    prevArrow:'<i class="fas fa-chevron-left next"></i>',
    nextArrow:'<i class="fas fa-chevron-right last "></i>',
   slidesToShow: 5,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   
})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.venobox').venobox();


