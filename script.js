const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();


// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold: 0.12});

document.querySelectorAll('.service, .work, .skill, .about-text').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Live server-style clock (Bangladesh Time / Asia-Dhaka)
function updateLiveTime() {
  const timeEl = document.getElementById('liveTime');
  const dateEl = document.getElementById('liveDate');

  if (!timeEl || !dateEl) return;

  const now = new Date();

  const time = new Intl.DateTimeFormat('en-BD', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(now);

  const date = new Intl.DateTimeFormat('en-BD', {
    timeZone: 'Asia/Dhaka',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(now);

  timeEl.textContent = time;
  dateEl.textContent = date + ' • Bangladesh (UTC+6)';
}

updateLiveTime();
setInterval(updateLiveTime, 1000);

// Contact form success feedback
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const success = document.getElementById('formSuccess');

  if (form && success) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) return;
      event.preventDefault();
      success.classList.add('show');
      setTimeout(() => form.submit(), 700);
    });
  }
});
