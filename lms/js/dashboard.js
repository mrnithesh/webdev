document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
    if (!user || !user.isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    // Update username in the welcome message
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = user.fullname || user.username;
    }

    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }

    // Demo data for progress bars (in a real app, this would come from a backend)
    const updateProgress = () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            if (width) {
                const percent = parseInt(width);
                if (percent < 100) {
                    bar.style.width = (percent + 1) + '%';
                }
            }
        });
    };

    // Update progress every 30 seconds for demo purposes
    setInterval(updateProgress, 30000);

    // Add notification functionality
    const notificationBadge = document.querySelector('.notification-badge');
    if (notificationBadge) {
        notificationBadge.addEventListener('click', () => {
            alert('No new notifications');
        });
    }
});