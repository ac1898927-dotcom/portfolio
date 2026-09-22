const loader = document.getElementById("loader");
window.addEventListener("load", () => setTimeout(() => loader.classList.add("hide"), 500));

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const scene = document.querySelector(".scene");
window.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 700) return;
  const x = (e.clientX / window.innerWidth - .5) * 18;
  const y = (e.clientY / window.innerHeight - .5) * -18;
  scene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

const revealElements = document.querySelectorAll(
  ".section-heading, .glass-card, .skill-card, .feature-card, .timeline-item"
);
revealElements.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));
