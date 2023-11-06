/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = emailInput.value.trim();
  
      if (email === "") {
        // Display an error message if the email input is empty
        messageDiv.textContent = "Please enter a valid email address.";
      } else {
        // Display a success message with the entered email address
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
  
        // You can also reset the form or clear the email input if needed
        // form.reset();
        // emailInput.value = "";
      }
    });
  });
  