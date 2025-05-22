document.getElementById("openBtn").addEventListener("click", () => {
  const container = document.getElementById("giftContainer");
  const giftTop = document.getElementById("giftTop");
  const openBtn = document.getElementById("openBtn");

  // Balloon container (make sure this div exists in your HTML inside container)
  let balloonContainer = document.getElementById("balloonContainer");
  if (!balloonContainer) {
    balloonContainer = document.createElement("div");
    balloonContainer.id = "balloonContainer";
    balloonContainer.style.position = "absolute";
    balloonContainer.style.top = "0";
    balloonContainer.style.left = "0";
    balloonContainer.style.width = "100%";
    balloonContainer.style.height = "100%";
    balloonContainer.style.pointerEvents = "none";
    balloonContainer.style.overflow = "hidden";
    balloonContainer.style.display = "none";
    container.appendChild(balloonContainer);
  }

  // Hide button and show gift + balloons container
  openBtn.style.display = "none";
  container.style.display = "block";
  balloonContainer.style.display = "block";

  setTimeout(() => {
    // Open gift lid
    giftTop.style.transform = "rotate(-60deg) translateX(60px) translateY(-5px)";

    // Confetti burst (optional)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      angle: 90,
    });

    setTimeout(() => {
      confetti({
        particleCount: 2000,
        spread: 160,
        origin: { y: 0 },
      });
    }, 1000);

// Create balloons (using PNG images)
const balloonImages = [
  "dark_blue_balloon.png",
  "green_balloon.png",
  "orange_balloon.png",
  "pink_balloon.png",
  "purple_balloon.png",
  "red_balloon.png",
  "sky_blue_balloon.png",
  "yellow_balloon.png",
];

const balloons = [];

for (let i = 0; i < 60; i++) {
  const balloon = document.createElement("img");
  balloon.src = balloonImages[i % balloonImages.length];
  balloon.style.position = "absolute";
  balloon.style.width = "60px";
  balloon.style.height = "100px";
  balloon.style.left = Math.random() * (window.innerWidth - 60) + "px";
  balloon.style.top = window.innerHeight + "px"; // Start below screen
  balloon.style.opacity = "1";
  balloon.style.pointerEvents = "none";
  balloon.style.transition = "top 6s linear";
  balloonContainer.appendChild(balloon);
  balloons.push(balloon);
}

// Animate upward only
balloons.forEach((balloon, idx) => {
  setTimeout(() => {
    balloon.style.top = "-150px"; // Move up and off-screen
  }, idx * 150);
});

// Optional: remove them after floating
setTimeout(() => {
  balloons.forEach(b => balloonContainer.removeChild(b));
  balloonContainer.style.display = "none";
}, 9000);

/*
  // After balloons floated up, animate them falling down and covering screen
  setTimeout(() => {
    balloons.forEach((balloon, idx) => {
      setTimeout(() => {
        balloon.style.transition = "top 3s ease-in, opacity 3s ease-in, width 3s ease-in, height 3s ease-in";
        balloon.style.top = window.innerHeight + "px";
        balloon.style.opacity = "0.8";
        balloon.style.width = "80px";
        balloon.style.height = "120px";
      }, idx * 150);
    });
  }, 6000);
  */


    // Cleanup balloons after animation ends
    setTimeout(() => {
      balloons.forEach(b => balloonContainer.removeChild(b));
      balloonContainer.style.display = "none";
      // You can trigger next part here (e.g. show a message)
    }, 10000);

  }, 200);
});
