document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (optional)
    if (name && email && message) {
        document.getElementById('responseMessage').innerText = 'Thank you for your message, ' + name + '!';
        
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill out all fields.';
    }
});
