
$('.top-line-menu-btn').click(function() {
	$(this).toggleClass('active');
	if($(this).hasClass('active')) {
		$('.top-line-box').addClass('active');
	} else {
		$('.top-line-box').removeClass('active');
	}
});