
// Simple client-side theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
    });
  }
});
