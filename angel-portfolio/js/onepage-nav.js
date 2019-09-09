$(document).ready(function() {
	var scrollLink = $('.scroll');

	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			1000
		);
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$('.top-head').css('background', '#fff');
			$('.top-head').css('box-shadow', '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)');
		} else {
			$('.top-head').css('background', 'transparent');
			$('.top-head').css('box-shadow', 'none');
		}
	});

	//active link swtiching

	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - 15;

			if (sectionOffset <= scrollbarLocation) {
				$(this)
					.parent()
					.addClass('active');
				$(this)
					.parent()
					.siblings()
					.removeClass('active');
			}

			console.log();
		});
	});

	///underline links when active

	$('.portfolio-nav').on('click', 'li', function() {
		$('.portfolio-nav li.active').removeClass('active');
		$(this).addClass('active');
	});
});

$(window).on('beforeunload', function() {
	// $('body').hide();
	$(window).scrollTop(0);
});
