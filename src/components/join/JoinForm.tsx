
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import AnimatedContent from '../AnimatedContent';

interface FormData {
  name: string;
  email: string;
  gamerTag: string;
  message: string;
}

const JoinForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    gamerTag: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'onlygreat237@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        gamer_tag: formData.gamerTag,
        message: formData.message,
      };

      console.log('Sending email with parameters:', templateParams);

      const response = await emailjs.send(
        'OgClanService',
        'template_ujcypoh',
        templateParams,
        '5Oxgqe5hCq9cHN1yy'
      );

      console.log('EmailJS response:', response);

      toast({
        title: "Application sent!",
        description: "Your request to join OG Clan has been received. We'll be in touch soon!",
        variant: "default",
      });

      setFormData({
        name: '',
        email: '',
        gamerTag: '',
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

  return (
    <AnimatedContent animation="scale-in" delay={300}>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          Join the OG Clan Family
        </h3>
        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all text-base"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all text-base"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="gamerTag" className="block text-sm font-medium text-gray-700 mb-1">
              Gamer Tag
            </label>
            <input
              type="text"
              id="gamerTag"
              value={formData.gamerTag}
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all text-base"
              placeholder="Your gamer tag"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Why do you want to join?
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all text-base resize-none"
              placeholder="Tell us a bit about yourself..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3 md:py-4 text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            {isSubmitting ? 'Sending...' : 'Sign Up Now'}
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            By signing up, you agree to join our community and receive updates about events
          </p>
        </form>
      </div>
    </AnimatedContent>
  );
};

export default JoinForm;
