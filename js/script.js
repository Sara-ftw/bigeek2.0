
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
