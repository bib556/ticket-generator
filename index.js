document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let fullName = document.getElementById("Name").value.trim();
    let email = document.getElementById("Email").value.trim();
    let githubUsername = document.getElementById("account").value.trim();

    // Regular Expressions for validation
    let nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email pattern
    let githubRegex = /^@[\w-]+$/; // Starts with @ and contains only letters, numbers, underscores, or hyphens

    let errorMessage = "";

    // Validation Checks
    if (!nameRegex.test(fullName)) {
        errorMessage += "⚠️ Invalid Name: Only letters and spaces are allowed.\n";
    }
    if (!emailRegex.test(email)) {
        errorMessage += "⚠️ Invalid Email: Please enter a valid email address.\n";
    }
    if (!githubRegex.test(githubUsername)) {
        errorMessage += "⚠️ Invalid GitHub Username: It must start with '@' and contain only letters, numbers, underscores, or hyphens.\n";
    }

    // Display Warnings or Redirect
    if (errorMessage) {
        alert(errorMessage); // Show warning messages
    } else {
        // Redirect with URL parameters
        window.location.href = `ticket.html?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&github=${encodeURIComponent(githubUsername)}`;
    }
});
