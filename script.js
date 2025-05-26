window.addEventListener("load", () => {
  const numbers = document.querySelectorAll(".number");
  const container = document.querySelector(".numbers-container");

  // Get size and position of the container
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const radius = rect.width / 2 - 28; // radius with padding (adjust 40 if needed)

  numbers.forEach((num, i) => {
    num.style.display = "flex";
    const angle = (i + 1) * 30 * (Math.PI / 180); // convert degrees to radians
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);

    num.style.left = `${x}px`;
    num.style.top = `${y}px`;
  });
  handsheight(rect.height);
});
function handsheight(diameter) {
  radius = diameter / 2 - 28;
  let hours = document.querySelector(".hour");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  hours.style.height = `${radius * 0.55}px`;
  minutes.style.height = `${radius * 0.75}px`;
  seconds.style.height = `${radius * 0.9}px`;
}
function updateClockHandsSmooth() {
  const secondsHand = document.querySelector(".seconds");
  const minutesHand = document.querySelector(".minutes");
  const hoursHand = document.querySelector(".hour");

  const now = new Date();

  const milliseconds = now.getMilliseconds();
  const seconds = now.getSeconds() + milliseconds / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = (hours % 12) * 30;

  secondsHand.style.transform = `rotate(${secondDeg}deg)`;
  minutesHand.style.transform = `rotate(${minuteDeg}deg)`;
  hoursHand.style.transform = `rotate(${hourDeg}deg)`;

  secondsHand.style.display = "block";
  minutesHand.style.display = "block";
  hoursHand.style.display = "block";

  requestAnimationFrame(updateClockHandsSmooth);

  updateDigitalClock(now);
}
// Call it every second
setInterval(updateClockHandsSmooth, 1000);
updateClockHandsSmooth();
function updateDigitalClock(time) {
  const digitalHour = document.querySelector(".d-hour");
  const digitalMinutes = document.querySelector(".d-minutes");
  const digitalSeconds = document.querySelector(".d-seconds");
  const meridian = document.querySelector(".meridian");

  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Convert to 12-hour format
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;

  // Add leading zeros
  digitalHour.textContent = hour.toString().padStart(2, "0");
  digitalMinutes.textContent = minutes.toString().padStart(2, "0");
  digitalSeconds.textContent = seconds.toString().padStart(2, "0");
  meridian.textContent = ampm;
}
