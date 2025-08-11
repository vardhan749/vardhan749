document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page refresh
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("formResponse").innerText = "Thank you, " + name + "! Your message has been received.";
        this.reset();
    } else {
        document.getElementById("formResponse").innerText = "Please fill all fields.";
    }
});
