$(function(){
  var numEmployeePics = 0;

  //On page load, get first 8 employees;
  getEmployees(8);


  function getEmployees (number) {
    $.ajax({
      url: '/data/Employees.json',
      method: 'GET'
    }).done(function(data) {
      var dataArray = data;
      for(var i = 0; i < number; i++) {
        if(numEmployeePics >= data.length) {
          $('.load-more').css("display", "none");
          return false;
        }
        appendEmployees(dataArray);
        numEmployeePics++;
      }
    })
  }

  function appendEmployees(data) {
    var $element = "<div class='employee'><img src='/images/employee_images/"
    + data[numEmployeePics].image + "' />" + "<div class='emp-info v-center'><div class='text-wrap'><h2>" + data[numEmployeePics].name.first +
    " " + data[numEmployeePics].name.last + "</h2><p>" + data[numEmployeePics].position + "</p></div></div></div>";
    $('.team-wrap').append($element);
  }

  //'Load more' click
  $('.load-more').on('click', function() {
    getEmployees(4)
  });

  // Team values click handler
  $('.value-dropdown').on('click', function() {
    if($(this).data("open")) {
      console.log('this');
      $(this).siblings().slideUp();
      $(this).data("open", false);
    }
    else {
      console.log('that');
      $('.value-text').data("open", false);
      $('.value-text').slideUp();
      $(this).data("open", true);
      $(this).siblings().slideDown();
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
