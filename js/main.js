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
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

})(jQuery);

function openNav1() {
	document.getElementById("myNav1").style.width = "100%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
  }
  function closeNav1() {
	document.getElementById("myNav1").style.width = "0%";
  }

  
function openNav2() {
	document.getElementById("myNav2").style.left = "0";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav3").style.height = "0%";
	document.getElementById("myNav4").style.top= "100%";
  }
  function closeNav2() {
	document.getElementById("myNav2").style.left = "100%";
  }

  function openNav3() {
	document.getElementById("myNav3").style.height = "100%";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav4").style.top= "100%";
  }
  function closeNav3() {
	document.getElementById("myNav3").style.height = "0%";
  }

  function openNav4() {
	document.getElementById("myNav4").style.top= "0";
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav2").style.left = "100%";
	document.getElementById("myNav3").style.height = "0%";
  }
  function closeNav4() {
	document.getElementById("myNav4").style.top= "100%";
  }
