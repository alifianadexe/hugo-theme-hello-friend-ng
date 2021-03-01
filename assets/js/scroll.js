// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header").outerHeight();
let btn = $("#but-to-up");

$(window).scroll(function (event) {
    didScroll = true;
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 100);

  function hasScrolled() {
    let st = $(this).scrollTop();
  
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
  
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-down").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down");
      }
    }
  
    lastScrollTop = st;
  }

let fixmeTop = $('.ads-side').offset().top;
let fixmeBottom = $('.ads-below').offset().top;       
fixmeTop += 300;

$(window).scroll(function() {                  
  if(!isMobile()){
    var currentScroll = $(window).scrollTop(); 
        if (currentScroll >= fixmeTop && currentScroll <= fixmeBottom) {           
        $('.ads-side').css({                   
            position: 'fixed',
            top: '75px'
        });
    } else {                                   
        $('.ads-side').css({                
            position: 'relative',
            marginLeft:'20px'
        });
    }
  }
});