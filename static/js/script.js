function toggleAccordion(header) {
  const accordionItem = header.parentElement;
  const accordionContent = accordionItem.querySelector('.accordion-content');
  const isOpen = accordionItem.classList.contains('open');

  // Close all accordion items
  document.querySelectorAll('.accordion-item').forEach((item) => {
    item.classList.remove('open');
    item.querySelector('.accordion-content').style.maxHeight = null;
    item.querySelector('.plus-icon').style.display = 'block';
    item.querySelector('.minus-icon').style.display = 'none';
  });

  // If the clicked item is not open, open it
  if (!isOpen) {
    accordionItem.classList.add('open');
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    accordionItem.querySelector('.plus-icon').style.display = 'none';
    accordionItem.querySelector('.minus-icon').style.display = 'block';
  }
}
