
import React from 'react';
import { cn } from '@/lib/utils';
import { Smartphone, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Smartphone className="w-5 h-5" />, href: "#", label: "TikTok" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-black/80 border-t border-ogclan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <div className="w-10 h-10 bg-ogclan rounded-lg flex items-center justify-center text-black mr-3">
                OG
              </div>
              <span className="text-xl font-bold text-ogclan">OG Clan</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Where gaming passion meets loyalty. Building a community of dedicated gamers in Cameroon and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-ogclan uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
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
            <h3 className="text-sm font-semibold text-ogclan uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Cameroon</li>
              <li>
                <a href="mailto:info@ogclan.com" className="hover:text-ogclan transition-colors">
                  info@ogclan.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-ogclan/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OG Clan. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-ogclan text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-ogclan text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
