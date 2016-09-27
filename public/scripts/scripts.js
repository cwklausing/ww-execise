$(function(){
  console.log("hello!");

  //Mobile menu click
  var menuOpen = false;
  $('.menu-button').on('click', function() {
  	// Set offset of menu based on device width
  	// Defaults to 70% width
  	var offset = "60%"
  	if(!menuOpen) {
  		$('.side-menu').animate({
  			left: "0"
  		}, {duration: 200});
  		$('.wrapper').animate({
  			left: offset
  		}, {duration: 200});
  		menuOpen = true;
  	}
  	else {
  		$('.side-menu').animate({
  			left: "-" + offset
  		}, {duration: 200});
  		$('.wrapper').animate({
  			left: "0"
  		}, {duration: 200});
  		menuOpen = false;
  	}
  })
})
