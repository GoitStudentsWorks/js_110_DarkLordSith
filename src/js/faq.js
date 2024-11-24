import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-accordion-box', {
  openOnInit: [0],
  collapse: false,
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
});

const accordionItems = document.querySelectorAll('.faq-accordion-item');

accordionItems.forEach((item, index) => {
  const trigger = item.querySelector('.faq-accordion-trigger');

  trigger.addEventListener('click', () => {
    accordionItems.forEach(item => {
      item.classList.remove('accordion-active');
    });

    if (trigger.getAttribute('aria-expanded') === 'true') {
      item.classList.add('accordion-active');
    }
  });
});

accordionItems[0].classList.add('accordion-active');
