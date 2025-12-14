document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth' });
  });
});

const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
