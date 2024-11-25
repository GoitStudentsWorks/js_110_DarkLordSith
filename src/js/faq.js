import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-accordion-box', {
  openOnInit: [0],
  collapse: true,
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
  beforeOpen: currentElement => {
    const items = document.querySelectorAll('.faq-accordion-item');
    items.forEach(item => item.classList.remove('accordion-active'));
    currentElement.classList.add('accordion-active');
  },
  beforeClose: currentElement => {
    currentElement.classList.remove('accordion-active');
  },
});

const accordionItems = document.querySelectorAll('.faq-accordion-item');
accordionItems[0].classList.add('accordion-active');

accordionItems.forEach(item => {
  const trigger = item.querySelector('.faq-accordion-trigger');
  let isOpen = item === accordionItems[0];

  trigger.addEventListener('click', () => {
    if (isOpen) {
      accordion.close(Array.from(accordionItems).indexOf(item));
      item.classList.remove('accordion-active');
      isOpen = false;
    } else {
      isOpen = trigger.getAttribute('aria-expanded') === 'true';
    }
  });
});
