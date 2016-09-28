$(function(){
  /*Create function to grab four people from database.
  Should also track position in the list so we don't
  get repeat people.

  if there aren't four left, just take as many as there are.
  */
  function getEmployees () {
    $.ajax({
      url: '/data/Employees.json',
      method: 'GET'
    }).done(function(data) {
      console.log(data);
    })
  }

  // Team values click handler
  $('.value-dropdown').on('click', function() {
    if($(this).data("open")) {
      console.log("closing");
      $(this).siblings().slideToggle();
      $(this).data("open", false);
    }
    else {
      console.log("opening");
      $('.value-text').slideUp();
      $(this).data("open", true);
      $(this).siblings().slideToggle();
    }
  })

  // Mobile menu click
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
