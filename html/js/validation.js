function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = $("#email").val();

  if (validateEmail(email)) {
    $("#email").removeClass("error");
    alert("Thank you for subscribing");
  } else {
    $("#email").addClass("error");
  }
  return false;
}

$("#validate").on("click", validate);


// function validateSearch(search) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(search);
// }

function validSearch() {
  var search = $("#search").val();

  if (search == "") {
    $("#search").addClass("error");
    alert("Please enter a value to search");
  } else {
    $("#search").removeClass("error");
  }
  return false;
}

$("#searchbtn").on("click", validSearch);