"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".item");

  accordionItems.forEach((item) => {
    const headers = item.querySelector(".header-accordion");

    headers.addEventListener("click", () => {
      // Toggle the open class for the clicked item
      item.classList.toggle("open");

      // Close other items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
        }
      });
    });
  });
});

const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
