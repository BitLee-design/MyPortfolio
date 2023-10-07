// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements you want to manipulate
    var heading = document.querySelector("h1");
    var submitButton = document.querySelector("#submit-button");
    
    // Add event listener to a button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Access form input values
        var nameInput = document.querySelector("#name");
        var emailInput = document.querySelector("#email");
        var messageInput = document.querySelector("#message");
        
        // Display form input values in console
        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
        console.log("Message:", messageInput.value);
        
        // Clear form input values
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });
    
    // Manipulate the heading element
    heading.style.color = "red";
    heading.innerHTML = "Welcome to My AI web page";
});