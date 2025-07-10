document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu
  const menu = document.getElementById('menu');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menu && mobileMenu) {
    menu.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Handle form submission
  const form = document.querySelector('form');
  const submitButton = document.getElementById('sendButton');
  if (form && submitButton) {
    form.addEventListener('submit', function (e) {
      submitButton.innerHTML = 'Form Submitted!';
      submitButton.classList.add('bg-green-600');
      submitButton.disabled = true;
    });
  }

  // Image slideshow
  const images = [
    "Slide1.PNG", "Slide2.PNG", "Slide3.PNG", "Slide4.PNG",
    "Slide5.PNG", "Slide6.PNG", "Slide7.JPG", "Slide8.JPG",
    "Slide9.JPG", "Slide10.PNG"
  ];
  let current = 0;
  const imgElement = document.getElementById("slideshow-img");
  if (imgElement) {
    setInterval(() => {
      current = (current + 1) % images.length;
      imgElement.src = images[current];
    }, 3000);
  }

  // Accordion functionality for dropdown sections
  const toggleButtons = document.querySelectorAll('[data-toggle]');
  const sections = document.querySelectorAll('[data-section]');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.getAttribute('data-toggle');
      const section = document.querySelector(`[data-section="${sectionId}"]`);
      const isCurrentlyVisible = section.classList.contains('block');

      sections.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('block');
      });

      if (!isCurrentlyVisible) {
        section.classList.remove('hidden');
        section.classList.add('block');
      }
    });
  });

  // See More toggle
  const seeMoreButton = document.getElementById('seeMoreButton');
  if (seeMoreButton) {
    seeMoreButton.addEventListener('click', () => {
      seeMoreButton.innerHTML = `
        <button class="mt-4 rounded-xl text-black bg-white font-bold text-md">See Less</button>
        <svg class='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 
          0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 
          12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
        </svg>
      `;
    });
  }
});
