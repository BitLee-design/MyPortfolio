// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements you want to manipulate
    var heading = document.querySelector("h1");
    var clickHereButton = document.querySelector("#clickHere-button");
    
    // Add event listener to a button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Access form input values
        var clickHereInput = document.querySelector("#Click Here");
        
        // Display form input values in console
        console.log("ClickHere:", clickHereInput.value);
        
        // Clear form input values
        clickHereInput.value = "";
    
    });
    
    // Manipulate the heading element
    heading.style.color = "red";
    heading.innerHTML = "Welcome to My AI web page";
});