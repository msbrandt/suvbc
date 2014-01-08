<?php 
/**
*
* @subpackage SUVBC
* @since Today
*/
?>

<?php get_header(); ?> 
<div id="home_section" class="section s1">
<div class="page_wrapper">
	<div class="page_padding">
		<div id="main_page_slider">
		<ul class="page_main_content">
			
			<?php 
				$args = array( 
					'post_type' => 'suvbc_img',
					'numberposts' => -1,
				);

				$x = new WP_Query( $args );
				
				if ( have_posts() ) {
					while ($x -> have_posts()) { $x -> the_post();
						suvbc_showcase_slider();
					}
				}


			 ?>

		</ul>

			<div id="slider_navagation">
				<div class="page_padding_nav">
					<div class="slider_button" id="left"></div>
					<div class="slider_button" id="right"></div>

					<ul class="slider_position">
						<li></li>
					</ul>
					<div class="clear"></div>

				</div><!-- end of page_padding -->

			</div><!-- end of slider nav -->

		</div><!-- end of page slider -->

		<h1>Up comeing events</h1>
		<div class="showcase_dec">
			<div class="page_padding">
				
			</div>
			<a id="fix_nav_trigger"></a>
		</div>

	</div><!-- end page_padding -->
</div> <!-- end page_wrapper -->
</div> <!--end home_section -->
<a id="players"></a>

<div id="player_section" class="section s2">

	<div class="page_wrapper">
		<div class="page_padding">
			<div id="theTeam">
			<h1>Meet the team</h1>
			
			<table id="player_table">
				<thead>
					<tr>
						<th id='number'>#</th>
						<th id="name">name</th>
						<th id="pos">pos.</th>
						<th id="cal">cl.</th>
						<th id="ht">Hometown</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>

			<div id="player_info">
				<div id="image_padding">
					<div id="player_image">
						<img src="<?php bloginfo( 'template_url' );?>/img/andy.jpeg" />
						
					</div>
				</div>
			<div class="clear"></div>

				
					<div id="bio_padding">
						<div id="player_bio">
						bio
						</div>
					</div>

			</div><!-- end player_inf0 -->
			<div class="clear"></div>

			</div><!-- end of theTeam -->

		</div>

	</div>

</div><!--end of players sectrion -->



<a id="feat"></a>
<div id="featured_section" class="section s3">
	featured
</div><!-- end of featured_section -->

<a id="contact"></a>
<div id="contact_us" class="sectoin s4">
	contact us
</div><!-- end of contact_us -->


<?php get_sidebar(); ?>
<?php get_footer(); ?>