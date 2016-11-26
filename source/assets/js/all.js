// Libs
//= require libs/jquery.js

// Src
//= require_tree ./src

// Init
//= require ./src/init.js 

$('a[href^="#"]').on('click',function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	//scroll and show hash
	$('html, body').animate({
		'scrollTohash': $target.offset().top
	}, 1000, 'swing', function () {
		window.location.hash = target;
	});
});

$('.tab-header').on('click', function() {
  var tabId = $(this).data('tabId');
  $('.tab-header').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').removeClass('active');
  $('#'+tabId).addClass('active');

});


