
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Youtube, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Smartphone className="w-4 h-4" />, href: "#", label: "TikTok" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
    { icon: <MessageSquare className="w-4 h-4" />, href: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-black/80 border-t border-ogclan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-3">
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
                <a
                  key={index}
                  href={social.href}
                  className="social-icon w-7 h-7"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-ogclan uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Highlights', 'Join Us'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-ogclan transition-colors"
                  >
                    {item}
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
                <a href="mailto:onlygreat237@gmail.com" className="hover:text-ogclan transition-colors">
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
            <a href="#" className="text-gray-500 hover:text-ogclan text-xs">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-ogclan text-xs">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
