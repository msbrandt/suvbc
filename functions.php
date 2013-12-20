<?php 
	add_action( 'init', 'SUVBC_slider' );
	
	function SUVBC_slider(){
		register_post_type( 'suvbc_img',
			array( 'labels' => 
				array(
					'name' => __('Slider Image')
			), 
			'public' => true,
			'menu_position' => 5,
			'rewrite' => array( 'slug' => 'learn'),
			'has_archive' => true
			)
		);
	}




?>