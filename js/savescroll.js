(function(){
	var scrollpos = localStorage.getItem('scrollpos');
	window.scrollTo(0, scrollpos);

	window.onscroll = function(evt) {
		scrollpos = evt.pageY;
		localStorage.setItem('scrollpos', scrollpos);
	}
})()