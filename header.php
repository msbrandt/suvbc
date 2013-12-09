<?php 
?>
<!DOCTYPE HTML>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php wp_enqueue_script( 'jquery' ); ?>
<link rel="stylesheet" type="text/css" href="<?php bloginfo( 'template_url' );?>/style.css">
	<title>
		<?php
		 wp_title( '|', ture, 'right');
		 bloginfo( 'name');
		 ?>
	</title>
	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
	<a id="top"></a>
	<div id="stickynav">
		<nav>
			<div id="nav_wrapper">
				
				<div class="nav_logo">
					<div id="image_temp"><img src="#" /></div>
					<h2><?php bloginfo( 'title' ); ?></h2>
				</div>
				
				<div class="nav_buttons">
					<ul class="navbar_content">
						<!-- <li><?php wp_nav_menu( array( 'container_class' => 'main_nav', 'container' => 'nav' ) ); ?></li> -->
						<li>home</li>
						<li>sample</li>
						<li>sapme 2</li>
						<li><?php get_search_form(); ?></li>
					<div class="clear"></div></ul> <!-- end navbar_content -->

				</div>
				<div class="clear"></div>
			</div> <!-- end nav_wrapper -->

		</nav>
	</div><!-- end stickynav -->
	<div class="main_content">