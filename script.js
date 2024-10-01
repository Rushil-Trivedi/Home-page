const navLinks = document.querySelector("#nav-links");
let toggleBtn = document.querySelector("#nav-toggle");
let closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
  closeBtn.style.display = "block";
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  toggleBtn.style.display = "block";
  closeBtn.style.display = "none";
});
