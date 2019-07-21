$(document).ready(function() {
    $("#design").click(function() {
      $("#design").toggle();
      $("#design2").toggle();
    });
  });
  $(document).ready(function() {
    $("#design2").click(function() {
      $("#design").toggle();
      $("#design2").toggle();
    });
  });

$(document).ready(function() {
    $("#development").click(function() {
      $("#development").toggle();
      $("#development2").toggle();
    });
});
$(document).ready(function() {
    $("#development2").click(function() {
      $("#development").toggle();
      $("#development2").toggle();
    });
});

$(document).ready(function() {
    $("#product").click(function() {
      $("#product").toggle();
      $("#product2").toggle();
    });
});
$(document).ready(function() {
    $("#product2").click(function() {
      $("#product").toggle();
      $("#product2").toggle();
    });
});

$(document).ready(function(){
    $("form").submit(function(){
      alert("we have recieved your your message. Thank you for reaching out to us.");
    });
  });