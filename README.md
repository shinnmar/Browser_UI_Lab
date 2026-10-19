# Browser UI Lab

Demo de la charla **Your UI Doesn’t Need That JavaScript: Stop Rebuilding the Browser** de Shirley Ramos :3

Cinco interacciones con HTML, CSS moderno y JavaScript puro, sin dependencias:

1. `<dialog>` y `showModal()`
2. Popover API y `popovertarget`
3. CSS Anchor Positioning
4. Selector CSS `:has()`
5. View Transitions API y fallback para movimiento reducido

## 👩🏽‍💻 Aclaraciones para la demo

- Las acciones **Duplicar**, **Compartir** y **Archivar** son simuladas: JS muestra el nombre de la acción elegida, pero no modifica datos reales.
- El popover ofrece apertura y cierre nativos; **no** implementa un menú ARIA con navegación por flechas.
- Anchor Positioning resuelve la posición, no todos los eventos/semántica de un tooltip real.
- La View Transitions API anima cambios del DOM gestionados por JS; si no existe la API o se prefiere reducir movimiento, la vista cambia sin animación.

## 📖 Lee el artículo

¿Y si el navegador ya puede hacer parte de lo que seguimos resolviendo con JavaScript?


[![Artículo en Medium](./assets/medium-preview.png)](https://shinnmar.medium.com/your-ui-doesnt-need-that-javascript-stop-rebuilding-the-browser-5e6350be9ceb)

[**Leer artículo completo en Medium →**](https://shinnmar.medium.com/your-ui-doesnt-need-that-javascript-stop-rebuilding-the-browser-5e6350be9ceb)

## 📚 Recursos y documentación

Si quieres profundizar en las APIs y funcionalidades que exploramos durante la charla **Your UI Doesn't Need That JavaScript: Stop Rebuilding the Browser**, aquí tienes algunos recursos útiles n.n

### 1. HTML Dialog

- [MDN — HTML `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [MDN — HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)

### 2. Popover API

- [MDN — Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [web.dev — Popover and dialog](https://web.dev/learn/css/popover-and-dialog)

### 3. CSS Anchor Positioning

- [MDN — CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [MDN — `anchor-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name)
- [MDN — `position-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/position-area)

### 4. CSS :has()

- [MDN — `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [web.dev — :has(), the family selector](https://web.dev/articles/has)

### 5. View Transitions API

- [MDN — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [MDN — `document.startViewTransition()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition)
- [MDN — `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

### 6. Accesibilidad web

- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WAI-ARIA — Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Hidde de Vries — Dialog dilemmas and modal mischief](https://talks.hiddedevries.nl/LZWmXu/dialog-dilemmas-and-modal-mischief-a-deep-dive-into-popovers-and-how-to-build-them)

### 7. Compatibilidad y novedades de la Web Platform

- [Can I Use](https://caniuse.com/) — Compatibilidad entre navegadores.
- [Baseline](https://web.dev/baseline) — Disponibilidad de funcionalidades web.
- [Web Platform Status](https://webstatus.dev/) — Estado de las funcionalidades de la plataforma.
- [Chrome for Developers](https://developer.chrome.com/blog/) — Actualizaciones del navegador y nuevas APIs.
---
