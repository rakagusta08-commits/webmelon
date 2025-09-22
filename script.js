/* ================================
   🌟 ARMI FARM Interactive JS
   ================================ */

// Smooth Scroll + Highlight

function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth" });

  element.classList.add("sectionHighlight");
  element.style.boxShadow = "0 0 25px rgba(250, 204, 21, 0.6)";

  setTimeout(() => {
    element.classList.remove("sectionHighlight");
    element.style.boxShadow = "none";
  }, 1400);
}

// Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = `🌟 ${message}`;
  toast.className = "toastBox";
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Reveal Animation
const reveals = document.querySelectorAll(".revealItem");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el, i) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      setTimeout(() => el.classList.add("active"), i * 120);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Form Submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const button = form?.querySelector("button");

  if (form && button) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      button.disabled = true;
      button.innerHTML = `<span class="spinner"></span> Mengirim...`;

      setTimeout(() => {
        button.disabled = false;
        button.textContent = "Kirim Pesan";
        showToast("✅ Terima kasih! Pesan Anda berhasil terkirim.");
        form.reset();
      }, 1800);
    });
  }

  // Ripple Effect
  document.querySelectorAll("button, .btnPrimary").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.style.setProperty("--x", `${x}px`);
      this.style.setProperty("--y", `${y}px`);
    });
  });
});

// Smooth scroll for nav
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "🍈 Hidroponic Premium, Rasa Tak Tertandingi",
    "🌱 Fresh, Manis, dan Sehat Setiap Hari",
    "💚 Hidup Sehat Dimulai dari Buah Segar",
    "✨ Pertanian Modern untuk Masa Depan"
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 80;
  const element = document.getElementById("animatedText");

  function type() {
    currentWord = words[i];
    if (!isDeleting) {
      element.textContent = currentWord.slice(0, ++j);
      if (j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      element.textContent = currentWord.slice(0, --j);
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
});

// Mobile menu toggle

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  // buka menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // tombol close
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // klik overlay
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // auto close kalau klik link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});

// Scroll Trigger dengan Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scrollTrigger");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#home .slider");
  let slides = document.querySelectorAll("#home .slide");
  const prevBtn = document.querySelector("#home .sliderBtn.prev");
  const nextBtn = document.querySelector("#home .sliderBtn.next");

  let current = 1; // mulai di slide pertama (setelah clone)
  let autoPlay;

  // Clone pertama & terakhir
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  slides = document.querySelectorAll("#home .slide");
  const size = slides[0].clientWidth;

  // Set awal TANPA animasi
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${size * current}px)`;
  
  // Setelah delay kecil, aktifkan animasi
  setTimeout(() => {
    slider.style.transition = "transform 0.8s ease-in-out";
  }, 50);


  // Update slide
  function updateSlide() {
    slider.style.transition = "transform 0.8s ease-in-out";
    slider.style.transform = `translateX(-${size * current}px)`;
  }

  function nextSlide() {
    if (current >= slides.length - 1) return;
    current++;
    updateSlide();
  }

  function prevSlide() {
    if (current <= 0) return;
    current--;
    updateSlide();
  }

  // Event tombol
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  // Transition end → reset posisi kalau clone
  slider.addEventListener("transitionend", () => {
    if (slides[current].id === "first-clone") {
      slider.style.transition = "none";
      current = 1;
      slider.style.transform = `translateX(-${size * current}px)`;
    }
    if (slides[current].id === "last-clone") {
      slider.style.transition = "none";
      current = slides.length - 2;
      slider.style.transform = `translateX(-${size * current}px)`;
    }
  });

  // Autoplay tiap 5 detik
  function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 5000);
  }
  function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
  }

  startAutoPlay();
});


var tl = gsap.timeline()

tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.2
})

tl.from("a",{
    y:-30,
    opacity:0,
    duration:0.4,
    stagger:0.2
})

