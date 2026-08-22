// Lanternwood brightness safety cap.
// Runs after the React UI is mounted and keeps the Brightness control at 100% maximum,
// including older saved settings that may contain values above 100.
(function () {
  'use strict';

  function clampSavedBrightness() {
    try {
      var raw = localStorage.getItem('lanternwood-settings');
      if (!raw) return;
      var settings = JSON.parse(raw);
      if (typeof settings.brightness === 'number' && settings.brightness > 100) {
        settings.brightness = 100;
        localStorage.setItem('lanternwood-settings', JSON.stringify(settings));
      }
    } catch (_) {}
  }

  function capBrightnessSlider() {
    var rows = document.querySelectorAll('.setting-row');
    for (var i = 0; i < rows.length; i++) {
      var strong = rows[i].querySelector('strong');
      if (!strong || strong.textContent.indexOf('Brightness') === -1) continue;
      var slider = rows[i].querySelector('input[type="range"]');
      if (!slider) continue;
      slider.max = '100';
      if (Number(slider.value) > 100) {
        slider.value = '100';
        slider.dispatchEvent(new Event('input', { bubbles: true }));
        slider.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return;
    }
  }

  clampSavedBrightness();
  capBrightnessSlider();

  var observer = new MutationObserver(capBrightnessSlider);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
