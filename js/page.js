const themeButton = document.getElementById("theme-button");
const head = document.querySelector("head");

themeButton.addEventListener("click", () => {
   let overrideLink = document.getElementById("override-link");
   if (overrideLink) {
       head.removeChild(overrideLink);
   }
   else {
       head.innerHTML += '<link id="override-link" rel="stylesheet" href="./css/override.css">';
   }
   hideAllSections();
});