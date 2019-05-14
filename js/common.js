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

// конец кнопни вверх 



// закрытие меню старт 

function myPopup() {
	var mainNav    = document.getElementById('mainNav');
	var mainHeader = document.getElementById('mainHeader');
	var menuUl     = document.getElementById('menuUl');

	mainHeader.click = function() {
		mainUl.style.display = "none";
	}

}
