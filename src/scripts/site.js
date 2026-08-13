const ready = (callback) => {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', callback);
  else callback();
};

ready(() => {
  const storageKey = 'pro-handyman-sg-theme';
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeColor = document.querySelector('[data-theme-color]');

  const applyTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0d1418' : '#102027');
    if (themeToggle) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      const label = `Switch to ${nextTheme} mode`;
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }
    if (persist) localStorage.setItem(storageKey, theme);
  };

  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
  requestAnimationFrame(() => root.classList.add('theme-ready'));

  themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const megaButtons = document.querySelectorAll('[data-mega-button]');
  const megaMenu = document.querySelector('[data-mega-menu]');
  const mobileServicesToggle = document.querySelector('[data-mobile-services-toggle]');
  const mobileServicesPanel = document.querySelector('[data-mobile-services-panel]');
  const mobileServicesSymbol = document.querySelector('[data-mobile-services-symbol]');

  const setMobileMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.dataset.open = String(open);
    document.documentElement.classList.toggle('overflow-hidden', open);
  };

  const setMega = (open) => {
    if (!megaMenu) return;
    megaButtons.forEach((button) => button.setAttribute('aria-expanded', String(open)));
    megaMenu.dataset.open = String(open);
  };

  const setMobileServices = (open) => {
    if (!mobileServicesToggle || !mobileServicesPanel) return;
    mobileServicesToggle.setAttribute('aria-expanded', String(open));
    mobileServicesPanel.dataset.open = String(open);
    if (mobileServicesSymbol) mobileServicesSymbol.textContent = open ? '-' : '+';

    if (!open) {
      mobileServicesPanel.querySelectorAll('[data-mobile-service-toggle]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
      mobileServicesPanel.querySelectorAll('[data-mobile-service-panel]').forEach((panel) => {
        panel.dataset.open = 'false';
      });
      mobileServicesPanel.querySelectorAll('[data-mobile-service-symbol]').forEach((symbol) => {
        symbol.textContent = '+';
      });
      mobileServicesPanel.querySelectorAll('[data-more-group]').forEach((group) => {
        group.dataset.expanded = 'false';
      });
      mobileServicesPanel.querySelectorAll('[data-more-toggle]').forEach((button) => {
        const count = button.dataset.moreCount || '';
        button.setAttribute('aria-expanded', 'false');
        button.textContent = `+ ${count} More`;
      });
    }
  };

  menuButton?.addEventListener('click', () => {
    const open = mobileMenu?.dataset.open !== 'true';
    setMobileMenu(open);
    if (!open) {
      setMega(false);
      setMobileServices(false);
    }
  });

  document.querySelectorAll('[data-nav-close]').forEach((link) => link.addEventListener('click', () => {
    setMobileMenu(false);
    setMega(false);
    setMobileServices(false);
  }));

  megaButtons.forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const open = megaMenu?.dataset.open !== 'true';
    if (!button.closest('[data-mobile-menu]')) setMobileMenu(false);
    setMega(open);
  }));

  megaMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMega(false);
      setMobileMenu(false);
    });
  });

  megaMenu?.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', (event) => {
    if (megaMenu?.dataset.open !== 'true') return;

    const target = event.target;
    const clickedButton = [...megaButtons].some((button) => button.contains(target));
    const clickedMenu = megaMenu?.contains(target);

    if (!clickedButton && !clickedMenu) {
      setMega(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMega(false);
      setMobileMenu(false);
      setMobileServices(false);
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

  mobileServicesToggle?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMobileServices(mobileServicesPanel?.dataset.open !== 'true');
  });

  document.querySelectorAll('[data-mobile-service-toggle]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const item = button.closest('[data-mobile-service-item]');
      const panel = item?.querySelector('[data-mobile-service-panel]');
      const symbol = item?.querySelector('[data-mobile-service-symbol]');
      const open = panel?.dataset.open !== 'true';

      button.setAttribute('aria-expanded', String(open));
      if (panel) panel.dataset.open = String(open);
      if (symbol) symbol.textContent = open ? '-' : '+';
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
