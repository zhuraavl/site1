jQuery(document).ready(function ($) {
  'use strict';
  
  
  
  
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
   
  
  
  
  $(function () {
  // 最初のコンテンツ以外は非表示
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく
  $(".accordion-title:first-of-type").addClass("open");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});
  
  
  
  
  
  
  
  
  
  
  $(function() {
    var height = $(window).height();
  $('.bottom').click(function() {
  	$('html, body').animate({scrollTop:height}, '600');
    
		return false;
  });
  
}); 
  
  
  
  //$("#phone").mask("(999) 999-99-99");
  
  
  
  //$('[data-toggle="datepicker"]').datepicker({
  //  language: 'ru-RU',
  //  format: 'dd-mm-yyyy'
  //});

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
//    $($.attr(this, 'href')).addClass('move');
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
});
  
  
//  $('.slider-works').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    dots: false,
//    pauseOnHover: true,
//    pauseOnFocus: true,
//    arrows: true
//    
//  });
//  
  
  
  // parallax
//  function parallax() {
//    var scrolled = $(window).scrollTop();
//    $('.parallax-box .parallax-item:even').css('transform', 'translate3d(0, ' + scrolled * 0.1 + 'px, 0)');
//    $('.parallax-box .parallax-item:odd').css('transform', 'translate3d(0, -' + scrolled * 0.1 + 'px, 0)');
//  };
//  $(window).scroll(function (e) {
//    parallax();
//  });
  
  // modal content
  $(".open-modal").click(function () {
    $(".modal-box").empty();
    $(".full-modal").toggleClass("show");
    $(this).next().clone().appendTo(".modal-box");
    $("body").toggleClass("no-scroll");
  });
  $(".close-modal").click(function () {
    $(".full-modal").removeClass("show");
    $("body").removeClass("no-scroll");
  });
  $(".over-lay .closeee").click(function () {
    $(this).parent().hide();
  }); 
  
  
  
  
  
  
  $(".open-menu").click(function () {
    $('body').addClass('off-menu-active');
  });
  
  $(".close-menu").click(function () {
    $('body').removeClass('off-menu-active');
  });
  
  
  
  
  $(".amenities-button").click(function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  });
  
  
  // show / hide header after scroll
  //  $(function(){
  //    var lastScrollTop = 0, delta = 5;
  //    $(window).scroll(function(event){
  //       var st = $(this).scrollTop();
  //       
  //       if(Math.abs(lastScrollTop - st) <= delta)
  //          return;
  //       
  //       if (st > lastScrollTop){
  //         // Scroll down
  //         $('header').addClass('nav-hide');
  //       } else {
  //         // Scroll up
  //         $('header').removeClass('nav-hide');
  //       }
  //       lastScrollTop = st;
  //    });
  //  });

  
  
  $(".box").hover(function () {
    $(this).toggleClass('active');
    $('.features').toggleClass('hover');
  });
  
  
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
         $(this).style('background','red')
    });
    $('.rooms-hero').hover(function() {
        
        $('.rooms-slider').slickPause();
    });






  

$('.contact-form input').on('keyup',function(){
    $(this).parent().addClass('toptop');
    var textLength = $(this).val().length;
    if(textLength < 1){
      $(this).parent().removeClass('toptop');
      //Do ur stuff;
    }
});
























// $('.rooms-slider').hover(function()
// {
//   var st = $('.slick-track', $('.slick'));
//   var st0 = st.get(0);

//   st.css({
//           transition: '',
//           transform: window.getComputedStyle(st0).transform
//       });
//   slick.slickPause();

//   var slickO = slick.getSlick();
//   slickO.animating = false;

//   slick.slickSetOption( 'speed', 100, true );
//  }, 
//  function()
//  {
//   slick.slickSetOption( 'speed', 5000, true );
//   slick.slickPlay();
//  });

  
  
  
  
  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find("span").addClass("d-block");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
  
  
  
  
  
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
  
  
  
  
  
  
  
  
  
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