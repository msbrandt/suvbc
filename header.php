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
			<div class="nav_wrapper">
				<img src="<?php bloginfo( 'template_url' );?>/img/volleyball_logo.gif" /> 
				<div class="nav_buttons">
					<ul class="navbar_content waypoints">
						<li><a href="#top">home</a></li>
						<li><a href="#players">players</a></li>
						<li><a href="#feat">featured</a></li>
						<li><a href="#contact">contact</a></li>
					</ul> <!-- end navbar_content -->

				</div>


				<div class="clear"></div>
			</div> <!-- end nav_wrapper -->

		</nav>

	</div><!-- end stickynav -->
<div class="main_content">