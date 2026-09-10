"use strict";

// Select all navigation buttons
const navLinks = document.querySelectorAll("[data-nav-link]");

// Select all portfolio pages
const pages = document.querySelectorAll("[data-page]");

// Add click event to each navigation button
navLinks.forEach(function (navLink) {

  navLink.addEventListener("click", function () {

    // Get the page name from the button text
    const pageName = navLink.textContent.trim().toLowerCase();

    // Remove active class from all navigation buttons
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add active class to clicked button
    navLink.classList.add("active");

    // Show the selected page
    pages.forEach(function (page) {

      if (page.dataset.page === pageName) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    // Scroll to top of portfolio
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


//-----------------------------------
// SIDEBAR CONTACT BUTTON
//-----------------------------------

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {

  sidebarBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

  });

}
// View Projects button
const projectButton = document.querySelector("[data-project-btn]");

if (projectButton) {
  projectButton.addEventListener("click", function () {

    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.textContent.trim().toLowerCase() === "projects") {
        link.classList.add("active");
      }
    });

    pages.forEach(function (page) {
      page.classList.remove("active");

      if (page.dataset.page === "projects") {
        page.classList.add("active");
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });
}