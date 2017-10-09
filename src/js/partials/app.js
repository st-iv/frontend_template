$('#slider').slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // appendDots: $('#slider .dots'),
  adaptiveHeight: true,

  // customPaging : function(slider, i) {
  // var title = $(slider.$slides[i]).data('title');
  // var thumb = $(slider.$slides[i]).data('thumb');
            
  // return '<div class="dot-trumb"><a class="pager__item"><img class="dot__img" src="'+thumb+'"><span class="dot__desc">'
  // + title +'</span></a></div>';
  
  // },

  responsive: [
    {
      breakpoint: 992,
      settings: {
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1,
        customPaging : function(slider, i) {
          var title = $(slider.$slides[i]).data('title');
          var thumb = $(slider.$slides[i]).data('thumb');
            
  return '<div class="dot-trumb"><a class="pager__item"><img class="dot__img" src="'+thumb+'"><span class="dot__desc">'
  + title +'</span></a></div>';
  
}, 
      }
    },
  ]
});