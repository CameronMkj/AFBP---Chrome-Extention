console.log("~You feel a presense watching over you...");
userInput = prompt("Are you sure you want to procrastinate? (Y/N)");
userInputTwo = userInput.toLowerCase();
boolOne = false;
while (!boolOne) {
  if (userInputTwo == "y") {
    userConfirm = confirm("Are you Sure?");
    if (userConfirm == false) {
      alert("Refreshing the page...")
      location.reload();
    } else if (userConfirm == true) {
      boolOne = true;
    }
  } else if (userInputTwo == "n") {
    alert("Redirecting you to Google.com...")
    window.location.replace('https://www.google.com');
    boolOne = true;
  } else {
    alert("That is not a valid option!");
  }
}
