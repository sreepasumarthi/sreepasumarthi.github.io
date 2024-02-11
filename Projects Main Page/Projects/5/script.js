document.addEventListener("DOMContentLoaded", function() {
    var learnMoreBtn = document.getElementById("learnMoreBtn");
    var learnMoreText = document.getElementById("learnMoreText");
    var closeBtn = document.getElementById("closeBtn");
  
    learnMoreBtn.addEventListener("click", function() {
      learnMoreText.classList.toggle("hidden");
    });
  
    closeBtn.addEventListener("click", function() {
      learnMoreText.classList.add("hidden");
    });
  });
  