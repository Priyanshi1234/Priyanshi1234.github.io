(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(500, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(500, "easeInOutExpo");
		}
	});
	

})(jQuery);

function openNav1() {
	document.getElementById("myNav1").style.width = "100%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
	document.getElementById("myNav5").style.width = "0%";
  }
  function closeNav1() {
	document.getElementById("myNav1").style.width = "0%";
  }

  
function openNav2() {
	document.getElementById("myNav2").style.left = "0";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
	document.getElementById("myNav5").style.width = "0%";
  }
  function closeNav2() {
	document.getElementById("myNav2").style.left = "100%";
  }

  function openNav3() {
	document.getElementById("myNav3").style.height = "100%";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav4").style.top= "100%";
	document.getElementById("myNav5").style.width = "0%";
  }
  function closeNav3() {
	document.getElementById("myNav3").style.height = "0%";
  }

  function openNav4() {
	document.getElementById("myNav4").style.top= "0";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav5").style.width = "0%";
  }
  function closeNav4() {
	document.getElementById("myNav4").style.top= "100%";
  }


function openNav5() {
	document.getElementById("myNav5").style.width = "100%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
	document.getElementById("myNav1").style.width = "0%";
  }
  function closeNav5() {
	document.getElementById("myNav5").style.width = "0%";
  }

  function closeNav() {
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
	document.getElementById("myNav5").style.width = "0%";
  }

   // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }); // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
	}
  });

  


  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["<Front-End Developer/>", "<Web Designing/>", "$[An Enthusiast to learn Web Development]"];
const typingDelay = 100;
const erasingDelay = 120;
const newTextDelay = 100; // Delay between current and next text
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

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

