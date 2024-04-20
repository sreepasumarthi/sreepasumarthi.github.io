/*Ham Menu*/

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/*Accordion*/
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/*Preview Pages*/
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".size");
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  let close = document.querySelector(".close");

  images.forEach((image) => {
      image.addEventListener("click", () => {
          const text = image.getAttribute("data-text");
          popupContent.innerHTML = `<span class='close'>&times;</span><p>${text}</p>`;
          popup.style.display = "block";

          close = document.querySelector(".close"); // Reassign close after it's added dynamically
          close.addEventListener("click", () => {
              popup.style.display = "none";
          });
      });
  });

  window.addEventListener("click", (event) => {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});





