window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

	
	$(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, // Sets the default split between before and after
        orientation: 'horizontal', // Makes sure the split is horizontal
        before_label: 'Before', // Sets the before label
        after_label: 'After' // Sets the after label
    });
	
    bulmaSlider.attach();

})
