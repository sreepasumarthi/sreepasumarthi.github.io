/*Ham Menu*/

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/*Learn More Button*/

document.addEventListener("DOMContentLoaded", function() {
  var learnMoreBtns = document.querySelectorAll(".learnMoreBtn");

  learnMoreBtns.forEach(function(learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function() {
      var learnMoreText = this.nextElementSibling;
      learnMoreText.classList.toggle("hidden");
    });

    var closeBtn = learnMoreBtn.nextElementSibling.querySelector(".closeBtn");
    closeBtn.addEventListener("click", function() {
      var learnMoreText = this.parentElement;
      learnMoreText.classList.add("hidden");
    });
  });
});



