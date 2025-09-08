/* ================================
   🌟 Melon Premium Interactive JS
   ================================ */

// ========== Smooth Scroll + Highlight ==========
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth" });

  // Premium glow highlight
  element.classList.add("highlight");
  element.style.boxShadow = "0 0 25px rgba(250, 204, 21, 0.6)";

  setTimeout(() => {
    element.classList.remove("highlight");
    element.style.boxShadow = "none";
  }, 1400);
}

// ========== Toast Notification ==========
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = `🌟 ${message}`;
  toast.className = "toast";
  document.body.appendChild(toast);

  // animasi masuk
  setTimeout(() => toast.classList.add("show"), 100);

  // auto hilang setelah 4 detik
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ========== Reveal Animation Saat Scroll ==========
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el, i) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      // Delay bertahap biar elegan
      setTimeout(() => el.classList.add("active"), i * 120);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ========== Form Interaktif ==========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const button = form?.querySelector("button");

  if (form && button) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Tambah animasi spinner loading
      button.disabled = true;
      button.innerHTML = `
        <span class="spinner"></span> Mengirim...
      `;

      // Simulasi submit sukses
      setTimeout(() => {
        button.disabled = false;
        button.textContent = "Kirim Pesan";
        showToast("✅ Terima kasih! Pesan Anda berhasil terkirim.");
        form.reset();
      }, 1800);
    });
  }

  // ========== Ripple Effect untuk Semua Tombol ==========
  document.querySelectorAll("button, .btn-premium").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.style.setProperty("--x", `${x}px`);
      this.style.setProperty("--y", `${y}px`);
    });
  });
});

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

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.remove("scale-y-0");
      mobileMenu.classList.add("scale-y-100");
    }, 10);
  } else {
    mobileMenu.classList.remove("scale-y-100");
    mobileMenu.classList.add("scale-y-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }
});





  // Animasi kata-kata
  const words = [
    "🍈 Hidroponic Premium, Rasa Tak Tertandingi",
    "🌱 Fresh, Manis, dan Sehat Setiap Hari",
    "💚 Hidup Sehat Dimulai dari Buah Segar",
    "✨ Pertanian Modern untuk Masa Depan"
  ];

  let i = 0;       // index kata
  let j = 0;       // index huruf
  let currentWord = "";
  let isDeleting = false;
  const speed = 100; // kecepatan ketik
  const element = document.getElementById("animatedText");

  function type() {
    currentWord = words[i];
    if (!isDeleting) {
      element.textContent = currentWord.slice(0, ++j);
      if (j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500); // jeda sebelum hapus
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

  // Smooth scroll function
  function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
