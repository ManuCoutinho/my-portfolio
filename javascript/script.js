//animating js
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


//animations css

//Debounce do Lodash
$(document).ready(function () {
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
   
   let $target = $('.animating-4'),
       animationClass = 'scale-in-center-4',
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
   
   let $target = $('.animating-5'),
       animationClass = 'scale-in-center-5',
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
   
   let $target = $('.animating-6'),
       animationClass = 'scale-in-center-6',
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


//Progress Bar
const startColor = "#F21D56";
const finalColor = "#F29F05";
const textColor = "#F29F05";

let conteinerA = document.getElementById("circle-1");
let circle1 = new ProgressBar.Circle(conteinerA, {
   color: textColor,
   strokeWidth: 8,
   duration: 1400,
   from: { color: startColor},
   to: { color: finalColor },

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *98);
      circle.setText(value);
   }
});

let conteinerB = document.getElementById("circle-2");
let circle2 = new ProgressBar.Circle(conteinerB, {
   color: textColor,
   strokeWidth: 8,
   duration: 1800,
   from: { color: startColor},
   to: { color: finalColor},

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *70);
      circle.setText(value);
   }
});

let conteinerC = document.getElementById("circle-3");
let circle3 = new ProgressBar.Circle(conteinerC, {
   color: textColor,
   strokeWidth: 8,
   duration: 2200,
   from: { color: startColor},
   to: { color: finalColor},

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *70);
      circle.setText(value);
   }
});

let conteinerD = document.getElementById("circle-4");
let circle4 = new ProgressBar.Circle(conteinerD, {
   color: textColor,
   strokeWidth: 8,
   duration: 2400,
   from: { color: startColor},
   to: { color: finalColor},

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *90);
      circle.setText(value);
   }
});

let conteinerE = document.getElementById("circle-5");
let circle5 = new ProgressBar.Circle(conteinerE, {
   color: textColor,
   strokeWidth: 8,
   duration: 2400,
   from: { color: startColor},
   to: { color: finalColor},

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *50);
      circle.setText(value);
   }
});

let conteinerF = document.getElementById("circle-6");
let circle6 = new ProgressBar.Circle(conteinerF, {
   color: textColor,
   strokeWidth: 8,
   duration: 2400,
   from: { color: startColor},
   to: { color: finalColor},

   step: function(state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = Math.round(circle.value() *90);
      circle.setText(value);
   }
});

let dataAreaOffset = $('#data-area').offset();
let stop = 0;

$(window).scroll(function(e){
   let scroll = $(window).scrollTop();

   if(scroll > (dataAreaOffset.top -500) && stop == 0) {
      circle1.animate(1.0);
      circle2.animate(1.0);
      circle3.animate(1.0);
      circle4.animate(1.0);
      circle5.animate(1.0);
      circle6.animate(1.0);

      stop = 1;
   }
});

setTimeout(function(){
   $('#box-parallax').parallax({imageSrc:'./img/imgParallax1.jpg'});
   $('#data-area').parallax({imageSrc:'./img/imgParallax2.jpg'});   

}, 250);
});
