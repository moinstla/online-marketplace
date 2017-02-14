$(document).ready(function() {
  $("form").submit(function(event) {

    var name = $("input#name").val();
    var address = $("input#address").val();

    $(".name").text(name);
    $(".address").text(address);

    $("#receipt").show();

    event.preventDefault();
  });
});
