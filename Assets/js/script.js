
// runs function once html is loaded
$(document).ready(function () {
  
  // saves text from text area to local storage
  $('.saveBtn').on('click', function(){
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    
      localStorage.setItem(time, value);
      console.log(time)
  });    

  // current time from dayjs to compare and change past, present, and future styling
  function updateHours() {
    let currentTime = dayjs().hour(); 
    console.log(currentTime);
    
    $(".time-block").each(function(){
      let timeBlock = parseInt($(this).attr("id").split("-")[1]);
      console.log(timeBlock);
      if (timeBlock < currentTime) {
        $(this).addClass("past");
      } else if (timeBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
  })};

  // update the hour every 15 min. (does this work/do I need this)
  setInterval(function(){
    updateHours}, 900000); 

  // runs the updateHours function
  updateHours();

  // Gets the local storage to display text from textarea upon refresh
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // displays the current date in the header of the page.
  $('#currentDay').append(dayjs().format('MMMM-D-YYYY'));
});


