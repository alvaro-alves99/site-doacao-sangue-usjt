var $ = document.querySelector.bind(document);


$('.menu-icon-container .menu-icon').addEventListener('click', function(){
	
	$('.menu-icon-container').classList.toggle('muda-translate');

	$('.menu-icon').classList.toggle('right-toggle');
});