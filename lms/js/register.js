document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (fullname && email && username && password) {
            // Store user info in localStorage for demo purposes
            const userData = {
                fullname,
                email,
                username,
                isLoggedIn: true
            };
            localStorage.setItem('user', JSON.stringify(userData));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all fields');
        }
    });
});