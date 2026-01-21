# Admin Login Feature for Freefolio

## Overview
This implementation adds an admin login system to your Freefolio portfolio website. Only authorized users can access the settings page to edit personal details.

## Features
- 🔒 **Admin-only Access**: Only users with correct credentials can login
- 🎨 **Seamless Integration**: Matches the existing website design
- 💾 **Data Persistence**: Uses localStorage to save profile information
- 📱 **Responsive Design**: Works on all device sizes
- 🌙 **Dark Mode Support**: Fully compatible with existing dark/light theme

## Default Credentials
**Username:** `admin`  
**Password:** `password123`

⚠️ **Important:** Change these credentials in `admin.js` for security!

## How to Change Credentials
1. Open `admin.js` file
2. Find the `ADMIN_CREDENTIALS` object at the top
3. Modify the username and password values:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'your-new-username',
    password: 'your-new-password'
};
```

## How It Works

### For Visitors (Non-logged in users):
- See the normal portfolio website content
- Cannot access settings or edit profile
- View all templates and portfolio examples

### For Admin (Logged in users):
- Access to "Edit Profile" button in header
- Can navigate to settings page to update personal information
- Profile data is saved and persists between sessions
- Logout option available in header

## File Structure
```
freefolio-main/
├── index.html          # Main website with login integration
├── admin.js           # Authentication and profile management logic
└── README.md          # This file
```

## Profile Fields Available
- **Full Name**: Your display name
- **Email Address**: Contact email
- **Phone Number**: Phone contact
- **Bio/Description**: Personal description or bio

## Data Storage
All profile data is stored in the browser's localStorage:
- `adminLoggedIn`: Login status
- `userDetails`: Complete profile information
- Individual fields: `userName`, `userEmail`, `userPhone`, `userBio`

## Security Notes
- Credentials are stored in plain text in the JavaScript file
- For production use, implement proper backend authentication
- localStorage data is client-side only
- Clear browser data to reset everything

## Customization
You can easily modify:
- Login form styling in `index.html`
- Profile fields in the settings page
- Success/error messages in `admin.js`
- Add more profile fields as needed

## Troubleshooting
If you encounter issues:
1. Clear browser cache and localStorage
2. Check browser console for JavaScript errors
3. Ensure all files are in the correct locations
4. Verify the server is running properly

## Browser Compatibility
Works on all modern browsers that support:
- localStorage API
- ES6 JavaScript features
- Modern CSS (Flexbox, Grid)