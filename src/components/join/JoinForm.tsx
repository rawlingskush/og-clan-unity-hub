
import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('5Oxgqe5hCq9cHN1yy');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.gamerTag.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'onlygreat237@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        gamer_tag: formData.gamerTag,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('Sending email with EmailJS...');

      // Send email using EmailJS with the provided credentials
      const response = await emailjs.send(
        'OgClanService',
        'template_ujcypoh',
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Application sent successfully!",
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
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      let errorMessage = "Please try again or contact us directly at onlygreat237@gmail.com";
      
      if (error.text) {
        errorMessage = `Failed to send: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Failed to send application",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedContent animation="scale-in" delay={300}>
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Join the OG Clan Family
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="gamerTag" className="block text-sm font-medium text-gray-700 mb-2">
              Gamer Tag
            </label>
            <Input
              type="text"
              id="gamerTag"
              value={formData.gamerTag}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Your gamer tag"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Why do you want to join?
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan resize-none"
              placeholder="Tell us a bit about yourself..."
              required
            />
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
    </AnimatedContent>
  );
};

export default JoinForm;
