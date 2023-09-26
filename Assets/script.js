var saveBtn = $('.saveBtn');
// Retrieves and displays current date.//
$('#currentDay').text(moment().format('dddd MMMM Do, YYYY'));

// Condition for past, present, and future css colors below. Lines 10 - 11 establishes the hours. Function with variables created to get the time data to reflect color scheme according to the hour.
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

// Save button activated to store text/user events while storing said events after user clicks on the save button.  
saveBtn.on('click', function() {
  var time = $(this).siblings('.hour').text();
  var event = $(this).siblings('.description').val();

  localStorage.setItem(time,event);
});

// This part was the trickiest. The function below saves a plan/event the user creates by the hour when the user clicks the save button (see saveBtn function). If the user leaves the page but comes back later, the saved event should still populate!  
function utilizePlanner() {
  $('.hour').each(function() {
    var nowHour = $(this).text();
    var savePlan = localStorage.getItem(nowHour);

    if (nowHour !== null) {
      $(this).siblings('.description').val(savePlan);
    }
  });
}

hourColor();
utilizePlanner();
