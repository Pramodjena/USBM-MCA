// function updateClock() {
//   const clock = document.getElementById("clock");

//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// updateClock();
// setInterval(updateClock, 1000);

function updateClock() {
  const clock = document.getElementById("clock");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock(); // invoke or call
setInterval(updateClock, 1000);
