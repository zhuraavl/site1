jQuery(document).ready(function ($) {
  'use strict';
  
  
  
  
  
  // header on main 

  if ($(window).width() < 960) {
   $(window).scroll(function () {
    var $this = $(this),
        $head = $('.home #header'),
        $height = $(window).height(),
        $pageheight = $(document).height();
       
    if ($this.scrollTop() > $height - 50 ) {
       $head.addClass('change-color');
       
    } else if ($this.scrollTop() > $pageheight - $height) {
      $head.removeClass('change-color');
      
    } else {
       $head.removeClass('change-color');
    };
});
}
else {
   $(window).scroll(function () {
    var $this = $(this),
        $head = $('.home #header'),
        $height = $(window).height(),
        $pageheight = $(document).height();
       
    if ($this.scrollTop() > $height - 50 && $this.scrollTop() < $pageheight - 1000 ) {
       $head.addClass('change-color');
       
    } else if ($this.scrollTop() > $pageheight - $height) {
      $head.removeClass('change-color');
      
    } else {
       $head.removeClass('change-color');
    };
});
}
  
  
   
  if ($(window).width() < 960) {
  
  }
else {
 $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('footer').offset().top - 50) {
            $("#header").addClass('change-color-footer');
        } else {
            $("#header").removeClass('change-color-footer');
        }
    });
});
  
  }
  
  
  
  
  // location accordeon
  $(function () {
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  $(".accordion-title:first-of-type").addClass("open");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});
  
  
  
  // contact form - state label if hav text
  $('.contact-form input').on('keyup',function(){
    $(this).parent().addClass('toptop');
    var textLength = $(this).val().length;
    if(textLength < 1){
      $(this).parent().removeClass('toptop');
    }
  });
  
  
  // footer form - state sumbit if have text
  $('.footer-signup input').on('keyup',function(){
    $(this).parent().addClass('show-submit');
    var textLength = $(this).val().length;
    if(textLength < 1){
      $(this).parent().removeClass('show-submit');
    }
  });
  
  
  
  
  
  // room page info box height
  $(function () {
  var roomboxheight = $(".rooms-slider img").height();
  $(".rooms-hero").css("min-height", roomboxheight);
  
});
  

  
  // room lightbox modal content
  
  $(".open-modal").click(function () {
    
    $(".modal-box").toggleClass("show");
    $(this).next().clone().appendTo(".modal-container");
    $("body").toggleClass("no-scroll");
    
    $(".lightbox-slider").slick({
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'ease-in-out',
      responsive: [
        {
           breakpoint: 600,
           settings: "unslick"
        }
     ]
    });
  });
  
  
  $(".close-modal-lightbox").click(function () {
    $(".modal-container").empty();
    $(".modal-box").removeClass("show");
    $("body").removeClass("no-scroll");
    $(".lightbox-slider").slick("unslick");
  });
  
  
 
  
  
  
  
  
  
  // open off menu
  
  $(".open-menu").click(function () {
    $('body').addClass('off-menu-active');
  });
  
  $(".close-menu").click(function () {
    $('body').removeClass('off-menu-active');
  });
  
  
  // amenities
  
  $(".amenities-button").click(function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  });
  
  
  
  
  
  
//  link hover - other elements opacity
  
  $(".menu-links a").hover(function () {
    $(".menu-links a").css('opacity','0.5');
    $(this).css('opacity','1');
  });
  $(".menu-links a").mouseout(function () {
    $(".menu-links a").css('opacity','1');
   
  });
  
  $(".social a").hover(function () {
    $(".social a").css('opacity','0.5');
    $(this).css('opacity','1');
  });
  $(".social a").mouseout(function () {
    $(".social a").css('opacity','1');
   
  });
  
  
  
  // sliders
  
   $('.home-rooms-slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    infinite: true,
    pauseOnFocus: true,
    loop: true,
    cssEase: 'ease-in-out',
    centerPadding: '15vw',
    variableWidth: true,
    slidesToScroll: 1,
    arrows: true
     
  });
  
  
  
  
  $('.slider-quote').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    asNavFor: '.slider-quote-footer',
    arrows: false
  });
  
  
  
  
  $('.slider-quote-footer').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    fade: true,
    asNavFor: '.slider-quote',
    arrows: true
  });
  
  $('.inst-slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '5vw',
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });
  
   $('.features-slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  
$('.rooms-slider').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    loop: true,
    infinite: true,
    variableWidth: true,
    arrows: false,
    cssEase: 'linear',
    slidesToShow: 1,
    pauseOnHover: false,
    pauseOnFocus: false
    
     
  });



$('.rooms-slider').mouseover(function() {
        $(this).slick('play');
    });
    $('.rooms-hero').hover(function() {
        
        $('.rooms-slider').slickPause();
    });
  
  
  
  


  


  




  
  
});




(function () {
  var params = {"propertyId":"754508"};
  var paramsArr = [];
  var pl2 = document.createElement("script");
  for(key in params) { paramsArr.push(key + "=" +
  encodeURIComponent(params[key])) };
  pl2.type = "text/javascript";
  pl2.async = true;
  pl2.src = "https://www.ada-tray.com/adawidget/?" +
  btoa(paramsArr.join("&"));
  (document.getElementsByTagName("head")[0] ||
  document.getElementsByTagName("body")[0]).appendChild(pl2);
  })();