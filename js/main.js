const themeButton = document.getElementById("theme-button");
const head = document.querySelector("head");
const playerButtons = document.querySelectorAll(".player-button");
const sections = document.querySelectorAll(".player");

themeButton.addEventListener("click", () => {
    let overrideLink = document.getElementById("override-link");
    if (overrideLink) {
        head.removeChild(overrideLink);
        hideAllSections();
    }
    else {
        head.innerHTML += '<link id="override-link" rel="stylesheet" href="./css/override.css">';
        displayAllSections();
    }
});

function displayAllSections() {
    for (section of sections) {
        section.style.display = "block";
    }
}

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
