
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Youtube, MessageSquare, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  
  const socialLinks = [
    { icon: <Smartphone className="w-4 h-4" />, href: "#", label: "TikTok" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
    { icon: <MessageSquare className="w-4 h-4" />, href: "#", label: "Discord" },
  ];

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    } else {
      toast({
        title: "Section not found",
        description: `The ${sectionId} section is not available yet.`,
        variant: "destructive",
      });
    }
  };

  const handleSocialClick = (label: string) => {
    toast({
      title: `${label} Coming Soon`,
      description: `Our ${label} channel will be available soon!`,
      variant: "default",
    });
  };

  return (
    <footer className="bg-black/80 border-t border-ogclan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <a 
              href="#home" 
              className="flex items-center mb-3"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <div className="w-8 h-8 bg-ogclan rounded-lg flex items-center justify-center text-black mr-2">
                OG
              </div>
              <span className="text-lg font-bold text-ogclan">OG Clan</span>
            </a>
            <p className="text-gray-400 mb-4 max-w-md text-sm">
              Where gaming passion meets loyalty. Building a community of dedicated gamers in Cameroon and beyond.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.label)}
                  className="social-icon w-7 h-7 p-1.5 rounded-full bg-ogclan/10 hover:bg-ogclan/20 text-ogclan transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-ogclan uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                {name: 'Home', id: 'home'}, 
                {name: 'About', id: 'about'}, 
                {name: 'Highlights', id: 'highlights'}, 
                {name: 'Join Us', id: 'join'}
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`}
                    className="text-gray-400 hover:text-ogclan transition-colors block py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
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
                <a 
                  href="mailto:onlygreat237@gmail.com" 
                  className="hover:text-ogclan transition-colors"
                >
                  onlygreat237@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-ogclan/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} OG Clan. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <button 
              className="text-gray-500 hover:text-ogclan text-xs"
              onClick={() => {
                toast({
                  title: "Privacy Policy",
                  description: "Our privacy policy is currently being updated.",
                  variant: "default",
                });
              }}
            >
              Privacy
            </button>
            <button 
              className="text-gray-500 hover:text-ogclan text-xs"
              onClick={() => {
                toast({
                  title: "Terms of Service",
                  description: "Our terms of service are currently being updated.",
                  variant: "default",
                });
              }}
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
