let clock = document.querySelector(".clock-for-js");
const date = new Date();
const hhmmss = date.toLocaleTimeString();
clock.innerHTML = hhmmss;

setInterval(() => {
  const date = new Date();
  const hhmmss = date.toLocaleTimeString();
  clock.innerHTML = hhmmss;
});
