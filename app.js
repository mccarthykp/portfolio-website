new hoverEffect({
    parent: document.querySelector('.displacement-effect'), // class to add to div of img
    image1: 'portrait.jpg', // ex. './filename'
    image2: 'portrait.jpg',
    displacementImage: 'smoke.png',
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

// Disappear & Reveal for Scroll Arrow
function reverse_reveal() {
  var disappears = document.querySelectorAll('.reverse_reveal');

  for (var i = 0; i < disappears.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = disappears[i].getBoundingClientRect().top + 75;
    var elementVisible = 325;
    if (elementTop < windowHeight - elementVisible) {
      disappears[i].classList.add('active');
    } else {
      disappears[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reverse_reveal);
reverse_reveal();

// Typing Header Section
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

// Double-tap to zoom on mobile
var doubleTouchStartTimestamp = 0;
document.addEventListener("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
