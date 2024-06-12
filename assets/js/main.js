// Get the form element
const form = document.querySelector('#signup-form');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Perform form validation
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new user object
    const user = {
        username,
        email,
        password
    };

    // Send the user data to the server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the server response
            console.log(data);
            alert('Sign up successful!');
            form.reset(); // Reset the form
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again later.');
        });
});