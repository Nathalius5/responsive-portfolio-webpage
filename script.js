//Responzivni menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  toggleMenu();
});

document.querySelectorAll("nav li a").forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenu();
  });
});

function toggleMenu() {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-square-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-square-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
}

//Light and dark mode
const logo = document.querySelector(".logo");
const icon = document.getElementById("icon");
const body = document.body;

logo.addEventListener("click", () => {
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    body.style.color = "black";
    body.style.backgroundColor = "white";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    body.style.color = "white";
    body.style.backgroundColor = "black";
  }
});

//dynamický text úvodu
document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.querySelector(".dynamic-text");
  const textArray = [
    "Vítejte na mé stránce",
    "Aktuálně pracuji jako bankéř",
    "Baví mě programovat",
    "Rád se učím novým věcem",
  ];

  let textIndex = 0;

  function changeText() {
    dynamicText.style.opacity = 0;
    setTimeout(function () {
      dynamicText.textContent = textArray[textIndex];
      textIndex = (textIndex + 1) % textArray.length;
      dynamicText.style.opacity = 1;
    }, 5000);
  }
  changeText();
  setInterval(changeText, 5000);
});

//kontaktni formular//
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const submitButton = document.querySelector("button[type='submit']");

  // Funkce na validaci emailu
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function updateEmailError(input, message, valid) {
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.classList.toggle("valid", valid);
  }

  function handleEmailValidation() {
    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;

    if (email === confirmEmail && validateEmail(email)) {
      updateEmailError(emailInput, "Emaily se shodují a jsou v pořádku", true);
      updateEmailError(confirmEmailInput, "", true);
      submitButton.disabled = false;
    } else if (!validateEmail(email)) {
      if (email.trim() !== "") {
        updateEmailError(emailInput, "Špatně zadaný email", false);
      } else {
        updateEmailError(emailInput, "", true);
      }
      submitButton.disabled = true;
    } else {
      updateEmailError(emailInput, "", true);
      updateEmailError(confirmEmailInput, "Emaily se neshodují", false);
      submitButton.disabled = true;
    }
  }
  emailInput.addEventListener("blur", handleEmailValidation);
  confirmEmailInput.addEventListener("blur", handleEmailValidation);

  handleEmailValidation();
});

// scrollovaci button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
