document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
        // Here you could add code to send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});
