// const form = document.getElementById("contactForm");
// const step1 = document.getElementById("formStep1");
// const step2 = document.getElementById("formStep2");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // prevent page reload
//   step1.classList.add("hidden");
//   step2.classList.remove("hidden");
// });

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 7; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

const captchaDisplay = document.getElementById("generatedCaptcha");
const refreshBtn = document.getElementById("refreshCaptcha");
const secondform = document.getElementById("second-form");

function setNewCaptcha() {
  const newCaptcha = generateCaptcha();
  captchaDisplay.textContent = newCaptcha;
  // Clear the input field when captcha is refreshed
  document.getElementById("captcha").value = "";
}

refreshBtn.addEventListener("click", setNewCaptcha);

// Stage (select)
document.getElementById("stage").addEventListener("change", function () {
  if (!this.value) {
    showError("error-stage", "Please select your stage.");
  } else {
    clearError("error-stage");
  }
});

document
  .getElementById("cloud-service")
  .addEventListener("change", function () {
    if (!this.value) {
      showError("error-cloud-service", "Please select a cloud service.");
    } else {
      clearError("error-cloud-service");
    }
  });

document.getElementById("cloud-data").addEventListener("change", function () {
  if (!this.value) {
    showError("error-data", "Please select a cloud data platform.");
  } else {
    clearError("error-data");
  }
});

document.getElementById("data-tool").addEventListener("change", function () {
  if (!this.value) {
    showError("error-data-tool", "Please select a data visualisation tool.");
  } else {
    clearError("error-data-tool");
  }
});

document.getElementById("usecase").addEventListener("change", function () {
  if (!this.value) {
    showError("error-usecase", "Please select a business usecase.");
  } else {
    clearError("error-usecase");
  }
});

document.getElementById("emailUpdates").addEventListener("change", function () {
  if (!this.checked) {
    showError("error-email-update", "Please tick the box.");
  } else {
    clearError("error-email-update");
  }
});

document.getElementById("captcha").addEventListener("input", function () {
  const enteredCaptcha = this.value.trim();
  const displayedCaptcha =
    document.getElementById("generatedCaptcha").textContent;
  if (!enteredCaptcha) {
    showError("error-captcha", "Please enter the captcha.");
  } else if (enteredCaptcha.toUpperCase() !== displayedCaptcha.toUpperCase()) {
    showError("error-captcha", "Captcha does not match.");
  } else {
    clearError("error-captcha");
  }
});
//Second form submission

secondform.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach(function (el) {
    el.style.display = "none";
    el.textContent = "";
  });

  let hasError = false;

  const stage = document.getElementById("stage");
  const cloudService = document.getElementById("cloud-service");
  const cloudData = document.getElementById("cloud-data");
  const dataTool = document.getElementById("data-tool");
  const usecase = document.getElementById("usecase");
  const emailCheckbox = document.getElementById("emailUpdates");
  const enteredCaptcha = document.getElementById("captcha").value;
  const captchaDisplay = document.getElementById("generatedCaptcha");
  const displayedCaptcha = captchaDisplay.textContent;

  if (!stage.value) {
    showError("error-stage", "Please select your stage.");
    hasError = true;
  }
  if (!cloudService.value) {
    showError("error-cloud-service", "Please select a cloud service.");
    hasError = true;
  }
  if (!cloudData.value) {
    showError("error-data", "Please select a cloud data platform.");
    hasError = true;
  }
  if (!dataTool.value) {
    showError("error-data-tool", "Please select a data visualisation tool.");
    hasError = true;
  }
  if (!usecase.value) {
    showError("error-usecase", "Please select a business usecase.");
    hasError = true;
  }
  if (!emailCheckbox.checked) {
    showError("error-email-update", "Please tick the box.");
    hasError = true;
  }
  if (!enteredCaptcha.trim()) {
    showError("error-captcha", "Please enter the captcha.");
    hasError = true;
  } else if (enteredCaptcha.toUpperCase() !== displayedCaptcha.toUpperCase()) {
    showError("error-captcha", "Captcha does not match.");
    hasError = true;
    setNewCaptcha();
  }

  if (hasError) {
    return;
  }

  alert("Form submitted successfully!");
});

setNewCaptcha();

