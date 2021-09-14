const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["DEVELOPER", "FRONT-END", "WOMAN", "MANU"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1200; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});




//modal

$(modal).css({
      "display": "none",
      "vertical-align": "middle",
      "position": "relative",
      "z-index": "2",
      "max-width": "1000px",
      "box-sizing": "border-box",
      "width": "90%",
      "background": "#fff",
      "padding": "15px 30px",
      "-webkit-border-radius": "8px",
      "-moz-border-radius": "8px",
      "-o-border-radius": "8px",
      "-ms-border-radius": "8px",
      "border-radius": "8px",
      "-webkit-box-shadow": '0 0 10px #000',
      "-moz-box-shadow": '0 0 10px #000',
      "-ms-box-shadow": "0 0 10px #000",
      "box-shadow": "0 0 10px #000",
      "text-align": "left"
});


//animations css

//Debounce do Lodash
debounce = function(func, wait, immediate) {
   let timeout;
   return function() {
      let context = this, args = arguments;
      let later = function() {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      let calNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if(calNow) func.apply(context, args);
   };
};

(function(){
   
   let $target = $('.animating'),
       animationClass = 'slide-in-vertical',
       offset = $(window).height() *3/4;
   
       function animeScroll() {
          let documentTop = $(document).scrollTop();
   
          $target.each(function() {
             let topHeight = $(this).offset().top;
   
             if(documentTop > topHeight - offset) {
                $(this).addClass(animationClass);
             } else {
                $(this).removeClass(animationClass);
             }
          });
   };
   
   animeScroll();
   
   $(document).scroll(debounce (function () {
      animeScroll();
   }, 200));
}());



(function(){
   
   let $target = $('.animating-2'),
       animationClass = 'scale-in-center',
       offset = $(window).height() * 3/4;
   
       function animeScroll() {
          let documentTop = $(document).scrollTop();
   
          $target.each(function() {
             let topHeight = $(this).offset().top;
   
             if(documentTop > topHeight - offset) {
                $(this).addClass(animationClass);
             } else {
                $(this).removeClass(animationClass);
             }
          });
   };
   
   animeScroll();
   
   $(document).scroll(debounce (function () {
      animeScroll();
   }, 200));
}());

(function(){
   
   let $target = $('.animating-3'),
       animationClass = 'bounce-in-fwd',
       offset = $(window).height() * 3/4;
   
       function animeScroll() {
          let documentTop = $(document).scrollTop();
   
          $target.each(function() {
             let topHeight = $(this).offset().top;
   
             if(documentTop > topHeight - offset) {
                $(this).addClass(animationClass);
             } else {
                $(this).removeClass(animationClass);
             }
          });
   };
   
   animeScroll();
   
   $(document).scroll(debounce (function () {
      animeScroll();
   }, 200));
}());
