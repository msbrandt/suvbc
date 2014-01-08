<?php 
	add_action( 'init', 'SUVBC_slider' );
	
	function SUVBC_slider(){
		register_post_type( 'suvbc_img',
			array( 'labels' => 
				array(
					'name' => __('Showcase Slider')
			), 
			'public' => true,
			'menu_position' => 5,
			'rewrite' => array( 'slug' => 'suvbc_show_slider'),
			'has_archive' => true
			)
		);
	}

	function suvbc_showcase_slider(){
		global $post; 

		$postID = $post->ID;
		$argsX = array(
			'post_type' => 'suvbc_img',
			'numberposts' => -1
			);
		$x = -1;
		$arrImages =& get_children('post_type=attachment&post_mime_type=image&post_parent=' . $postID );
		if ($arrImages) {
			$arrKey = array_keys($arrImages);

			foreach ($arrImages as $attachment) {
				$x += 1;
				$imgInfoArr = array(
					'desc' => $attachment->post_content
				);
			
				$xNum = $arrKey[$x];
				
				$decsp = $imgInfoArr['desc'];
				
				$sImgURL = wp_get_attachment_url($xNum);
				
				echo '<li class=slide style="background: url('.$sImgURL.') no-repeat; background-size: cover;">';
				echo '<div class="slide_dec">'.$decsp.'</div></li>';

			}
		}

}
?>