new hoverEffect({
    parent: document.querySelector('.displacement-effect'), // class to add to div of img
    image1: './src/profile-img/portrait.jpg', // ex. './filename'
    image2: './src/profile-img/portrait.jpg',
    displacementImage: './src/displacement-imgs/smoke.png',
    imagesRatio: '1', // as float | ex 3/4 = .75,
    intensity: .75
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top + 75;
    var elementVisible = 500;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal();

$("#typed").typed({
  strings: ["Developer", "Designer", "Engineer", "Entrepreneur", "Thinker"],
  typeSpeed: 95,
  startDelay: 3500,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  cursorChar: "|",
  contentType: 'html'
});


// Mouse Smooth Scroll
$(document).ready(function(){
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(200, 800);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

jQuery.scrollSpeed = function(step, speed, easing) {
    
    var $document = $(document),
        $window = $(window),
        $body = $('html, body'),
        option = easing || 'default',
        root = 0,
        scroll = false,
        scrollY,
        scrollX,
        view;
        
    if (window.navigator.msPointerEnabled)
    
        return false;
        
    $window.on('mousewheel DOMMouseScroll', function(e) {
        
        var deltaY = e.originalEvent.wheelDeltaY,
            detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;
        
        if (scrollY) {
            
            view = $window.height();
                
            if (deltaY < 0 || detail > 0)
        
                root = (root + view) >= $document.height() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
        
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
        
                scrollTop: root
            
            }, speed, option, function() {
        
                scroll = false;
            
            });
        }
        
        if (scrollX) {
            
            view = $window.width();
                
            if (deltaY < 0 || detail > 0)
        
                root = (root + view) >= $document.width() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
        
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
        
                scrollLeft: root
            
            }, speed, option, function() {
        
                scroll = false;
            
            });
        }
        
        return false;
        
    }).on('scroll', function() {
        
        if (scrollY && !scroll) root = $window.scrollTop();
        if (scrollX && !scroll) root = $window.scrollLeft();
        
    }).on('resize', function() {
        
        if (scrollY && !scroll) view = $window.height();
        if (scrollX && !scroll) view = $window.width();
        
    });       
};

jQuery.easing.default = function (x,t,b,c,d) {

    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

})(jQuery);

// Carousel Animation Pause onHover
document.addEventListener("DOMContentLoaded", (event) => {
  const groupContainer1 = document.querySelectorAll(".group1-hover");
  const groupContainer2 = document.querySelectorAll(".group2-hover");
  const commentsGroup1 = document.querySelector(".comments_group1");
  const commentsGroup2 = document.querySelector(".comments_group2");
  const commentsGroup3 = document.querySelector(".comments_group3");
  const commentsGroup4 = document.querySelector(".comments_group4");

  groupContainer1.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      commentsGroup1.classList.add("pause-on-hover");
      commentsGroup2.classList.add("pause-on-hover");
    });
    el.addEventListener("mouseout", (e) => {
      commentsGroup1.classList.remove("pause-on-hover");
      commentsGroup2.classList.remove("pause-on-hover");
    });
  });

  groupContainer2.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      commentsGroup3.classList.add("pause-on-hover");
      commentsGroup4.classList.add("pause-on-hover");
    });
    el.addEventListener("mouseout", (e) => {
      commentsGroup3.classList.remove("pause-on-hover");
      commentsGroup4.classList.remove("pause-on-hover");
    });
  });
});


// timeline
$(window).on('scroll', function(){
  function isScrollIntoView(elem, index) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(window).height()*.5185;

    // Progress Bar
    if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
      $(elem).addClass('active');
    }

    if(!(elemBottom <= docViewBottom)) {
      $(elem).removeClass('active');
    }

    var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
    var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window). height()*.5185;

    $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
  }

  var timeline = $('#vertical-scrollable-timeline li');
  Array.from(timeline).forEach(isScrollIntoView);
});