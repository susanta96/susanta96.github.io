$(document).ready(function() {

	var currentIndex = 1;

	var sectionAnchors = ['profile', 'about-me', 'qualifications', 'education', 'projects'];
	var sectionNames = ['', 'About Me', 'Qualifications', 'Education', 'Projects']

	var loadedProgressBars = false;

	$('#fullpage').fullpage({
		anchors: sectionAnchors,
		navigation: true,
		navigationTooltips: sectionNames,
		menu: '#menu',
		//recordHistory: false,

		afterLoad: function(anchorLink, index) {
			currentIndex = index;

			/* animates progress bars in Qualifications section upon first load of that section */
			if(anchorLink == 'qualifications' && !loadedProgressBars) {

				$('.progress .progress-bar').each(function() {
					var progressBarValue = $(this).attr('aria-valuenow') + '%';
					$(this).animate(
						{ width: progressBarValue },
						{ duration: 150, easing: 'easeOutExpo' }
					);
				});

				loadedProgressBars = true;
			}
		},

		onLeave: function(index, nextIndex, direction) {

			/* renders navbar transparent if scrolling towards landing page */
			if(nextIndex == 1) { // going to first page
				$('.navbar-fixed-top').removeClass('top-nav-collapse');
				$('.navbar-fixed-top').addClass('navbar-transparent');
			} else {
				$('.navbar-fixed-top').addClass('top-nav-collapse');
				$('.navbar-fixed-top').removeClass('navbar-transparent');
			}
		},

	});

	/* ensures page always reloads to landing page */
	if(currentIndex == 1) {
		$('#fullpage').fullpage.silentMoveTo(2);
		$('#fullpage').fullpage.silentMoveTo(1);
	}

});
