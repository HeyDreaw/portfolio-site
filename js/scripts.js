$(document).ready(function(){
	
	
	$(window).scroll(function(){                          
		if ($(this).scrollTop() > 400) {
				$('.menu').fadeIn(500);
		} else {
				$('.menu').fadeOut(500);
		}
	});
	
	$(function() {
		count = 0;
		myTitles = ["coffee addict", "comic reader", "guitar player", "proud nerd", "web developer"];
		setInterval(function () {
			count++;
			$("#my-title").fadeOut(400, function () {
				$(this).text(myTitles[count % myTitles.length]).fadeIn(400);
			});
		}, 2000);
	});
	
	
	setTimeout(function (){
		$('#main-logo').animate({
			opacity: 1
		}, 1500);
	});

	
	
});