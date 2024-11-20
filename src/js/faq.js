export function initializeAccordion() {
  document.addEventListener('DOMContentLoaded', function () {
    new Accordion('#faqAccordion', {
      duration: 400,
      showMultiple: false,
      openOnInit: [0],
      elementClass: 'ac',
      triggerClass: 'ac-trigger',
      panelClass: 'ac-panel',
      activeClass: 'is-active',
    });
  });
}
