document.addEventListener('DOMContentLoaded', function () {
  // Responsive Navigation Menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('show');
      });
    });
  }

  // Image Modal Logic
  const modal = document.getElementById('myModal');
  const img = document.getElementById('myImg');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  if (modal && img && modalImg && closeBtn) {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
