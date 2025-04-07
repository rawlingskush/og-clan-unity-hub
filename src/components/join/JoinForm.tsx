
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

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
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'onlygreat237@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        gamer_tag: formData.gamerTag,
        message: formData.message,
      };

      console.log('Sending email with parameters:', templateParams);

      // Send email using EmailJS with the provided credentials
      const response = await emailjs.send(
        'OgClanService', // Your EmailJS service ID
        'template_ujcypoh', // Your EmailJS template ID
        templateParams,
        '5Oxgqe5hCq9cHN1yy' // Your EmailJS user ID
      );

      console.log('EmailJS response:', response);

      toast({
        title: "Application sent!",
        description: "Your request to join OG Clan has been received. We'll be in touch soon!",
        variant: "default",
      });

      // Reset form after successful submission
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
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Join the OG Clan Family
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
            placeholder="Tell us a bit about yourself..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4"
        >
          {isSubmitting ? 'Sending...' : 'Sign Up Now'}
        </button>
        <p className="text-xs text-gray-500 text-center mt-2">
          By signing up, you agree to join our community and receive updates about events
        </p>
      </form>
    </div>
  );
};

export default JoinForm;
