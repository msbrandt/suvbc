jQuery(function($){

	var slide = 0;
	var total_slides = $('ul.page_main_content li').size();
	var navigation_count = 0;

	
	slider_navigation();
	
	var last_slide = $('ul.page_main_content li:last').index();
	$('li.nav_pos_button:eq(' + last_slide + ')').css('background', '#ffa500');	

	function next_slide(){
		$('ul.page_main_content li').fadeOut();
		$('ul.page_main_content li:eq(' + slide + ')').fadeIn();


		$('li.nav_pos_button').not('li.not:eq(' + navigation_count + ')').css('background', '#aaa');
		$('li.nav_pos_button:eq(' + navigation_count + ')').css('background', '#ffa500');	
		

		if(slide >= total_slides -1){
			slide = 0;
			navigation_count = 0;
		}else{
			slide ++;
			navigation_count ++;
		}
	}
	setInterval(next_slide, 5000);

	function slider_navigation(){
	
		var slider_position = $('ul.slider_position');
		
		for (x=0; x < total_slides; x++){
			var fillin_dots = "<li class='nav_pos_button'></li>";
			$(slider_position).append(fillin_dots); 
		}
	}
	var nav_width = $('.nav_buttons').outerHeight();
	console.log(nav_width);






});