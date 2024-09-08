// navbar
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
});


const dropdownButton = document.querySelector('#dropdown-button');
const dropdownMenu = document.querySelector('#dropdown-menu');
let timeoutId = null;

dropdownButton.addEventListener('mouseover', () => {
  dropdownMenu.classList.add('show');
  clearTimeout(timeoutId);
});

dropdownMenu.addEventListener('mouseover', () => {
  dropdownMenu.classList.add('show');
  clearTimeout(timeoutId);
});

dropdownButton.addEventListener('mouseout', () => {
  timeoutId = setTimeout(() => {
    if (!dropdownMenu.contains(event.relatedTarget)) {
      dropdownMenu.classList.remove('show');
    }
  }, 200); // menunda penutupan menu dropdown selama 200 milidetik
});

dropdownMenu.addEventListener('mouseout', () => {
  timeoutId = setTimeout(() => {
    if (!dropdownMenu.contains(event.relatedTarget) && !dropdownButton.contains(event.relatedTarget)) {
      dropdownMenu.classList.remove('show');
    }
  }, 200); // menunda penutupan menu dropdown selama 200 milidetik
});

// Add event listener to dropdown menu buttons
const dropdownMenuButtons = dropdownMenu.querySelectorAll('a');
dropdownMenuButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the dropdown menu
    // Add your code here to handle the button click
    console.log('Button clicked:', button.textContent);
  });
});
// navbar



// carousel
const carouselSlide = document.querySelector('.carousel-slide');
        const slideImages = document.querySelectorAll('.carousel-slide > div');

        let counter = 0;
        let direction = 1; // 1 for forward, -1 for backward
        const size = slideImages[0].clientWidth;

        function changeSlide() {
            counter += direction;
            if (counter === slideImages.length - 1) {
                direction = -1; // Change direction to backward
            } else if (counter === 0) {
                direction = 1; // Change direction to forward
            }

            carouselSlide.style.transform = `translateX(-${counter * size}px)`;
        }

        setInterval(changeSlide, 3000); // Change slide every 3 seconds
// carousel




