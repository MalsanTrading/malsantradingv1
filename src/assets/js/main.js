(function($) {

	'use strict';

	$(document).ready(function() {
    	// Slick nav menu for responsive menu
    	$("#menu").slicknav({
    		prependTo: '.main-menu'
    	});

    	// Single Team member hover effect
    	$('.single-team-col').on('mouseover', function(){
    		$(this).addClass('active').siblings().removeClass('active');
    	});

    	// Counter up Initialize
    	$('.counter').counterUp({
		    delay: 10,
		    time: 2000
		});

    	// Add and remove class on focusing and bluring on Search input
    	$('.menu-row-search-box form input[type="search"]').on('focus', function() {
    		$('.menu-row-search-box').addClass('focused');
    	}).on('blur', function() {
    		$('.menu-row-search-box').removeClass('focused');
    	});


    	// Custom Accordion
    	$('.accordion .content').hide();
    	$('.accordion.active .content').show();
    	
    	$('.accordion').on('click', function() {
    		var $this = $(this);
    		$this.toggleClass('active');
    		$this.find('.content').slideToggle();
    	});
		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});
  
	});



})(jQuery)
