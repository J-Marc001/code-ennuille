// Darkmode
const darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch'); // Make sure you have an element with this ID
    
    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };
    
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    };
    
    // Toggle between modes
    themeSwitch.addEventListener('click', () => {
        if (document.body.classList.contains('darkmode')) {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    });
    
    // Initialize based on saved preference
    if (darkmode === 'active') {
        enableDarkmode();
    }
