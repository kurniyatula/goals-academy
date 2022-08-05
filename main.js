// Smooth Scrolling 
var headerHeight = $('nav').outerHeight(); 
  $('#navbar li a').click(function(e) {
  	var targetHref   = $(this).attr('href'); 
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight 
	}, 1000);
    e.preventDefault();
});

// Responsive sidebar
$(".menu-icon").click(function() {
    $(".navbar-menu").css("left", "0");
    $(".navbar-logo").css("display", "none");
});

$(".sidebar-close-icon").click(function() {
    $(".navbar-menu").css("left", "-100%");
    $(".navbar-logo").show();
});

// Dropdown Menu Navbar
$(".produk-arrow").click(function() {
    $(".navbar-menu").toggleClass("show1");
});
$(".media-arrow").click(function() {
    $(".navbar-menu").toggleClass("show2");
});

// Close Notification Panel
$(".panel-icon").click(function() {
    $(".notification-panel").hide();
});

// Promo
var promoSwiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
    fade: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        950: {
            slidesPerView: 2,
        }
    }
});

// Modal 
$("#join-now").click(function() {
    $(".modal-container").css("display", "flex");
});

$(".close-icon").click(function() {
    $(".modal-container").hide();
});

$('body').click(function(event) {
    if($(event.target).is('.modal-container')) {
        $(".modal-container").hide();
    }
});

// Magnific Popup
$('#btn-play').magnificPopup({
    type:'inline',
    midClick: true,
})

// FAQ
$(".open-answer-icon").each(function(index) {
    $(this).click (function(){
        $(this).toggleClass("close-answer-icon");
        if ($(this).hasClass("close-answer-icon")) {
            $(".answer-box").eq(index).css("display","flex");            
        } else {
            $(".answer-box").hide();
            $(this).removeClass("close-answer-icon")
        }
    });
});

// Testimoni
var testimoniSwiper = new Swiper("#slide-top", {
    slidesPerView: 3,
    spaceBetween: 5,
    fade: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        }
    },
});

// $("#swiper-top").mouseenter(function () {
//     testimoniSwiper.autoplay.start();
// });
// $("#swiper-top").mouseleave(function () {
//     testimoniSwiper.autoplay.stop();
// });

var testimoniSwiper2 = new Swiper("#slide-bottom", {
    slidesPerView: 3,
    spaceBetween: 5,
    fade: true,
    loop: true,
    autoplay: {
        delay: 3600,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        }
    },
});

// $("#swiper-bottom").mouseenter(function () {
//     testimoniSwiper2.autoplay.start();
// });
// $("#swiper-bottom").mouseleave(function () {
//     testimoniSwiper2.autoplay.stop();
// });


// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     var t = $('.testimoni-header .image-wrapper').offset().top;
//     if (y >= t) {
//         // console.log("udah sampe nih");
//         testimoniSwiper.autoplay.start();
//         testimoniSwiper2.autoplay.start();
//     } else {
//         testimoniSwiper2.autoplay.stop();
//         testimoniSwiper.autoplay.stop();
//     }
// });

