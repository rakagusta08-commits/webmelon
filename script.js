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

