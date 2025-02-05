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
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.querySelector('.close');
  const images = document.querySelectorAll('.details-image');

  images.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
