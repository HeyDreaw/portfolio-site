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
	
	$(window).scroll( function(){
    
       
        $('.skill-block').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
           
            bottom_of_window = bottom_of_window + 10;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
        }); 
    
    });
	
	
	

	
	
});