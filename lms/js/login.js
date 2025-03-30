document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For demo purposes, using simple validation
        if (username && password) {
            // Store user info in sessionStorage
            sessionStorage.setItem('user', JSON.stringify({
                username: username,
                isLoggedIn: true
            }));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Please fill in all fields');
        }
    });
});