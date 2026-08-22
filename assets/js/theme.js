/* Theme switcher (light / dark).
 *
 * Light  = parchment paper background + sun icon button.
 * Dark   = dark background + moon icon button.
 *
 * Persists choice to localStorage('theme') and writes <html data-theme="...">.
 * The matching `[data-theme="..."]` rules live in _sass/_theme.scss.
 * The no-flash script in _includes/head/custom.html reads the same key on
 * page load to set the attribute before CSS resolves.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // light is the default (no data-theme attribute)
      document.documentElement.removeAttribute('data-theme');
    }
    // Update the single toggle button aria-pressed state
    syncButton(theme);
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  function loadTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function syncButton(theme) {
    var btn = document.querySelector('.theme-toggle button[data-theme-toggle]');
    if (!btn) return;
    var isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    // Swap the visible icon between sun and moon
    var sunIcon = btn.querySelector('.icon-sun');
    var moonIcon = btn.querySelector('.icon-moon');
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : '';
    if (moonIcon) moonIcon.style.display = isDark ? '' : 'none';
  }

  function init() {
    var current = loadTheme() || 'light';
    applyTheme(current);

    document.addEventListener('click', function (event) {
      var btn = event.target.closest('.theme-toggle button[data-theme-toggle]');
      if (!btn) return;
      var currentTheme = loadTheme() || 'light';
      var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
