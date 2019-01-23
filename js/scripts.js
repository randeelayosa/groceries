$(document).ready(function() {


  $("#grocery-form").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5"];
    var itemInput = [];

    items.forEach(function(item) {
      itemInput.push($("input#" + item).val());
      $("." + item).text(itemInput);
    });

    itemInput.sort();


    console.log(itemInput);



        // var capItems = items.map(function(item) {
        //   return item.toUppercase();
        // });
        // capItems.sort();
        //
        // capItems.forEach(function(item) {
        //   $(".order").append("<li>" + items + "</li>");
        // });



      // var alphabeticalInputs = capitalizedInputs.sort();
      // $("." + blank).text(itemInput.sort());


    $(".order").show();
    $("#grocery-form").toggle();

    event.preventDefault();
  });
});
