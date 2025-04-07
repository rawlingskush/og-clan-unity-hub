
import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Medal, Award } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import { Textarea } from './ui/textarea';

const SponsorSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'onlygreat237@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
      };

      // Send email using EmailJS with the provided credentials
      await emailjs.send(
        'OgClanService', // Your EmailJS service ID
        'template_ujcypoh', // Your EmailJS template ID
        templateParams,
        '5Oxgqe5hCq9cHN1yy' // Your EmailJS user ID
      );

      toast({
        title: "Message sent!",
        description: "Your sponsorship request has been received. We'll be in touch soon!",
        variant: "default",
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at onlygreat237@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="sponsors" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-ogclan/5 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ogclan/5 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3 text-center">
            Fuel the Future of Cameroonian Gaming
          </h2>
          <div className="w-24 h-1 bg-ogclan mx-auto mb-8"></div>
        </AnimatedContent>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedContent animation="slide-in-left" delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                OG Clan is Cameroon's fastest-growing gaming community, driven by loyalty, passion, and a vision to unite gamers across the country.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-semibold">Our sponsors help us dominate Call of Duty multiplayer in Cameroon</span> and <span className="font-semibold">Battle Royale on Blackout, Alcatraz</span>, and more.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Growing Community</h3>
                    <p className="text-gray-400">With 50+ active members, 1K+ TikTok followers, and regular events like OG Battle Night pulling in 100+ participants, we're building a movement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Partner Benefits</h3>
                    <p className="text-gray-400">Sponsors get shoutouts on our socials, logo placements at events, and a chance to connect with Cameroon's most dedicated gamers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Proven Track Record</h3>
                    <p className="text-gray-400">We've hosted many successful tournaments, grown our clan by 100% in the last year, and are gearing up for even bigger things.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Medal className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Future Vision</h3>
                    <p className="text-gray-400">Join us in creating a thriving ecosystem for Cameroonian gamers and be at the forefront of a growing industry in Africa.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-right" delay={400}>
            <div className="glass-card rounded-2xl p-8 border border-ogclan/30">
              <h3 className="text-2xl font-bold text-ogclan mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6">
                Want to back the next big thing in Cameroonian gaming? Hit us up and let's create something amazing together.
              </p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company/Organization" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none" 
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in sponsoring OG Clan" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ogclan hover:bg-ogclan-dark text-black font-medium py-3 transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>;
};
export default SponsorSection;
