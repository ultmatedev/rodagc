$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });
    
   
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#headers-4").addClass("shrink");
        } else {
            $("#headers-4").removeClass("shrink");
        }
    });


     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a, .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
    
   var mixerContainer = $('#portfolio #change'),
        // portfolio (MIXITUP)
        mixer = mixitup(mixerContainer, {
            selectors: {
                control: '#portfolio ul > li'
            }
        }),
        
        scrollButton = $('#scroll-top');
    
   
    $('.my-portfolio ul li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
     
    
    // Caching The Scroll Top Element
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
	
	$('.element').typed({
        strings: [ " Creative Agency",  "  The Best One Page", "OneBack Creative page"],
        loop: true,
        showCursor: true,
        startDelay: 2000,
        backDelay: 2500,
		typeSpeed: 60
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
    
    
    // slider of clients section
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
  
    
    // slider of clients section
    $('.clients .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
	
	// slider of twitter section
    $('.twitter .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
    
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
	
    
$(".regular").slick({
  prevArrow: '.controllers .prev',
  nextArrow: '.controllers .next',
  dots: false,
  infinite: true,
  speed: 300, 
  autoplay: true,
  autoplaySpeed: 3000,         
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
	
	
	
	// text animated
	
	
	$('.tlt').textillate({
        loop: true,
        // out animation settings.
        in: {
            // set the delay factor applied to each consecutive character         
            delayScale: 0.8,

            // set the delay between each character
            delay: 70,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () {}
        },
        // out animation settings.
        out: {
            delayScale: 0.2,
            delay: 5,
            sync: false,
            shuffle: false,
            reverse: true,
            callback: function () {}
        },

       // callback that executes once textillate has finished
        callback: function () {} ,

    });
	
	
	
	
	//  section skills
	
	var wind = $(window);

    var main_height = $(".main-height").outerHeight();
 
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	// contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	

    
    
});