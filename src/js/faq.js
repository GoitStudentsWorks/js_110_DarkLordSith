import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-accordion-box', {
  openOnInit: [0],
  collapse: true,
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',

  beforeOpen: element => element.classList.add('accordion-active'),
  beforeClose: element => element.classList.remove('accordion-active'),
});
