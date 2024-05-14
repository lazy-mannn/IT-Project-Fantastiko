// Function to hide a button if its href matches the current URL
function hideButton(current_btn_in_the_array) {
    let currentUrl = window.location.href;
    if (current_btn_in_the_array.href === currentUrl) {
        current_btn_in_the_array.style.display = 'none';
    }
}

// Get all menu buttons
let menuButtons = document.querySelectorAll('.menu-btn');

// Loop through each button and call the hideButton function for each
menuButtons.forEach(function(current_btn_in_the_array) {
    hideButton(current_btn_in_the_array);
});
//Function that changes the margin of the images so the footer look normal and not in two lines
function changeCss() {
    let currentUrl = window.location.href;
    const imageElements = document.querySelectorAll(".foot img");

    if (currentUrl.includes("recipes.html")) {
        imageElements.forEach(function(image) {
            image.style.margin = "2em";
        });
    }
}

changeCss();


function myFunc() { 
    window.location.href = "alergeni.html"; 
} 

function myFunc1() { 
    window.location.href = "pekarna.html"; 
} 