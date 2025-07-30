
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

const tabBtns = document.querySelectorAll('.tab-btn');
const tabSlides = document.querySelectorAll('.tab-slide');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabSlides.forEach(slide => {
      slide.classList.remove('active');
      if (slide.dataset.index === index) slide.classList.add('active');
    });
  });
});


 const slider = document.getElementById("logoSlider");
  const logos = slider.querySelectorAll(".client-logo");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentPosition = 0;
  const logoWidth = 200; // largeur + marge
  const visibleCount = 4;
  const maxPosition = logos.length - visibleCount;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentPosition * logoWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentPosition < maxPosition) {
      currentPosition++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition--;
      updateSlider();
    }
  });


   document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;

    if (item.classList.contains('active')) {
      content.style.maxHeight = null;
      item.classList.remove('active');
      header.querySelector('.arrow').innerHTML = '&#x2795;'; // +
    } else {
      document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
        activeItem.querySelector('.accordion-content').style.maxHeight = null;
        activeItem.classList.remove('active');
        activeItem.querySelector('.arrow').innerHTML = '&#x2795;'; // +
      });

      content.style.maxHeight = content.scrollHeight + 20 + "px"; // ajout 20px
      item.classList.add('active');
      header.querySelector('.arrow').innerHTML = '&#x2796;'; // -
    }
  });
});

AOS.init({
  duration: 1000, // durée animation en ms
  once: true      // animation une fois au scroll
});

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});
