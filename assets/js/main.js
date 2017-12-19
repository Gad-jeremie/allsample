/*
	ZeroFour by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -22,
				mode: 'fade',
				noOpenerFade: true,
				speed: 300,
				detach: false
			});

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});



		// Off-Canvas Navigation.

			// Title Bar.
				$(




					'<div id="titleBar">' +
					 
						'<a href="#navPanel" class="toggle"></a>' +
						/*gad*/						
						'<a href="#" class="fafa"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +

						/*select*/
						'<select id="mounth">' + 
                         
						 '<option value="hide">-- Month --</option>'+
						  '<option value="january" rel="icon-temperature">January</option>'+
						  '<option value="february">February</option>'+
                          '<option value="march">March</option>'+
                          '<option value="april">April</option>'+
                          '<option value="may">May</option>'+
                          '<option value="june">June</option>'+
                          '<option value="july">July</option>'+
                          '<option value="august">August</option>'+
                          '<option value="september">September</option>'+
                          '<option value="october">October</option>'+
                          '<option value="november">November</option>'+
                          '<option value="december">December</option>'+

						 '</select>' +

					'</div>'
				)


					.appendTo($body);

					/*select js*/

					$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});



			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)


					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});


/*higher nav*/
					$(

					'<div id="appearmenu">' +					  
						 
						 
					'</div>'
				)
					.appendTo($body);
 

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});


 /*menu show minimal*/
 if($("#titleBar").height()> $(document).scrollTop()){

$("#appearmenu").css({"display": "none"});
}

$(document).scroll(function(){

if($("#titleBar").height()< $(document).scrollTop()){
$('#appearmenu').fadeIn(270);

 
} else{
$('#appearmenu').fadeOut(50);
}

});


/*select*/


 

})(jQuery);

