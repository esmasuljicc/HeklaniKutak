document.addEventListener("DOMContentLoaded", function() {
    var openTipsBtn = document.getElementById("openTipsBtn");
    var facts = document.getElementById("facts");
    var closeBtn = document.querySelector(".close-btn");

    console.log("openTipsBtn element:", openTipsBtn);
    console.log("facts element:", facts);
    console.log("closeBtn element:", closeBtn);

    if (openTipsBtn) {
        openTipsBtn.addEventListener("click", function() {
            console.log("Open Tips button clicked!");
            if (facts) {
                facts.style.display = "block";
                console.log("Facts modal displayed.");
            } else {
                console.error("Facts modal element not found.");
            }
        });
    } else {
        console.error("Open Tips button element not found.");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            console.log("Close button clicked!");
            if (facts) {
                facts.style.display = "none";
                console.log("Facts modal hidden.");
            } else {
                console.error("Facts modal element not found (in close button listener).");
            }
        });
    } else {
        console.error("Close button element not found.");
    }

    window.addEventListener("click", function(event) {
        if (facts && event.target == facts) {
            console.log("Clicked outside the modal.");
            facts.style.display = "none";
            console.log("Facts modal hidden (clicked outside).");
        }
    });
});
