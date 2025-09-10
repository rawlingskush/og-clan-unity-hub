/**
 * Navigation utilities for smooth scrolling and route handling
 */

export const scrollToSection = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const isExternalLink = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:');
};

export const getSectionFromHash = (hash: string): string => {
  return hash.replace('#', '');
};