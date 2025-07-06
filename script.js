const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu on menu icon click
menu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Handle form submission
const form = document.querySelector('form');
const submitButton = document.getElementById('sendButton');

if (form && submitButton) {
  form.addEventListener('submit', function (e) {
    // Optionally prevent default if you want to handle submission via JS
    // e.preventDefault();
    submitButton.innerHTML = 'Form Submitted!';
    submitButton.classList.add('bg-green-600');
    submitButton.disabled = true;
  });
}

const bgImages = [
    "url('droneMedium.jpg')",
    "url('droneimage2.jpg')",
    "url('droneimage3.jpg')"
  ];

  let current = 0;
  const heroBanner = document.getElementById("heroBanner");

  setInterval(() => {
    current = (current + 1) % bgImages.length;
    heroBanner.style.backgroundImage = bgImages[current];
  }, 2000); // changes every 2 seconds
  