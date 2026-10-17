// 01 Dialog: JS abre el modal; el navegador gestiona su comportamiento modal.
    const dialog = document.querySelector('#confirm');
    document.querySelector('#open-confirm').addEventListener('click', () => dialog.showModal());

    // 02 Popover: apertura y cierre son declarativos; JS ejecuta la acción de negocio.
    document.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelector('#action-status').textContent = `Acción elegida: ${button.dataset.action}`;
        document.querySelector('#actions-panel').hidePopover();
      });
    });

    // 03 Anchor positioning: JS cambia la ubicación del botón; CSS calcula el tooltip.
    const anchorPlayground = document.querySelector('#anchor-playground');
    document.querySelector('#shift-anchor').addEventListener('click', (event) => {
      const right = anchorPlayground.classList.toggle('at-right');
      event.currentTarget.textContent = right ? '← Mover referencia' : 'Mover referencia →';
    });
    const anchorSupported = CSS.supports('anchor-name: --tooltip-anchor') && CSS.supports('position-anchor: --tooltip-anchor');
    document.querySelector('#anchor-support').textContent = anchorSupported ? 'Soporte activo' : 'Fallback visual activo';

    // 04 :has() no necesita JavaScript.

    // 05 View Transitions: JS actualiza estado; Web API anima o hay fallback.
    const card = document.querySelector('#view-card');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
    document.querySelector('#toggle-card').addEventListener('click', () => {
      const update = () => {
        const expanded = card.classList.toggle('expanded');
        document.querySelector('#view-title').textContent = expanded ? 'Vista expandida' : 'Vista compacta';
        document.querySelector('#view-copy').textContent = expanded
          ? 'La UI ha cambiado de tamaño, presentación y contenido.'
          : 'Este componente muestra información resumida.';
      };
      if (document.startViewTransition && !reduceMotion.matches) {
        document.startViewTransition(update);
      } else {
        update();
      }
    });
