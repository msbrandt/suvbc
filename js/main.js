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
	// setInterval(next_slide, 5000);

	function slider_navigation(){
	
		var slider_position = $('ul.slider_position');
		
		for (x=0; x < total_slides; x++){
			var fillin_dots = "<li class='nav_pos_button'></li>";
			$(slider_position).append(fillin_dots); 
		}
	}
	var nav_width = $('.nav_buttons').outerHeight();
	console.log(nav_width);

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

  //player info

  var playerArray=[
	  {
	  	name: 'Mike Brandt',
	  	num: '18',
	  	position: 'OP',
	  	year: 'Jr',
	  	img: '1',
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






});