jQuery(function($){
	$('ul.navbar_content li').hover(function(){
		var hovered = $(this);
		$(hovered).animate({borderBottomWidth: '5px'}, 100);
	
	}, function(){
		var hovered = $(this);
		$(hovered).animate({borderBottomWidth: '0px'}, 100);
	});

	var slide = 0;
	var total_slides = $('ul.page_main_content li').size();
	var navigation_count = 0;

	
	slider_navigation();
	var last_slide = $('ul.page_main_content li:last').index();
	$('li.dot:eq(' + last_slide + ')').css('background', '#ff0000');	

	function next_slide(){
		$('ul.page_main_content li').fadeOut();
		$('ul.page_main_content li:eq(' + slide + ')').fadeIn();


		$('li.dot').not('li.not:eq(' + navigation_count + ')').css('background', '#fff');

		$('li.dot:eq(' + navigation_count + ')').css('background', '#ff0000');	
		

		if(slide >= total_slides -1){
			slide = 0;
			navigation_count = 0;
		}else{
			slide ++;
			navigation_count ++;
		}
		console.log(navigation_count);
	}
	setInterval(next_slide, 5000);

	function slider_navigation(){
	
		var slider_position = $('ul.slider_position');
		
		for (x=0; x < total_slides; x++){
			var fillin_dots = "<li class='dot'> . </li>";
			$(slider_position).append(fillin_dots); 
		}
		$(slider_position).append("<li class='button'>></li>");
	}






});