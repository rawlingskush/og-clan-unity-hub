import React from 'react';
import { cn } from '@/lib/utils';
import { Youtube, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'auto'
      });
    } else {
      toast({
        title: "Section not found",
        description: `The ${sectionId} section is not available yet.`,
        variant: "destructive"
      });
    }
  };

  return (
    <footer className="bg-black/80 border-t border-ogclan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center mb-3" onClick={e => {
              e.preventDefault();
              handleNavClick('home');
            }}>
              <div className="w-8 h-8 bg-ogclan rounded-lg flex items-center justify-center text-black mr-2">
                OG
              </div>
              <span className="text-lg font-bold text-ogclan">OG Clan</span>
            </a>
            <p className="text-gray-400 mb-4 max-w-md text-sm">
              Where gaming passion meets loyalty. Building a community of dedicated gamers in Cameroon and beyond.
            </p>
            <div className="flex space-x-3">
              {/* TikTok Icon */}
              <a href="https://www.tiktok.com/@ogclancameroon" target="_blank" rel="noopener noreferrer" className="social-icon w-7 h-7 p-1.5 rounded-full bg-ogclan/10 hover:bg-ogclan/20 text-ogclan transition-colors duration-200" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                </svg>
              </a>
              
              {/* YouTube Icon - Now with real link */}
              <a href="https://www.youtube.com/channel/UCBN8lXS12rLtTE0Clp3kyYg" target="_blank" rel="noopener noreferrer" className="social-icon w-7 h-7 p-1.5 rounded-full bg-ogclan/10 hover:bg-ogclan/20 text-ogclan transition-colors duration-200" aria-label="YouTube">
                <Youtube className="w-full h-full" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-ogclan uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[{
              name: 'Home',
              id: 'home'
            }, {
              name: 'About',
              id: 'about'
            }, {
              name: 'Our Soldiers',
              id: 'soldiers'
            }, {
              name: 'Join Us',
              id: 'join'
            }].map((item, index) => <li key={index}>
                  <button className="text-gray-400 hover:text-ogclan transition-colors block py-1 text-left w-full" onClick={() => handleNavClick(item.id)}>
                    {item.name}
                  </button>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-ogclan uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Cameroon</li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-1 text-ogclan" />
                <a href="mailto:onlygreat237@gmail.com" className="hover:text-ogclan transition-colors">onlygreats237@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-ogclan/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} OG Clan. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <button className="text-gray-500 hover:text-ogclan text-xs" onClick={() => {
              toast({
                title: "Privacy Policy",
                description: "Our privacy policy is currently being updated.",
                variant: "default"
              });
            }}>
              Privacy
            </button>
            <button className="text-gray-500 hover:text-ogclan text-xs" onClick={() => {
              toast({
                title: "Terms of Service",
                description: "Our terms of service are currently being updated.",
                variant: "default"
              });
            }}>
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
