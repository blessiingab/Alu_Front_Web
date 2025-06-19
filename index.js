// index.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form inputs
        let isValid = true;

        if (!name) {
            showError("name", "Name is required.");
            isValid = false;
        } else {
            clearError("name");
        }

        if (!email) {
            showError("email", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Invalid email format.");
            isValid = false;
        } else {
            clearError("email");
        }

        if (!subject) {
            showError("subject", "Subject is required.");
            isValid = false;
        } else {
            clearError("subject");
        }

        if (!message) {
            showError("message", "Message is required.");
            isValid = false;
        } else {
            clearError("message");
        }

        // If the form is valid, display a success message
        if (isValid) {
            alert("Thank you for your message, " + name + "! We will get back to you soon.");
            form.reset(); // Reset the form
        }
    });

    function showError(fieldId, message) {
        const errorMessage = document.getElementById(fieldId + "-error");
        errorMessage.textContent = message;
    }

    function clearError(fieldId) {
        const errorMessage = document.getElementById(fieldId + "-error");
        errorMessage.textContent = "";
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});