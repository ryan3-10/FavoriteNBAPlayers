// In my previous submission, it was suggested to me that I keep the nav bar on my secondary theme,
// so I've made this change. The nav bar witht the player buttons is now on both themes, so that
// website funcionality is not changed when changing themes. I've also added page.js and validation.js
// files to my js folder in order to seperate the different functionalities that each one handles.

const playerButtons = document.querySelectorAll(".player-button");
const sections = document.querySelectorAll(".player");

function hideAllSections() {
    for (section of sections) {
        section.style.display = "none";
    }
}

for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].addEventListener("click", () => {
        hideAllSections();
        sections[i].style.display = "block";
    });
}
