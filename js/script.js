

document.addEventListener("DOMContentLoaded", function() {
    const contactToggle = document.getElementById("contactToggle");
    const contactPopup = document.getElementById("contact-popup");
    const closeContact = document.getElementById("close-contact");

    if (contactToggle && contactPopup && closeContact) {
        contactToggle.addEventListener("click", function(e) {
            e.preventDefault();
            contactPopup.classList.toggle("hidden");
        });

        closeContact.addEventListener("click", function() {
            contactPopup.classList.add("hidden");
        });
    }
});


 document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("contactToggle");
    const popup = document.getElementById("contact-popup");
    const closeBtn = document.getElementById("close-contact");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", function () {
      popup.classList.add("hidden");
    });

    document.addEventListener("click", function (e) {
      if (!popup.contains(e.target) && !toggle.contains(e.target)) {
        popup.classList.add("hidden");
      }
    });
  });

    document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');
    const fill = document.querySelector('.progress-bar .fill');
    let hasAnimated = false;

    function animateCounters() {
      if (hasAnimated) return;
      hasAnimated = true;

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 100;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });

      // Progress bar animation
      const width = fill.getAttribute('data-width');
      fill.style.width = width + '%';
    }

    // Intersection Observer pour détecter si visible
    const section = document.querySelector('#stats-quote');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);
  });


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});




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

// Avancer
function goNext() {
  if (currentPosition < maxPosition) {
    currentPosition++;
  } else {
    currentPosition = 0; // revenir au début
  }
  updateSlider();
}

// Reculer
function goPrev() {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = maxPosition; // aller à la fin
  }
  updateSlider();
}

// Événements boutons
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

// Défilement automatique toutes les 3s
setInterval(goNext, 3000);


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




  const searchInput = document.getElementById('searchInput');
  const cards = Array.from(document.querySelectorAll('.projet-card'));
  const projetsGrid = document.querySelector('.projets-grid');
  const pagination = document.getElementById('pagination');

  const itemsPerPage = 4;
  let currentPage = 1;
  let filteredCards = [...cards];

  function displayCards() {
    projetsGrid.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const cardsToShow = filteredCards.slice(start, end);
    cardsToShow.forEach(card => projetsGrid.appendChild(card));
    renderPagination();
  }

  function renderPagination() {
    const pageCount = Math.ceil(filteredCards.length / itemsPerPage);
    pagination.innerHTML = '';
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = (i === currentPage) ? 'active' : '';
      btn.onclick = () => {
        currentPage = i;
        displayCards();
      };
      pagination.appendChild(btn);
    }
  }

  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();
    filteredCards = cards.filter(card =>
      card.textContent.toLowerCase().includes(query)
    );
    currentPage = 1;
    displayCards();
  });

  // Initial display
  displayCards();


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("contactToggle");
    const popup = document.getElementById("contact-popup");
    const closeBtn = document.getElementById("close-contact");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", function () {
      popup.classList.add("hidden");
    });

    document.addEventListener("click", function (e) {
      if (!popup.contains(e.target) && !toggle.contains(e.target)) {
        popup.classList.add("hidden");
      }
    });
  });

  function filterProjects() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("project-card");

  for (let i = 0; i < cards.length; i++) {
    let cardText = cards[i].textContent.toLowerCase();
    cards[i].style.display = cardText.includes(input) ? "block" : "none";
  }
}



