
# Home Page

Created a Home page using html,css and javascript in a modern design concepts. It is fully responsive for any devices.

Added the side bar feature for the mobile, tablet view using the  unctionalities of javascript.

* Based on UI/UX.
* Modern design.
* Responsiveness.




## Lessons Learned

while creating this project i Learned about the properties of css (like animation, media query, transition) and javascript events (like onclick, classList). In this project javascript is used to add the sidebar.

I faced issues in javascript while creating sidebar like how the open and close button should work and when the sidebar is open at that time close button has to appear and while click on that slidebar should close properly.

It takes a several time to resolve all these challanges but using basic knowledge of javascript resolved all the issues. 

Here below the code for slidebar is mentioned.




## JS code for sidebar

```javascript
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

```

