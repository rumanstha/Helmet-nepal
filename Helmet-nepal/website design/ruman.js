let popup = document.getElementById("popup");

function openPopup() {
  console.log("Popup opened");
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function openConfirmPopup(event) {
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var phoneNumber = document.getElementById("inputAddress2").value;
  var selectedHelmet = document.getElementById("inputHelmet").value;
  var selectedDesign = document.getElementById("inputDesign").value;
  var sizeOptions = document.getElementsByName("size");
  var selectedSize = "";

  for (var i = 0; i < sizeOptions.length; i++) {
    if (sizeOptions[i].checked) {
      selectedSize = sizeOptions[i].value;
      break;
    }
  }

  // validation logic
  if (firstName == "") {
    alert("Enter for firstName");
  }
  if (phoneNumber.length !== 10) {
    alert("Phone number should be exactly 10 digits");
  } else if (isNaN(phoneNumber)) {
    alert("Phone number should be contain numbers only.");
  } else if (selectedHelmet == "") {
    alert("please select helmet");
  } else if (selectedSize == "") {
    alert("Please select a size");
  } else if (selectedDesign == "") {
    alert("please enter your design");
  } else {
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
  }

  document.getElementById(
    "displayMessage"
  ).innerHTML = ` Your name is ${firstName} ${lastName} and your phone number is ${phoneNumber}`;
  document.getElementById("helmet").innerHTML = selectedHelmet;
  document.getElementById("design").innerHTML = selectedDesign;
  document.getElementById("size").innerHTML = selectedSize;
}

window.addEventListener("scroll", function () {
  const aboutSection = document.getElementById("aboutSection");
  const aboutBtn = document.getElementById("aboutBtn");

  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;

  if (sectionPosition < screenPosition && sectionPosition >= 0) {
    aboutBtn.classList.add("active");
  } else {
    aboutBtn.classList.remove("active");
  }
});

document
  .getElementById("popupForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });

function validateForm() {
  // Perform custom JavaScript validation here if needed
  // For example:
  var phoneNumber = document.getElementById("inputAddress2").value;
  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    alert("Phone number should be exactly 10 digits");
    return false; // Prevent form submission
  }
  return true; // Allow form submission
}
