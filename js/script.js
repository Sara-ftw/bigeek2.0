
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


document.addEventListener("DOMContentLoaded", function() {
  const contactIcon = document.querySelector('.contact-icon');
  const contactPopup = document.getElementById('contactPopup');
  const closeBtn = document.getElementById('closeContactPopup');

  contactIcon.addEventListener('click', (e) => {
    e.preventDefault();
    contactPopup.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    contactPopup.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === contactPopup) {
      contactPopup.style.display = 'none';
    }
  });
});
document.getElementById('contactPopup').style.display = 'block';


    particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }



    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  }
);

  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out'
  });

    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
      },
      "retina_detect": true
    });


// Récupération du bouton
const scrollBtn = document.getElementById("scrollToTopBtn");

// Quand on scrolle dans la page
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Quand on clique sur le bouton
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
