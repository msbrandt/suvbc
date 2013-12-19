jQuery(function($){

  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 650);
	        return false;
	      }
	    }
  });


	var navTop = $('nav').height();
  	var playerTop = $('#players').position().top;
  	var featTop = $('#feat').position().top + $('#featured_section').outerHeight(true);
  	var contTop = $('#contact').position().top + $('#contact_us').outerHeight(true);
  	var trigger = $('#fix_nav_trigger').position().top + $('.main_content').outerHeight(true);
  	var count = 0;
  	console.log(playerTop);

  $(window).scroll(function(windowTop){

	  	var windowTop = $(window).scrollTop();
	  	
	  	if (windowTop > navTop){
	  		$('#temp_nav').show();
	  		$('#stickynav').css('display', 'none');
	  		$('#stickynav').addClass('navbar_fixed');

	  	}
	  	if (windowTop >= playerTop && count == 0){
			$('#stickynav').slideDown('fast');

	  	}
	  	else{
	  		$('#temp_nav').hide();

	  		$('#stickynav').removeClass('navbar_fixed');
	  		$('#stickynav').show();
	  		// count =0 ;
	  	}
	  	// if(count > 0){
	  	// 	$('stickynav').show();
	  	// }

	  	if(windowTop > (playerTop -20)){
	  		// count = 2;
	  		// $('ul.navbar_content li').not('ul.navbar_content li:eq(1)').stop().animate({borderBottomWidth: '0px'},100);
	  		// $('ul.navbar_content li:eq(1)').stop().animate({borderBottomWidth: '5px'},100).css('border-color', '#EA7809');

	  	}
	  	// if(windowTop > (featTop -20)){
	  	// 	$('ul.navbar_content li').not('ul.navbar_content li:eq(2)').stop().animate({borderBottomWidth: '0px'},100);
	  	// 	$('ul.navbar_content li:eq(2)').stop().animate({borderBottomWidth: '5px'},100).css('border-color', '#EA7809');

	  	// }
	  	// if(windowTop > (contTop -20)){
	  	// 	$('ul.navbar_content li').not('ul.navbar_content li:eq(3)').stop().animate({borderBottomWidth: '0px'},100);
	  	// 	$('ul.navbar_content li:eq(3)').stop().animate({borderBottomWidth: '5px'},100).css('border-color', '#EA7809');

	  	// }
	  	// if(windowTop < 20){
	  	// 	$('ul.navbar_content li').not('ul.navbar_content li:eq(0)').stop().animate({borderBottomWidth: '0px'},100);
	  	// 	$('ul.navbar_content li:eq(0)').stop().animate({borderBottomWidth: '5px'},100).css('border-color', '#EA7809');
	  	// }
  })




	var slide = 0;
	var total_slides = $('ul.page_main_content li').size();
	var navigation_count = 0;

	
	slider_navigation();
	
	var last_slide = $('ul.page_main_content li:last').index();
	$('li.nav_pos_button:eq(' + last_slide + ')').css('background', '#ffa500');	

	function next_slide(){
		$('ul.page_main_content li').fadeOut('slow');
		$('ul.page_main_content li:eq(' + slide + ')').fadeIn('slow');


		$('li.nav_pos_button').not('li.not:eq(' + navigation_count + ')').css('background', '#aaa');
		$('li.nav_pos_button:eq(' + navigation_count + ')').css('background', '#ffa500');	
		

		if(slide >= total_slides -1){
			slide = 0;
			navigation_count = 0;
		}else{
			slide ++;
			navigation_count ++;
		}
		console.log(slide);
	}

	function prev_slide(){
		$('ul.page_main_content li').fadeOut();
		$('ul.page_main_content li:eq(' + (slide -2) + ')').fadeIn();


		$('li.nav_pos_button').not('li.not:eq(' + (navigation_count-2) + ')').css('background', '#aaa');
		$('li.nav_pos_button:eq(' + (navigation_count-2) + ')').css('background', '#ffa500');	
		

		if(slide >= total_slides){
			slide = 0;
			navigation_count = 0;
		}else{
			slide --;
			navigation_count --;
		}
		console.log(slide);
	}

	// setInterval(next_slide, 5000);
	$('#right').click(function(){
		next_slide();
	});
	$('#left').click(function(){
		prev_slide();
	})

	function slider_navigation(){
	
		var slider_position = $('ul.slider_position');
		
		for (x=0; x < total_slides; x++){
			var fillin_dots = "<li class='nav_pos_button'></li>";
			$(slider_position).append(fillin_dots); 
		}
	}
	var nav_width = $('.nav_buttons').outerHeight();



  //player info

  var playerArray=[
	  {
	  	name: 'Mike Brandt',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: 'andy.jpeg',
	  	bio: 'awfwf wfgw wegr',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike ewfa2',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '2',
	  	bio: 'ope klas . ashfuihfo whf ',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike ryry3',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '3',
	  	bio: 'ij nfjakw fw kfwfuihwf ',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt4',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '4',
	  	bio: 'uutrb ebgy23',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt5',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '5',
	  	bio: '4r5jdr4d 5er45 ',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt6',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '6',
	  	bio: 'uihwqiu26738r wehufiw ',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt7',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '7',
	  	bio: 'rtpohjopdrh riothj ',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt8',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '8',
	  	bio: '684646464',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt9',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '9',
	  	bio: '567jttj',
	  	homeT: 'Brewerton, NY'
	  
	  },
	    {
	  	name: 'Mike Brandt10',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '10',
	  	bio: '3wt4t4 gtrhr',
	  	homeT: 'Brewerton, NY'
	  
	  },

  ]

  for(z=0; z<playerArray.length;z++){
  		var playerTag = '<tr>' + 
  					'<td>' + playerArray[z].num + '</td>' +
  					'<td>' + playerArray[z].name + '</td>' +
  					'<td>' + playerArray[z].position + '</td>' +
  					'<td>' + playerArray[z].year + '</td>' +
  					'<td>' + playerArray[z].homeT + '</td>' +
  					'</tr>';

  		$('tbody').append(playerTag);
  }
  


 $('table#player_table tbody tr').click(function(){
	 	var player = $(this).index();
	 	var that = $(this);
	 	$(that).css('color', '#EA7809');
	 	
	 	$('table#player_table tbody tr').not(that).css('color', '#000');
	 	// var playerimg = '<img src="<?php bloginfo( 'template_url' );?>/img/' + playerArray[player].img + '" />'; 
	 	var playerBio = '<p>' + playerArray[player].bio + '</p>';

	 	// $('#player_image').html(playerimg);
	 	$('#player_bio').html(playerBio);
 });

  // $('table#player_table tbody tr').hover(function(){
  // 		$(this).css('color', '#EA7809');
  // },function(){
  // 		$(this).css('color', '#000');
  // });






});