let phoneRegex =  /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const form = document.getElementById("myform");
const requiredInputs = form.querySelectorAll("[required]");
const phoneInput = form.querySelector("#phone");
const emailInput = form.querySelector("#email");
const zipCodeInput = form.querySelector("#zip");
const stateInput = form.querySelector("#state");
const checkboxDiv = document.getElementById("checkbox-div");

for (input of requiredInputs) {
   input.addEventListener("change", (e) => {
      validateNotEmpty(e.target);
   });
}

stateInput.addEventListener("change", (e) => {
   validateState(e.target);
});

zipCodeInput.addEventListener("change", (e) => {
   validateZipCode(e.target);
});

phoneInput.addEventListener("change", (e) => {
   validatePhone(e.target);
});

emailInput.addEventListener("change", (e) => {
   validateEmail(e.target);
});

form.addEventListener("submit", (e) => {
   let valid = true;

   e.preventDefault();
   e.stopPropagation();
   for (input of requiredInputs) {
      if (!validateNotEmpty(input)) {
         valid = false;
      }
   }

   if (
      !validateCheckboxDiv() ||
      !validateState(stateInput) ||
      !validateZipCode(zipCodeInput) ||
      !validatePhone(phoneInput) ||
      !validateEmail(emailInput) 
      ) {
         valid = false;
      }
   
   if (valid) {
      hideAllSections();
      document.getElementById("thank-you").style.display = "block";
   }
});

function validateNotEmpty(element) {
   const errorMessageClass = "error-message";
   const existingErrorMessage = element.parentElement.querySelector(`.${errorMessageClass}`);

   if (element.value === "" && !element.classList.contains("invalid")) {
      element.style.border = "1px solid red";
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "This field is required";
         element.parentElement.appendChild(errorMessage);
      }
   }
   else if (element.value !== "") {
      element.style.border = "1px solid #00ff00";
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
   return false;
}

function validateState(element) {
   const errorMessageClass = "error-message";
   const existingErrorMessage = element.parentElement.querySelector(`.${errorMessageClass}`);

   if (!stateAbbreviations.includes(element.value.toUpperCase())) {
      element.style.border = "1px solid red";
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "Invalid state abbreviation";
         element.parentElement.appendChild(errorMessage);
      }
      return false;
   }
   else {
      element.style.border = "1px solid #00ff00";
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
}

function validateZipCode(element) {
   const errorMessageClass = "error-message";
   const existingErrorMessage = element.parentElement.querySelector(`.${errorMessageClass}`);

   if (!zipCodeRegex.test(element.value)) {
      element.style.border = "1px solid red";
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "Invalid zip code";
         element.parentElement.appendChild(errorMessage);
      }
      return false;
   }
   else {
      element.style.border = "1px solid #00ff00";
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
}

function validatePhone(element) {
   const errorMessageClass = "error-message";
   const existingErrorMessage = element.parentElement.querySelector(`.${errorMessageClass}`);

   if (!phoneRegex.test(element.value)) {
      element.style.border = "1px solid red";
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "Invalid phone number";
         element.parentElement.appendChild(errorMessage);
      }
      return false;
   }
   else {
      element.style.border = "1px solid #00ff00";
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
}

function validateEmail(element) {
   const errorMessageClass = "error-message";
   const existingErrorMessage = element.parentElement.querySelector(`.${errorMessageClass}`);

   if (!emailRegex.test(element.value)) {
      element.style.border = "1px solid red";
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "Invalid email address";
         element.parentElement.appendChild(errorMessage);
      }
      return false;
   }
   else {
      element.style.border = "1px solid #00ff00";
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
}

function validateCheckboxDiv() {
   const errorMessageClass = "error-message";
   let valid = false;
   const checkboxes = checkboxDiv.querySelectorAll("input[type='checkbox']");
   for (checkbox of checkboxes) {
      if (checkbox.checked) {
         valid = true;
      }
   }

   if (!valid) {
      const existingErrorMessage = checkboxDiv.querySelector(`.${errorMessageClass}`);
      if (!existingErrorMessage) {
         const errorMessage = document.createElement("p");
         errorMessage.className = errorMessageClass;
         errorMessage.textContent = "You must select at least one checkbox";
         checkboxDiv.appendChild(errorMessage);
      }
      return false;
   }
   else {
      const existingErrorMessage = checkboxDiv.querySelector(`.${errorMessageClass}`);
      if (existingErrorMessage) {
         existingErrorMessage.remove();
      }
      return true;
   }
}