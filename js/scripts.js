$(document).ready(function() {
  $("#grocery-form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5"];


    blanks.forEach(function(blank) {
      var itemInput = $("input#" + blank).val();
      $("." + blank).text(itemInput.toUpperCase());
      // var alphabeticalInputs = capitalizedInputs.sort();
      // $("." + blank).text(itemInput.sort());




    });





    $(".order").show();
    $("#grocery-form").toggle();

    event.preventDefault();
  });
});
