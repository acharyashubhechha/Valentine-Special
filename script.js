const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveMessage = document.getElementById("loveMessage");
const catwomanImg = document.getElementById("catwomanImg");
const confettiContainer = document.getElementById("confetti-container");
const paragraph = document.querySelector(".container p");

// Make NO button run away from cursor
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Confetti Animation Function
function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerText = "🦇";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.fontSize = 20 + Math.random() * 20 + "px";

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
  
  // Add hearts too
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("confetti");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.fontSize = 15 + Math.random() * 15 + "px";

    confettiContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

// YES button clicked
yesBtn.addEventListener("click", () => {
  // Create confetti effect
  createConfetti();

  // Change paragraph text
  paragraph.textContent = "You made the right choice! 🦇❤️";

  // Hide catwoman image immediately
  catwomanImg.style.display = "none"; 

  // Show love message
  loveMessage.classList.remove("hidden");
  
  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  
  // Change background color
  document.body.style.background = "linear-gradient(135deg, #ff8fab, #ff4d6d)";
});
