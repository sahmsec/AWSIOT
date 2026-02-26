var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

jQuery(document).ready(function () {

	var $banner_results = jQuery('#uu_marquee_banner');
	var $banner_loader = jQuery('#uu_marquee_banner_loader');
	var totalPosts = 0;
	var $banner_query = 'https://digital.utah.edu/wp-json/wp/v2/uu-homepage-banners';

	// INITIAL BANNER QUERY
	getBanners($banner_query);

	// GET BANNERS VIA AJAX/WP REST API
	function getBanners(query) {

		var banner_inc = 1;

		jQuery.ajax({
			type: 'GET',
			url: query,
			data: { get_param: 'value' },
			dataType: 'json',
			beforeSend: function showLoader() {
				$banner_loader.append(`
<div class="banner_loader_card"></div>
`);
			},
			success: function (data, status, request) {

				$banner_loader.html('');

				if (!jQuery.trim(data)) {
					$banner_results.html('<div class="uu-marquee-banner-msg"><p>No Banners Found.</p></div>');
				} else {
					jQuery.each(data, function (i, post) {
						// VARS
						var banner_num = banner_inc++;
						var banner_type = post['meta_box']['uu_homepage_banner_type'];
						var banner_title = post['meta_box']['uu_homepage_banner_title'];
						var banner_subtitle = post['meta_box']['uu_homepage_banner_subtitle'];
						var banner_description = post['meta_box']['uu_homepage_banner_description'];
						var banner_overlay_opacity = post['meta_box']['uu_homepage_banner_overlay_opacity'];
						var banner_bkg_img = post['meta_box']['uu_homepage_banner_background_image']['full_url'];
						var banner_bkg_alignment = post['meta_box']['uu_homepage_banner_bkg_alignment'];
						var banner_hero_img = post['meta_box']['uu_homepage_banner_hero_image']['full_url'];
						var banner_text_alignment = post['meta_box']['uu_homepage_banner_alignment'];
						var banner_btn_title = post['meta_box']['uu_homepage_banner_button_title'];
						var banner_btn_url = post['meta_box']['uu_homepage_banner_button_url'];
						var banner_btn_color = post['meta_box']['uu_homepage_banner_button_color'];
						var banner_video_id = post['meta_box']['uu_homepage_banner_video_id'];
						var banner_yt_video_id = post['meta_box']['uu_homepage_banner_yt_video_id'];
						var banner_byline = post['meta_box']['uu_homepage_banner_byline'];						
						// LOOK FOR BTN AND BUILD HTML
						var btn_build = '';
						if (banner_btn_title) {
							btn_build = `<a class="banner-click uu-btn ` + banner_btn_color + ` large" href="` + banner_btn_url + `" target="_blank" data-banner-position="` + banner_num + `" aria-label="Learn more about ` + banner_title + `">` + banner_btn_title + `</a>`
						}
						// LOOK FOR BACKGROUND IMG AND BUILD HTML
						var bkg_build = '';
						if (banner_bkg_img) {
							bkg_build = `style="background-image:url('` + banner_bkg_img + `'); background-position:` + banner_bkg_alignment + `;"`
						}
						// LOOK FOR HERO IMG AND BUILD HTML
						var hero_build = '';
						if (banner_hero_img) {
							hero_build = `<div class="uu-marquee-banner-item-hero"><img src="` + banner_hero_img + `" alt=""></div>`
						}
						// LOOK FOR BYLINE AND BUILD HTML
						var byline_build = '';
						if (banner_byline) {
							byline_build = `<div class="uu-marquee-banner-item-byline">` + byline_build + `</div>`
						}
						// LOOK FOR VIDEO AND BUILD HTML
						var video_build = '';
						if (banner_video_id) {
							video_build = `<div class="uu-marquee-banner-video-container">
<div class="uu-marquee-banner-video" data-vimeo-initialized="true">
<iframe tabindex="-1" class="uu-marquee-vimeo-video" src="https://player.vimeo.com/video/`+ banner_video_id + `?muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963" frameborder="0" allowfullscreen="" data-ready="true"></iframe>
</div>
</div>`
						}
						if (banner_yt_video_id) {
							video_build = `<div class="uu-marquee-banner-video-container">
<div class="uu-marquee-banner-video">
<div tabindex="-1" class="youtube-video" data-video-id="` + banner_yt_video_id + `"></div>
</div>
</div>`;
						}
						
						$banner_results.append(`
<div id="uu_marquee_banner_`+ banner_num + `" class="uu-marquee-banner-item banner-type-` + banner_type + ` banner-alignment-` + banner_text_alignment + `" ` + bkg_build + `>
`+ byline_build + `
`+ hero_build + `
<div class="uu-marquee-banner-item-content">
<div class="uu-marquee-banner-item-title"><h2>`+ banner_title + `</h2></div>
<div class="uu-marquee-banner-item-subtitle">`+ banner_subtitle + `</div>
<div class="uu-marquee-banner-item-description">`+ banner_description + `</div>
`+ btn_build + `
</div>
<div class="uu-marquee-banner-item-overlay" style="opacity:`+ banner_overlay_opacity + `;"></div>
`+ video_build + `
</div>
`);
					});
				}

				jQuery('.uu-marquee-banner').owlCarousel({
					items: 1,
					loop: true,
					autoplay: true,
					autoplayTimeout: 8000,
					autoplayHoverPause: true,
					nav: true,
					navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="14.783" height="29.562" viewBox="0 0 14.783 29.562"><path id="Path_568" data-name="Path 568" d="M18.468-15.226,6.374-1.789a1.344,1.344,0,0,1-1.9.1,1.346,1.346,0,0,1-.1-1.9L15.663-16.125,4.376-28.664a1.349,1.349,0,0,1,.1-1.9,1.346,1.346,0,0,1,1.9.1L18.467-17.1A1.438,1.438,0,0,1,18.468-15.226Z" transform="translate(18.814 -1.344) rotate(180)" fill="#463c3c"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="14.783" height="29.562" viewBox="0 0 14.783 29.562"><path id="Path_569" data-name="Path 569" d="M18.468-15.226,6.374-1.789a1.344,1.344,0,0,1-1.9.1,1.346,1.346,0,0,1-.1-1.9L15.663-16.125,4.376-28.664a1.349,1.349,0,0,1,.1-1.9,1.346,1.346,0,0,1,1.9.1L18.467-17.1A1.438,1.438,0,0,1,18.468-15.226Z" transform="translate(-4.032 30.906)" fill="#463c3c"/></svg>'],
					dots: false,
					afterInit: function () {
						// make individual items focusable
						$('.uu-marquee-banner .owl-item').attr('aria-selected', 'false').attr('tabindex', '0');
						$('.uu-marquee-banner').attr('tabindex', '0');

						// on when an item has focus, let screen readers know it is active
						$('.uu-marquee-banner .owl-item').on('focus', function () {
							$('.uu-marquee-banner .owl-item').attr('aria-selected', 'false');
							$(this).attr('aria-selected', 'true');
						});

						// show instructions to keyboard users when the carousel is focused
						$('.uu-marquee-banner .owl-wrapper-outer').append('');
						




					}
				});

				initializePlayers();
				ajaxWasRan = true;
				
				// tab index for next and prev buttons
				$('.uu-marquee-banner .owl-prev').attr('tabindex', '-1');
				$('.uu-marquee-banner .owl-next').attr('tabindex', '-1');

			},
			error: function (data, status, request) {
				document.getElementById('uu_marquee_banner_loader').style.display = 'none';
				$banner_results.html('<div class="uu-marquee-banner-msg"><p>Error Getting Banners.</p></div>');
			}
		});
	}


	var $card_results = jQuery('#uu_featured_cards');
	var $card_loader = jQuery('#uu_featured_cards_loader');
	var $card_query = 'https://digital.utah.edu/wp-json/wp/v2/uu-homepage-cards';

	// INITIAL BANNER QUERY
	getFeaturedCards($card_query);

	// GET FEATURED CARDS VIA AJAX/WP REST API
	function getFeaturedCards(query) {

		var card_inc = 1;

		jQuery.ajax({
			type: 'GET',
			url: query,
			data: { get_param: 'value' },
			dataType: 'json',
			beforeSend: function showLoader() {
				$card_loader.append(`
<div class="banner_loader_card"></div><div class="banner_loader_card"></div><div class="banner_loader_card"></div><div class="banner_loader_card"></div>
`);
			},
			success: function (data, status, request) {

				$card_loader.html('');

				if (!jQuery.trim(data)) {
					$card_results.html('<div class="uu-marquee-banner-msg"><p>No Banners Found.</p></div>');
				} else {
					jQuery.each(data, function (i, post) {
						// VARS
						var card_num = card_inc++;
						var card_title = post['meta_box']['uu_homepage_card_title'];
						var card_bkg_img = post['meta_box']['uu_homepage_card_background_image']['full_url'];
						var card_url = post['meta_box']['uu_homepage_card_url'];
						var card_overlay_color = post['meta_box']['uu_homepage_card_overlay_color'];
						// LOOK FOR BACKGROUND IMG AND BUILD HTML
						var card_bkg_build = '';
						if (card_bkg_img) {
							card_bkg_build = `style="background-image:url('` + card_bkg_img + `');"`
						}

						$card_results.append(`
<a href="`+ card_url + `" id="uu_featured_card_` + card_num + `" class="uu-featured-card-item card-click overlay-color-` + card_overlay_color + `" ` + card_bkg_build + ` data-card-position="` + card_num + `">
<div class="uu-featured-card-item-content">
<div class="uu-featured-card-item-title"><span>`+ card_title + `</span></div>
</div>
<div class="uu-featured-card-item-overlay"></div>
</a>
`);
					});
				}

				jQuery('.uu-featured-cards').owlCarousel({
					items: 4,
					autoWidth: true,
					loop: true,
					nav: false,
					navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="14.783" height="29.562" viewBox="0 0 14.783 29.562"><path id="Path_568" data-name="Path 568" d="M18.468-15.226,6.374-1.789a1.344,1.344,0,0,1-1.9.1,1.346,1.346,0,0,1-.1-1.9L15.663-16.125,4.376-28.664a1.349,1.349,0,0,1,.1-1.9,1.346,1.346,0,0,1,1.9.1L18.467-17.1A1.438,1.438,0,0,1,18.468-15.226Z" transform="translate(18.814 -1.344) rotate(180)" fill="#463c3c"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="14.783" height="29.562" viewBox="0 0 14.783 29.562"><path id="Path_569" data-name="Path 569" d="M18.468-15.226,6.374-1.789a1.344,1.344,0,0,1-1.9.1,1.346,1.346,0,0,1-.1-1.9L15.663-16.125,4.376-28.664a1.349,1.349,0,0,1,.1-1.9,1.346,1.346,0,0,1,1.9.1L18.467-17.1A1.438,1.438,0,0,1,18.468-15.226Z" transform="translate(-4.032 30.906)" fill="#463c3c"/></svg>'],
					dots: false,
					afterInit: function () {
						// make individual items focusable
						$('.uu-featured-cards .owl-item').attr('aria-selected', 'false').attr('tabindex', '0');
						$('.uu-featured-cards').attr('tabindex', '0');

						// on when an item has focus, let screen readers know it is active
						$('.uu-featured-cards .owl-item').on('focus', function () {
							$('.uu-featured-cards .owl-item').attr('aria-selected', 'false');
							$(this).attr('aria-selected', 'true');
						});

						// show instructions to keyboard users when the carousel is focused
						$('.uu-featured-cards .owl-wrapper-outer').append('');

					}
				});
			},
			error: function (data, status, request) {
				document.getElementById('uu_featured_cards_loader').style.display = 'none';
				document.getElementById('uu_featured_cards').style.height = '35px';
				$card_results.html('<div class="uu-marquee-banner-msg"><p>Error Getting Cards.</p></div>');
			}
		});
	}

	// SOCIAL TAB BUTTONS
	jQuery(".social-tab-button").click(function (e) {
		e.stopPropagation();
		var target = jQuery(this).data("target");
		console.log(target);
		jQuery(".social-tab-button").removeClass("active"),
			jQuery(this).addClass("active"),
			jQuery(".social-tab").hide().addClass("hidden"),
			jQuery("#" + target).show().removeClass("hidden");
	});

	let pause = false;
	$('.uu_marquee-pause span').html('<i class="fa-solid fa-pause"></i> Pause Slides');

	window.marqueePause = function () {
		if (pause) {
			$('.uu-marquee-banner').trigger('play.owl.autoplay');
			playAllVideos();
			pause = false;
			$('.uu_marquee-pause span').html('<i class="fa-solid fa-pause"></i> Pause Slides');
			$(".uu_marquee-pause").removeClass('show');
		}
		else {
			$('.uu-marquee-banner').trigger('stop.owl.autoplay');
			pauseAllVideos();
			pause = true;
			$('.uu_marquee-pause span').html('<i class="fa-solid fa-play"></i> Unpause Slides');
			$(".uu_marquee-pause").addClass('show');
		}
	}
	

});

