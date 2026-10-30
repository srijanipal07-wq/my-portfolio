// Mobile navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}

// Animated introduction text
const words = ["CSE Student", "Python Programmer", "Aspiring Web Developer", "Tech Enthusiast"];
const dynamicText = document.getElementById("dynamic-text");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!dynamicText) return;

  const currentWord = words[wordIndex];
  dynamicText.textContent = currentWord.substring(0, charIndex);

  if (!deleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 105);
  } else if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    setTimeout(typeEffect, 1150);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 55);
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 350);
  }
}

if (dynamicText) typeEffect();
