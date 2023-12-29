function addNumber(num) {
  document.getElementById("inputBox").value += num;
}

function validateInput(num) {
  var inputVal = document.getElementById("inputBox").value;
  if (inputVal == num) {
    window.location.href = "/SeleniumTestSite/correct"; // This will navigate to <site root>/correct
  } else {
    document.getElementById("inputBox").value = ""; // Clear the input box
  }
}
