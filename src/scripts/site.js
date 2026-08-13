const ready = (callback) => {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback);
  else callback();
};

ready(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const megaRoot = document.querySelector('[data-mega-root]');
  const megaButton = document.querySelector('[data-mega-button]');
  const megaMenu = document.querySelector('[data-mega-menu]');

  const setMobileMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.dataset.open = String(open);
    document.documentElement.classList.toggle('overflow-hidden', open);
  };

  menuButton?.addEventListener('click', () => setMobileMenu(mobileMenu?.dataset.open !== 'true'));
  document.querySelectorAll('[data-nav-close]').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));

  const setMega = (open) => {
    if (!megaButton || !megaMenu) return;
    megaButton.setAttribute('aria-expanded', String(open));
    megaMenu.dataset.open = String(open);
  };

  megaButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    setMega(megaMenu?.dataset.open !== 'true');
  });

  megaMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', (event) => {
    if (megaMenu?.dataset.open !== 'true') return;

    const target = event.target;
    const clickedButton = megaButton?.contains(target);
    const clickedMenu = megaMenu?.contains(target);

    if (!clickedButton && !clickedMenu) {
      setMega(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMega(false);
      setMobileMenu(false);
    }
  });

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-faq-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('[data-faq-item]');
      const open = item?.dataset.open !== 'true';
      item.dataset.open = String(open);
      button.setAttribute('aria-expanded', String(open));
    });
  });

  document.querySelectorAll('[data-more-toggle]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const group = button.closest('[data-more-group]');
      const expanded = group?.dataset.expanded !== 'true';
      const count = button.dataset.moreCount || '';

      if (group) group.dataset.expanded = String(expanded);
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Show Less' : `+ ${count} More`;
    });
  });

  document.querySelectorAll('[data-service-search]').forEach((root) => {
    const input = root.querySelector('[data-search-input]');
    const chips = root.querySelectorAll('[data-filter]');
    const cards = root.querySelectorAll('[data-service-card]');
    const empty = root.querySelector('[data-empty-state]');
    let activeFilter = 'All';

    const run = () => {
      const query = (input?.value || '').trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const haystack = card.dataset.search || '';
        const category = card.dataset.category || '';
        const popular = card.dataset.popular === 'true';
        const filterMatch = activeFilter === 'All' || (activeFilter === 'Popular' ? popular : category === activeFilter);
        const searchMatch = !query || haystack.includes(query);
        const visible = filterMatch && searchMatch;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (empty) empty.hidden = visibleCount > 0;
    };

    input?.addEventListener('input', run);
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        activeFilter = chip.dataset.filter || 'All';
        chips.forEach((item) => {
          item.dataset.active = String(item === chip);
          item.setAttribute('aria-pressed', String(item === chip));
        });
        run();
      });
    });
    run();
  });

  document.querySelectorAll('[data-enhanced-form]').forEach((form) => {
    const success = form.querySelector('[data-success]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const invalid = [...form.querySelectorAll('[required]')].find((field) => !field.value.trim());
      if (invalid) {
        invalid.focus();
        invalid.setAttribute('aria-invalid', 'true');
        return;
      }
      form.querySelectorAll('[aria-invalid]').forEach((field) => field.removeAttribute('aria-invalid'));
      if (success) success.hidden = false;
      form.reset();
    });
  });
});
