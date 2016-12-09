  /*alert("Thanks for downloading!")
  $("button").on("click", function() {
    alert("Have a great day :)")
  });*/

  function myFunction() {
      var x;
      if (confirm("Press a button!") == true) {
          x = "Thanks for the download!";
      } else {
          x = "You pressed Cancel!";
      }
      document.getElementById("demo").innerHTML = x;
  }
