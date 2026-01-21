// Admin Authentication System
const ADMIN_CREDENTIALS = {
    username: 'Manasvi Limbasiya',
    password: 'Manasvi@1007' // Change this to your desired password
};

// DOM Elements
const loginSection = document.getElementById('login-section');
const websiteContent = document.getElementById('website-content');
const settingsPage = document.getElementById('settings-page');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const editProfileBtn = document.getElementById('edit-profile-btn');

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        showWebsiteContent();
        // Show edit profile button in header
        if (editProfileBtn) {
            editProfileBtn.style.display = 'flex';
        }
    } else {
        showLoginForm();
        // Hide edit profile button
        if (editProfileBtn) {
            editProfileBtn.style.display = 'none';
        }
    }
}

// Show login form
function showLoginForm() {
    if (loginSection) loginSection.style.display = 'flex';
    if (websiteContent) websiteContent.style.display = 'none';
    if (settingsPage) settingsPage.style.display = 'none';
}

// Show website content
function showWebsiteContent() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (isLoggedIn) {
        // Redirect to personal portfolio
        window.location.href = 'my-portfolio.html';
        return;
    }
    
    if (loginSection) loginSection.style.display = 'none';
    if (websiteContent) websiteContent.style.display = 'block';
    if (settingsPage) settingsPage.style.display = 'none';
}

// Show settings page
function showSettingsPage() {
    if (loginSection) loginSection.style.display = 'none';
    if (websiteContent) websiteContent.style.display = 'none';
    if (settingsPage) settingsPage.style.display = 'block';
}

// Handle login form submission
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            // Login successful
            localStorage.setItem('adminLoggedIn', 'true');
            
            // Store user details if they exist
            const userDetails = {
                name: localStorage.getItem('userName') || '',
                email: localStorage.getItem('userEmail') || '',
                bio: localStorage.getItem('userBio') || '',
                phone: localStorage.getItem('userPhone') || ''
            };
            
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            
            showWebsiteContent();
            
            // Show success message
            alert('Login successful!');
        } else {
            // Login failed
            alert('Invalid username or password!');
        }
    });
}

// Handle logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('userDetails');
        
        // Check if we're on the portfolio page
        if (window.location.pathname.includes('my-portfolio.html')) {
            // Redirect to main page
            window.location.href = 'index.html';
        } else {
            showLoginForm();
        }
        
        alert('Logged out successfully!');
    });
}

// Handle edit profile button
if (editProfileBtn) {
    editProfileBtn.addEventListener('click', function() {
        showSettingsPage();
        loadUserProfile();
    });
}

// Load user profile data into settings form
function loadUserProfile() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    
    document.getElementById('profile-name').value = userDetails.name || '';
    document.getElementById('profile-email').value = userDetails.email || '';
    document.getElementById('profile-phone').value = userDetails.phone || '';
    document.getElementById('profile-bio').value = userDetails.bio || '';
}

// Save profile changes
function saveProfileChanges() {
    const userDetails = {
        name: document.getElementById('profile-name').value,
        email: document.getElementById('profile-email').value,
        phone: document.getElementById('profile-phone').value,
        bio: document.getElementById('profile-bio').value
    };
    
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    localStorage.setItem('userName', userDetails.name);
    localStorage.setItem('userEmail', userDetails.email);
    localStorage.setItem('userPhone', userDetails.phone);
    localStorage.setItem('userBio', userDetails.bio);
    
    alert('Profile updated successfully!');
    showWebsiteContent();
}

// Cancel profile editing
function cancelProfileEdit() {
    showWebsiteContent();
}

// Make functions globally accessible
window.saveProfileChanges = saveProfileChanges;
window.cancelProfileEdit = cancelProfileEdit;
window.showWebsiteContent = showWebsiteContent;