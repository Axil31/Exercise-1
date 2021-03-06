function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  console.log("Audio playing");
}

function change()
{

	console.log("Changing parameters");
}
	
function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
  console.log("Transition removed");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
console.log("Welcome");

window.addEventListener("keydown", play);
