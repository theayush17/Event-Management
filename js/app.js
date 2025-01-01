document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".nav-item.dropdown");
  
    dropdownLinks.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });
  
        dropdown.addEventListener("mouseout", function () {
              this.querySelector(".dropdown-menu").classList.remove("show");
          });
    });
});

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
const target = +counter.getAttribute("data-target"); 
const increment = target / 200; 

let current = 0; 

const updateCounter = () => {
    if (current < target) {
    current += increment;
    counter.textContent = Math.ceil(current); 
    setTimeout(updateCounter, 50); 
    } else {
    counter.innerText = `${target}+`; 
    }
};

updateCounter();
});