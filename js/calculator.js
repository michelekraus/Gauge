// $(document).ready(function(){
//   // note this is called event delegation
//   // might read as, "on keypress in the selected input field of enter key"
//   $('form').on('keypress', '#row-count', function(){

//     // find all the inputs
//     var inputs = $('input');

//     // extract values from each html element
//     inputs = inputs.map(function(i, el){ return el.value; });

//     // convert array-like jQuery object to a plain javascript array
//     inputs = inputs.toArray();

//     // convert strings to numbers
//     inputs = inputs.map(Number);

//     // "reduce" array by summing all elements (initial value of accumulator = 0)
//     var sum = inputs.reduce(function(acc, el){ return acc + el; }, 0);

//     // set the html of div#solution to the sum
//     $('#solution').html(sum);
//   });
// });
$(document).ready(function(){

  $("#calculator").submit(function(event) {
    event.preventDefault();
    // Get all the forms elements and their values in one step
    var stitches = parseInt($(this).find('#stitches').val());
    var rows = parseInt($(this).find('#rows').val());
    var length = parseInt($(this).find('#length').val());
    var width = parseInt($(this).find('#width').val());

    if(document.getElementById('inch').checked) {
    //inch radio button is checked
    var units = "inch";
    }
    
    else if(document.getElementById('cm').checked) {
    //cm radio button is checked
    var units = "cm";
    }

    // alert (values);
    if (isNaN(stitches) || isNaN(rows) || isNaN(length) || isNaN(width)){
      $('#solution').html("Please enter valid input");
    }
    else {
      var numStitches = Math.round(stitches / width*10)/10;
      var numRows = Math.round(rows / length*10)/10;

      $('#solution').html( numStitches + " stitches and " + numRows + " rows per " + units);
    }

   
})
  $(function() {
    $( document ).tooltip();
  
   $( "#stitches" ).tooltip({ content: "Awesome title!" });
  });
});



