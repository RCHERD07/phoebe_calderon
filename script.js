document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Ensure menuToggle exists before adding event listener
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    // Close menu when a link is clicked (for better user experience)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('show');
      });
    });
  }
});
  