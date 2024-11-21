export const initFaq = () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Open first item by default
  const firstItem = accordionItems[0];
  const firstHeader = firstItem.querySelector('.accordion-header');
  const firstContent = firstItem.querySelector('.accordion-content');
  firstItem.classList.add('active');
  firstHeader.classList.add('active');
  firstHeader.setAttribute('aria-expanded', 'true');
  firstContent.classList.add('active');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');

      // Close all items
      accordionItems.forEach(otherItem => {
        const otherHeader = otherItem.querySelector('.accordion-header');
        const otherContent = otherItem.querySelector('.accordion-content');
        otherItem.classList.remove('active');
        otherHeader.classList.remove('active');
        otherHeader.setAttribute('aria-expanded', 'false');
        otherContent.classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        header.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
      }
    });
  });
};
