// In my previous submission, it was suggested to me that I keep the nav bar on my secondary theme,
// so I've made this change. The nav bar witht the player buttons is now on both themes, so that
// website funcionality is not changed when changing themes. I've also added page.js and validation.js
// files to my js folder in order to seperate the different functionalities that each one handles.

const showSectionButtons = document.querySelectorAll(".show-section");
const hiddenSections = document.querySelectorAll(".hidden");

function hideAllSections() {
    for (section of hiddenSections) {
        section.style.display = "none";
    }
}

for (let i = 0; i < showSectionButtons.length; i++) {
    showSectionButtons[i].addEventListener("click", () => {
        hideAllSections();
        hiddenSections[i].style.display = "block";
    });
}
