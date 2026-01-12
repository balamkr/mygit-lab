console.log("JS is connected! 🚀");
<<<<<<< HEAD
console.log("JS is connected! 🚀");

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('themeToggle');
  const body = document.body;
  
  toggleButton.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    console.log(`Theme switched to: ${newTheme}`);
  });
});
=======
>>>>>>> cf5de82b3e256106aa5b0bd7daf3206955246e50
