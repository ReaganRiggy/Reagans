// Save user data on registration
function registerUser(event) {
    event.preventDefault();
    
    // Capture user data from form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Save user data to localStorage
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);

    alert('Registration successful! Redirecting to login page.');
    
    // Redirect to login page after registration
    window.location.href = 'login.html';
}

// Check login credentials against stored data
function loginUser(event) {
    event.preventDefault();

    // Retrieve login data from form
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored registration data
    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    // Validate login credentials
    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
        alert('Login successful! Welcome back.');
        // Redirect to home page or user dashboard (replace with actual page)
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again or register if you haven\'t.');
    }
}
