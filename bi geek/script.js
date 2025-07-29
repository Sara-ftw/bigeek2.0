
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

  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      // Fermer tous sauf celui cliqué
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });

      // Toggle l'item cliqué
      item.classList.toggle('active');
    });
  });


  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Activate selected
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });


const tabs = document.querySelectorAll('.tab-btn');
const slides = document.querySelectorAll('.tab-slide');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active classes
    tabs.forEach(t => t.classList.remove('active'));
    slides.forEach(s => s.classList.remove('active'));

    // Add active to clicked tab and corresponding slide
    tab.classList.add('active');
    const index = tab.getAttribute('data-index');
    slides[index].classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabSlides = document.querySelectorAll('.tab-slide');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');

      // Supprimer la classe active de tous les boutons et slides
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabSlides.forEach(slide => slide.classList.remove('active'));

      // Ajouter la classe active au bouton cliqué et à la slide correspondante
      button.classList.add('active');
      document.querySelector(`.tab-slide[data-index="${index}"]`).classList.add('active');
    });
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
 

particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#7b2ff7' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, direction: 'none', random: true, bounce: false }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  },
  retina_detect: true
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
      content.style.maxHeight = content.scrollHeight + "px";
      item.classList.add('active');
      header.querySelector('.arrow').innerHTML = '&#x2796;'; // -
    }
  });
});


document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const openItem = document.querySelector('.accordion-content[style*="max-height"]');

    if (content.style.maxHeight) {
      // Fermer la section ouverte
      content.style.maxHeight = null;
    } else {
      // Fermer la section ouverte si existe
      if (openItem && openItem !== content) {
        openItem.style.maxHeight = null;
      }
      // Ouvrir la section cliquée
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
