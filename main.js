document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Bonjour ! 🎉 Ton JS fonctionne.');
    });
  }
});
