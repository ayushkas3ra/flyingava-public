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

// // const bgImages = [
// //     "url('Incubed BY IIT kanpur and Pusa Krishi ICAR.png')",
// //     "url('Slide1.PNG')",
// //     "url('Slide2.PNG')",
// //     "url('Slide3.PNG')",
// //     "url('Slide4.PNG')",
// //     "url('Slide5.PNG')",
// //     "url('Slide6.PNG')",
// //     "url('Slide7.JPG')",
// //     "url('Slide8.JPG')",
// //     "url('Slide9.JPG')",
// //     "url('Slide10.PNG')"
// //   ];

// //   let current = 0;
// //   const heroBanner = document.getElementById("heroBanner");

// //   setInterval(() => {
// //     current = (current + 1) % bgImages.length;
// //     heroBanner.style.backgroundImage = bgImages[current];
//   }, 3000); // changes every 3 seconds

document.addEventListener("DOMContentLoaded", () => {
      const images = [
        "Slide1.PNG",
        "Slide2.PNG",
        "Slide3.PNG",
        "Slide4.PNG",
        "Slide5.PNG",
        "Slide6.PNG",
        "Slide7.JPG",
        "Slide8.JPG",
        "Slide9.JPG",
        "Slide10.PNG",
      ];

      let current = 0;
      const imgElement = document.getElementById("slideshow-img");

      setInterval(() => {
        current = (current + 1) % images.length;
        imgElement.src = images[current];
      }, 3000); // change every 3 seconds
    });

  const dropDownButton = document.getElementById('dropDown');
  const showDropDown = document.getElementById('dropDownSection')
  dropDownButton.addEventListener('click', ()=>{
    showDropDown.classList.toggle('hidden');
  })
  const dropDownButton2 = document.getElementById('dropDown2');
  const showDropDown2 = document.getElementById('dropDownSection2')
  dropDownButton2.addEventListener('click', ()=>{
    showDropDown2.classList.toggle('hidden');
  })
  const dropDownButton3 = document.getElementById('dropDown3');
  const showDropDown3 = document.getElementById('dropDownSection3')
  dropDownButton3.addEventListener('click', ()=>{
    showDropDown3.classList.toggle('hidden');
  })
  const dropDownButton4 = document.getElementById('dropDown4');
  const showDropDown4 = document.getElementById('dropDownSection4')
  dropDownButton4.addEventListener('click', ()=>{
    showDropDown4.classList.toggle('hidden');
  })
  const dropDownButton5 = document.getElementById('dropDown5');
  const showDropDown5 = document.getElementById('dropDownSection5')
  dropDownButton5.addEventListener('click', ()=>{
    showDropDown5.classList.toggle('hidden');
  })
  const dropDownButton6 = document.getElementById('dropDown6');
  const showDropDown6 = document.getElementById('dropDownSection6')
  dropDownButton6.addEventListener('click', ()=>{
    showDropDown6.classList.toggle('hidden');
  })
  
  document.getElementById('seeMoreButton').addEventListener('click',()=>{
    document.getElementById('seeMoreButton').innerHTML=`<button class="mt-4 rounded-xl text-black bg-white font-bold text-md">See Less</button>
            <svg class='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>`
  })