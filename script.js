window.addEventListener("load", () => {
  const numbers = document.querySelectorAll(".number");
  const container = document.querySelector(".numbers-container");

  // Get size and position of the container
  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const radius = rect.width / 2 - 26; // radius with padding (adjust 40 if needed)

  numbers.forEach((num, i) => {
    num.style.display = "flex";
    const angle = (i + 1) * 30 * (Math.PI / 180); // convert degrees to radians
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);

    num.style.left = `${x}px`;
    num.style.top = `${y}px`;
  });
});