let players = {};
let ajaxWasRan = false;
let apiIsReady = false;
let vimeoIframes;
let vimeoPlayers = [];


function onYouTubeIframeAPIReady() {
	apiIsReady = true;
	if (ajaxWasRan) { // if ajax has already been ran, and this function is getting called again, we need to initialize everything again
		initializePlayers();
	}
}

function initializePlayers() {
	if (apiIsReady) { // we need to make sure the api is ready before we try anything
		const videos = document.querySelectorAll('.youtube-video');
		videos.forEach((videoDiv, index) => {
			const videoId = videoDiv.getAttribute('data-video-id');
			players[index] = new YT.Player(videoDiv, {
				height: '390',
				width: '640',
				videoId: videoId,
				playerVars: {
					autoplay: 1,
					mute: 1,
					loop: 1, 
					playlist: videoId,
					controls: 0,
					showinfo: 0,
					modestbranding: 1,
					rel: 0
				},
			});
		});

		// initiate video for vimeo
		vimeoIframes = document.querySelectorAll('iframe.uu-marquee-vimeo-video');
		vimeoIframes.forEach(iframe => {
			vimeoPlayers.push(new Vimeo.Player(iframe));
		});
	}
}

function pauseAllVideos() {
	Object.values(players).forEach(player => {
		player.pauseVideo();
	});
	vimeoPlayers.forEach(player => {
		player.pause().catch(error => {
			console.error('Error pausing video:', error);
		});
	});
}

function playAllVideos() {
	Object.values(players).forEach(player => {
		player.playVideo();
	});
	vimeoPlayers.forEach(player => {
		player.play().catch(error => {
			console.error('Error playing video:', error);
		});
	});
}