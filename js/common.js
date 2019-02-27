// кнопка вверх

$(window).scroll(function(){
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});

// действие кнопки вверх

$('.top').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