//Validations in first form
document.getElementById("firstName").addEventListener("input", function () {
  const firstName = this.value.trim();
  if (!firstName) {
    showError("error-firstName", "First name is required.");
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    showError("error-firstName", "Only letters are allowed in first name.");
  } else {
    clearError("error-firstName");
  }
});
document.getElementById("lastName").addEventListener("input", function () {
  const val = this.value.trim();
  if (!val) {
    showError("error-lastName", "Last name is required.");
  } else if (!/^[A-Za-z]+$/.test(val)) {
    showError("error-lastName", "Only letters are allowed in last name.");
  } else {
    clearError("error-lastName");
  }
});
document.getElementById("email").addEventListener("input", function () {
  const val = this.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    showError("error-email", "Email is required.");
  } else if (!emailPattern.test(val)) {
    showError("error-email", "Please enter a valid email address.");
  } else {
    clearError("error-email");
  }
});
document.getElementById("telephone").addEventListener("input", function () {
  const val = this.value.trim();
  if (!/^\d{10}$/.test(val)) {
    showError("error-telephone", "Please enter a 10-digit number.");
  } else {
    clearError("error-telephone");
  }
});
document.getElementById("job").addEventListener("change", function () {
  if (!this.value) {
    showError("error-job", "Please select a job.");
  } else {
    clearError("error-job");
  }
});
document.getElementById("companyName").addEventListener("input", function () {
  const val = this.value.trim();
  if (!val) {
    showError("error-company", "Company name is required.");
  } else if (!/^[A-Za-z0-9@-]+$/.test(val)) {
    showError(
      "error-company",
      "Company name can only contain letters, numbers, @, and -."
    );
  } else {
    clearError("error-company");
  }
});
document.getElementById("industry").addEventListener("change", function () {
  if (!this.value) {
    showError("error-industry", "Please select an industry.");
  } else {
    clearError("error-industry");
  }
});
document.getElementById("country").addEventListener("change", function () {
  if (!this.value) {
    showError("error-country", "Please select a country.");
  } else {
    clearError("error-country");
  }
});

// Form submission

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach(function (el) {
    el.style.display = "none";
    el.textContent = "";
  });

  let hasError = false;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const telephone = document.getElementById("telephone");
  const industry = document.getElementById("industry");
  const job = document.getElementById("job");
  const country = document.getElementById("country");

  if (!firstName.value.trim()) {
    showError("error-firstName", "First name is required");
    hasError = true;
  } else if (!/^[A-Za-z]+$/.test(firstName.value.trim())) {
    showError("error-firstName", "Only letters are allowed in first name");
    hasError = true;
  }

  if (!lastName.value.trim()) {
    showError("error-lastName", "Last name is required");
    hasError = true;
  } else if (!/^[A-Za-z]+$/.test(lastName.value.trim())) {
    showError("error-lastName", "Only letters are allowed in last name");
    hasError = true;
  }

  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue) {
    showError("error-email", "Email is required");
    hasError = true;
  } else if (!emailPattern.test(emailValue)) {
    showError("error-email", "Please enter a valid email address");
    hasError = true;
  }

  if (!/^\d{10}$/.test(telephone.value)) {
    showError("error-telephone", "Please enter a 10-digit number");
    hasError = true;
  }

  const companyName = document.getElementById("companyName");

  if (!companyName.value.trim()) {
    showError("error-company", "Company name is required");
    hasError = true;
  } else if (!/^[A-Za-z0-9@-]+$/.test(companyName.value.trim())) {
    showError(
      "error-company",
      "Company name can only contain letters, numbers, @, and -."
    );
    hasError = true;
  }
  if (!job.value) {
    showError("error-job", "Please select a job");
    hasError = true;
  }

  if (!industry.value) {
    showError("error-industry", "Please select an industry");
    hasError = true;
  }

  if (!country.value) {
    showError("error-country", "Please select a country");
    hasError = true;
  }

  if (!hasError) {
    document.getElementById("formStep1").classList.add("hidden");
    document.getElementById("formStep2").classList.remove("hidden");
  }
});

function showError(id, message) {
  const errorDiv = document.getElementById(id);
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  }
}
function clearError(id) {
  const errorDiv = document.getElementById(id);
  if (errorDiv) {
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  }
}
