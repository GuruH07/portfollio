
(function() {
  // Update year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Theme toggle with persistence
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const KEY = 'prefers-dark';
  const apply = v => document.body.classList.toggle('dark', v);

  try {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) apply(saved === '1');
  } catch(e){}

  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    try { localStorage.setItem(KEY, isDark ? '1' : '0'); } catch(e){}
    btn.textContent = isDark ? '🌙' : '☀️';
  });

  // Smooth scroll for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '#' + id);
      }
    });
  });
})();
