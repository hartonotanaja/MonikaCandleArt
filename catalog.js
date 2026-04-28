/* =============================================
   Lumière Catalog — catalog.js
   Filter with live count updates
   ============================================= */
(function () {
  'use strict';

  const filterBtns   = document.querySelectorAll('.filter-btn');
  const cards        = document.querySelectorAll('.product-card');
  const visibleCount = document.getElementById('visible-count');

  function updateCount(n) {
    if (visibleCount) visibleCount.textContent = n + ' piece' + (n !== 1 ? 's' : '');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let shown = 0;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
        if (show) shown++;
      });
      updateCount(shown);
    });
  });

  updateCount(cards.length);
})();
