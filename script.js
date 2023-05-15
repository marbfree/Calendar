// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {


  // let saveBtn = $('.btn');
  $('.saveBtn').on('click', function(){
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    // console.log('button clicked');
    // let textInputValue = $('textarea[rows="3"]').val();
    // console.log(textInputValue);
    localStorage.setItem(time, value);
    // console.log(textInputValue);
    // alert(localStorage.getItem("textInput"));
    // window.localStorage.textInput = textInputValue
  });
    // localStorage.getItem
    // localStoreage.getItem, 8, identify where, parent line, over where, target what want, value

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
// finishing coding 3 lines
      } 
    })};
updateHours();
// look up timers in w3 schools, syntax of counter, not timeout

  // localStorage.setItem("hour-9", )

  // let rootEl = $('#root');
  // rootEl.children('body').children('div').add('<div>');

  
  // let divArray = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
  // for (i = 0; i < divArray.length; i++);
  // let setDivId = $("<div>", {id: divArray[i]});
  // rootEl.children('div').children().append(setDivId);


// 1. create divs for each hour 9-5
//    a)create an object with each div id (hour-9, hour-10)? 
//    b)use a for or each loop to give id to div
//    c)give each div styling, text area, button, etc.
// 2. how to use an id in the click event and in local storage
// 3. create an if statement: if current hour === id hour, then have this styling



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
});
