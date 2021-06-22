const mediaQuery = window.matchMedia('(min-width: 481px)')
//Jumbotron animation
$(document).ready(function(){
  if(mediaQuery.matches){
	$(document).scroll(function(){
	var v1 = $(this).scrollTop();
		if( v1 > 200 ){
		$('.jumbotron').addClass('jumbotrontrans')
	  }
    if( v1 <= 200 ){
      $('.jumbotron').removeClass('jumbotrontrans')
      }
	});
  }
	});

// scroll-trigger
gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

//Initialise AOS
AOS.init();

//Inline-Navigation
$("nav a").click(function( e ){
  e.preventDefault();
  $("#navi .active").removeClass("active");
  $(this).add( $(this.addClass) ).addClass("active");
  $("#pages .active").removeClass("active");
  $(this).add( $(this.hash) ).addClass("active");
  $("#leasingpages .active").removeClass("active");
});

$("#1").on('click',function(e) {
  e.preventDefault();
  $("#leasingpages .active").removeClass("active");
  $("#leasingpages #a").addClass("active");
})

$("#2").on('click',function(e) {
  e.preventDefault();
  $("#leasingpages .active").removeClass("active");
  $("#leasingpages #b").addClass("active");
})

$("#3").on('click',function(e) {
  e.preventDefault();
  $("#leasingpages .active").removeClass("active");
  $("#leasingpages #c").addClass("active");
})

$("#4").on('click',function(e) {
  e.preventDefault();
  $("#leasingpages .active").removeClass("active");
  $("#leasingpages #d").addClass("active");
})
//smooth-scroll animation href

$('a[href^="#tech"],a[href^="#leasing"],a[href^="#top"]').on('click',function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').stop().animate({
   'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
   window.location.hash = target;
  });
 })

//Leasing-Calculator
$(document).ready(function() {
  $('.leasing-table1 input[type=radio]').click(function() {
    var total = 0;
    $('.leasing-table1 input[type=radio]:checked').each(function() {
        total += parseFloat($(this).val());
    });
    $("#totalSum1").val(total + " EUR");
  });

  $('.leasing-table1 .minus').click(function () {
    var total = parseInt($("#totalSum1").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 500;
    if (count >= 0){
    $input.val(count + " €");
    $("#totalSum1").val(total + 15 + " EUR");
    $input.change();
    return false;
    }
  });

  $('.leasing-table1 .plus').click(function () {
    var total = parseInt($("#totalSum1").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) + 500;
    if (count <= 22000){
    $input.val(count + " €");
    $("#totalSum1").val(total - 15 + " EUR");
    $input.change();
    return false;
    }
  });
});

$(document).ready(function() {
  $('.leasing-table2 input[type=radio]').click(function() {
    var total = 0;
    $('.leasing-table2 input[type=radio]:checked').each(function() {
        total += parseFloat($(this).val());
    });
    $("#totalSum2").val(total + " EUR");
  });

  $('.leasing-table2 .minus').click(function () {
    var total = parseInt($("#totalSum2").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 500;
    if (count >= 0){
    $input.val(count + " €");
    $("#totalSum2").val(total + 15 + " EUR");
    $input.change();
    return false;
    }
  });
  $('.leasing-table2 .plus').click(function () {
    var total = parseInt($("#totalSum2").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) + 500;
    if (count <= 23000){
    $input.val(count + " €");
    $("#totalSum2").val(total - 15 + " EUR");
    $input.change();
    return false;
    }
  });
});

$(document).ready(function() {
  $('.leasing-table3 input[type=radio]').click(function() {
    var total = 0;
    $('.leasing-table3 input[type=radio]:checked').each(function() {
        total += parseFloat($(this).val());
    });
    $("#totalSum3").val(total + " EUR");
  });

  $('.leasing-table3 .minus').click(function () {
    var total = parseInt($("#totalSum3").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 500;
    if (count >= 0){
    $input.val(count + " €");
    $("#totalSum3").val(total + 15 + " EUR");
    $input.change();
    return false;
    }
  });
  $('.leasing-table3 .plus').click(function () {
    var total = parseInt($("#totalSum3").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) + 500;
    if (count <= 25000){
    $input.val(count + " €");
    $("#totalSum3").val(total - 15 + " EUR");
    $input.change();
    return false;
    }
  });
});

$(document).ready(function() {
  $('.leasing-table4 input[type=radio]').click(function() {
    var total = 0;
    $('.leasing-table4 input[type=radio]:checked').each(function() {
        total += parseFloat($(this).val());
    });
    $("#totalSum4").val(total + " EUR");
  });

  $('.leasing-table4 .minus').click(function () {
    var total = parseInt($("#totalSum4").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 500;
    if (count >= 0){
    $input.val(count + " €");
    $("#totalSum4").val(total + 15 + " EUR");
    $input.change();
    return false;
    }
  });
  $('.leasing-table4 .plus').click(function () {
    var total = parseInt($("#totalSum4").val());
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) + 500;
    if (count <= 26000){
    count = count > 26000 ? 19500 : count;
    $input.val(count + " €");
    $("#totalSum4").val(total - 15 + " EUR");
    $input.change();
    return false;
    }
  });
});
