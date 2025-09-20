import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
    
    // Ensure scroll to top for all page navigations
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navigateToSection = (sectionId: string) => {
    // If already on homepage, scroll to section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with section hash
      navigate(`/#${sectionId}`);
    }
  };

  return {
    navigateToPage,
    navigateToSection
  };
};