new Splide( '.splide1', {
	breakpoints: {
		3840: {
			focus: 'center',
			perPage: 2,
			trimSpace: false,
			arrows: false,
			pagination: false,
			padding: '3%',
			gap: '5em',
		},
		600: {
			arrows: false,
			pagination: true,
			perPage: 1,
			padding: '5%',
			gap: '2em',
			height : 600,
			classes: {
				pagination: 'splide__pagination pagination', // container
			}
		}
	},
} ).mount();

new Splide( '.splide2', {
	breakpoints: {
		3840: {
			focus: 'center',
			perPage: 2,
			trimSpace: false,
			arrows: false,
			pagination: false,
			padding: '3%',
			gap: '5em',
		},
		600: {
			arrows: false,
			pagination: true,
			perPage: 1,
			padding: '5%',
			gap: '2em',
			height : 600,
		}
	}
} ).mount();

new Splide( '.colorsplide', {
	breakpoints: {
		3840: {
			focus: 'center',
			perPage: 2,
			trimSpace: false,
			arrows: false,
			pagination: false,
			padding: '3%',
			gap: '5em',
		},
		600: {
			arrows: false,
			pagination: true,
			perPage: 1,
			padding: '5%',
			gap: '2em',
			height : 600,
		}
	}
} ).mount();

$(document).ready(function(){
	$(document).scroll(function(){
	var v2 = Math.abs($('.splide1').position().top - $(window).height()/2);
	var v1 = $(this).scrollTop();
		if( v1 > v2 ){
		$('.splide1').addClass('moveInRight')
	  }
	});
	});

	$(document).ready(function(){
		$(document).scroll(function(){
		var v2 = Math.abs($('.splide2').position().top - $(window).height()/2);
		var v1 = $(this).scrollTop();
			if( v1 > v2 ){
			$('.splide2').addClass('moveInRight')
		  }
		});
		});

		$(document).ready(function(){
			$(document).scroll(function(){
			var v2 = Math.abs($('.colorsplide').position().top - $(window).height()/2);
			var v1 = $(this).scrollTop();
				if( v1 > v2 ){
				$('.colorsplide').addClass('moveInRight')
			  }
			});
			});