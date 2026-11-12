
try {
  if (localStorage.getItem('theme') === 'dark') document.documentElement.dataset.theme = 'dark';
} catch {}



document.addEventListener('DOMContentLoaded', () => {
const themeButton = document.querySelector('.theme-button');
const page = document.documentElement;
function updateThemeButton() {
  themeButton.textContent = page.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  const isDark = page.dataset.theme !== 'dark';
  if (isDark) page.dataset.theme = 'dark';
  else delete page.dataset.theme;
  updateThemeButton();
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
});
});
