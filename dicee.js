document.querySelector(".img1").setAttribute("src", "./images/dice6.png");

document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

function declareWinner() {
  var imagesArray = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
  var randomImg1 = Math.floor(Math.random() * imagesArray.length);
  var randomImg2 = Math.floor(Math.random() * imagesArray.length);

  document.querySelector(".img1").setAttribute("src", imagesArray[randomImg1]);
  document.querySelector(".img2").setAttribute("src", imagesArray[randomImg2]);

  if (randomImg1 > randomImg2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
  } else if (randomImg2 > randomImg1) {
    document.querySelector("h1").innerHTML = " Player2 Wins! 🚩 ";
  } else if (imagesArray[randomImg1] === imagesArray[randomImg2]) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

window.onload = function () {
  // Check if the page is reloaded from the "Start Game" button
  if (sessionStorage.getItem("gameStarted") === "true") {
    declareWinner();
  } else {
    // If the page is reloaded via the browser or initially loaded, reset the session storage
    sessionStorage.setItem("gameStarted", "false");
  }
};

// Event listener for "Restart the Game" button
document.getElementById("restartBtn").addEventListener("click", function () {
  sessionStorage.setItem("gameStarted", "false"); // Mark the game as not started
  location.reload(); // Reload the page to return to initial state
});

// Event listener for "Start Game" button
document.getElementById("startBtn").addEventListener("click", function () {
  sessionStorage.setItem("gameStarted", "true"); // Mark the game as started
  location.reload(); // Reload the page to start the game
});
