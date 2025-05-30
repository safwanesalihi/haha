// Utility function for scrolling to contact section
// Centralized in a single file for reusability
export const scrollToContact = () => {
  const contactSection = document.querySelector('#contact-form');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
