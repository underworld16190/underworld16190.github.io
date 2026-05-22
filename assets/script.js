document.getElementById("year").textContent = new Date().getFullYear();

// highlight active nav
const path = location.pathname.replace(/\/$/, "");
document.querySelectorAll(".nav a").forEach(a => {
  const href = a.getAttribute("href").replace(/\/$/, "");
  if (href !== "/" && href === path) a.classList.add("active");
  if (href === "/" && (path === "" || path === "/index.html")) a.classList.add("active");
});
