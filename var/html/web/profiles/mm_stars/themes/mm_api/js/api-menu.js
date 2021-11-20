(Drupal => {
  /**
   * Add necessary event listeners and create aria attributes
   * @param {element} el - List item element that has a submenu.
   */
  function initSubmenu(el) {
    const button = el.querySelector('.mn-lnk-button');
    button.setAttribute('aria-controls', button.dataset.ariacontrols);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', e => toggleSubmenu(e.currentTarget, !getButtonState(e.currentTarget)));
    // el.addEventListener('mouseenter', e => toggleSubmenu(button, true));
    // el.addEventListener('mouseleave', e => toggleSubmenu(button, false));
  }
  /**
   * Toggles the aria-expanded attribute of a given button to a desired state.
   * @param {element} button - Button element that should be toggled.
   * @param {boolean} toState - State indicating the end result toggle operation.
   */
  function toggleSubmenu(button, toState) {
    button.setAttribute('aria-expanded', toState);
  }
  /**
   * Get the current aria-expanded state of a given button.
   * @param {element} button - Button element to return state of.
   */
  function getButtonState(button) {
    return button.getAttribute('aria-expanded') === 'true';
  }
  Drupal.behaviors.submenu = {
    attach(context) {
      context.querySelectorAll('.mn-tm-hs-chldrn').forEach(el => initSubmenu(el));
    },
  };
}) (Drupal);