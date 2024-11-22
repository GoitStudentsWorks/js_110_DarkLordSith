import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-accordion-box', {
  openOnInit: [0],
  collapse: false,
  elementClass: 'faq-accordion-item',
  triggerClass: 'faq-accordion-trigger',
  panelClass: 'faq-accordion-panel',
});
