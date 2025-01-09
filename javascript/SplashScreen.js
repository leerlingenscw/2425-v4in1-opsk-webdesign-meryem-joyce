window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
  
    // Set a timeout to hide the splash screen
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, 3000); // 3000ms = 3 seconds
  });