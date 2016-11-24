// Libs
//= require libs/jquery.js

// Src
//= require_tree ./src

// Init
//= require ./src/init.js 


$('.tab-header').on('click', function() {
  var tabId = $(this).data('tabId');
  $('.tab-header').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').removeClass('active');
  $('#'+tabId).addClass('active');

});

