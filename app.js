const restartBtn = document.getElementById("restart");

let popped = 0;
playGame();

function playGame() {
  console.log("play");
  document.addEventListener("mouseover", function (e) {
    if (e.target.className === "balloon") {
      e.target.style.backgroundColor = "#eee";
      e.target.textContent = "POP";
      popped++;
      removeEvent(e);
      checkAllPopped();
    }
  });
}

function removeEvent(e) {
  e.target.removeEventListener("mouseover", function () {});
}

function checkAllPopped() {
  if (popped === 24) {
    const gallery = document.getElementById("balloon-gallery");
    const message = document.querySelector(".all-balloons-pop");
    gallery.innerHTML = "";
    message.style.display = "block";
    restartBtn.style.display = "block";
  }
}

restartBtn.addEventListener("click", (e) => {
  if (e.target.id === "restart") {
    window.location.reload();
  }
});
