// Nubbi — JavaScript propio de marca. Vanilla, sin librerías externas.
document.addEventListener('DOMContentLoaded', function () {
  initRevealOnScroll();
  initFaqAccordion();
  initCountUp();
});

function initRevealOnScroll() {
  var targets = document.querySelectorAll('.nb-reveal, .nb-reveal-stagger');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(function (el) { el.classList.add('nb-visible'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('nb-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach(function (el) { observer.observe(el); });
}

function initFaqAccordion() {
  var items = document.querySelectorAll('.nb-faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    var btn = item.querySelector('.nb-faq-q');
    var panel = item.querySelector('.nb-faq-a');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var isOpen = item.getAttribute('data-open') === 'true';
      var group = item.closest('.nb-faq-list');

      items.forEach(function (other) {
        if (other !== item && other.closest('.nb-faq-list') === group) {
          other.setAttribute('data-open', 'false');
          other.querySelector('.nb-faq-q').setAttribute('aria-expanded', 'false');
          var otherPanel = other.querySelector('.nb-faq-a');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      item.setAttribute('data-open', isOpen ? 'false' : 'true');
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
    });
  });
}

function initCountUp() {
  var counters = document.querySelectorAll('.nb-count[data-count]');
  if (!counters.length) return;

  var animate = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1200;
    var start = null;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(function (el) { observer.observe(el); });
}
