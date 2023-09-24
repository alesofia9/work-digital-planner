// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $('.saveBtn');
// Retrieves and displays current date.//
$('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));

function hourColor() {
  var Hour = moment().hours();

  $('.time-block').each(function() {
    var nowHour = parseInt($(this).attr('id'));
  console.log(this); 

    if (nowHour === Hour) {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (nowHour > Hour) {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    } else {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    }
  })
};

saveBtn.on('click', function() {
  var time = $(this).siblings('.hour').text();
  var event = $(this).siblings('.description').val();

  localStorage.setItem(time,event);
});

function usePlanner() {
  $('.hour').each(function() {
    var nowHour = $(this).text();
    var nowPlan = localStorage.getItem(nowHour);

    if (nowHour !== null) {
      $(this).siblings('.description').val(nowPlan);
    }
  });
}

hourColor();
usePlanner();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.