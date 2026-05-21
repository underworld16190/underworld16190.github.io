// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Modal handling
const openButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll("[data-close]");
const modals = document.querySelectorAll(".modal");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-modal");
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }
  });
});

function closeAll() {
  modals.forEach(m => {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  });
}

closeButtons.forEach(btn => btn.addEventListener("click", closeAll));
modals.forEach(m => m.addEventListener("click", (e) => {
  if (e.target === m) closeAll();
}));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

// Theme toggle (dark-only by default; adds a light mode if you want later)
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
let isDark = true;

themeToggle.addEventListener("click", () => {
  // For now this just toggles a small UI cue.
  // If you want true light mode later, we can add a :root.light theme.
  isDark = !isDark;
  themeIcon.textContent = isDark ? "🌙" : "☀️";
});
``
