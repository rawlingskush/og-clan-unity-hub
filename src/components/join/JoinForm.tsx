
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import emailjs from '@emailjs/browser';
import AnimatedContent from '../AnimatedContent';

interface FormData {
  name: string;
  email: string;
  gamerTag: string;
  uid: string;
  currentGameName: string;
  formerClan: string;
  whatsappNumber: string;
  message: string;
}

const JoinForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    gamerTag: '',
    uid: '',
    currentGameName: '',
    formerClan: '',
    whatsappNumber: '',
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.gamerTag.trim() || 
        !formData.uid.trim() || !formData.currentGameName.trim() || !formData.whatsappNumber.trim() || 
        !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          gamer_tag: formData.gamerTag,
          uid: formData.uid,
          current_game_name: formData.currentGameName,
          former_clan: formData.formerClan,
          whatsapp_number: formData.whatsappNumber,
          message: formData.message
        });

      if (dbError) {
        throw dbError;
      }

      // Also send email using EmailJS as backup notification
      try {
        const templateParams = {
          to_email: 'onlygreat237@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          gamer_tag: formData.gamerTag,
          uid: formData.uid,
          current_game_name: formData.currentGameName,
          former_clan: formData.formerClan || 'None',
          whatsapp_number: formData.whatsappNumber,
          message: formData.message,
          reply_to: formData.email
        };

        await emailjs.send(
          'service_hbt4m3b',
          'template_ujcypoh',
          templateParams
        );
      } catch (emailError) {
        // Email is secondary, don't fail the entire submission
        console.warn('Email notification failed:', emailError);
      }

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
        uid: '',
        currentGameName: '',
        formerClan: '',
        whatsappNumber: '',
        message: ''
      });
    } catch (error: any) {
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
        
        {/* Requirements Section */}
        <div className="bg-ogclan-light/10 border-l-4 border-ogclan rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            📋 Required Information
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Your UID (Player ID)</li>
            <li>• Current game name in Call of Duty Mobile</li>
            <li>• Former clan (if you had one)</li>
            <li>• WhatsApp number for communication</li>
            <li>• Complete all form fields below</li>
          </ul>
        </div>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Enter your real name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
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
              Gamer Tag *
            </label>
            <Input
              type="text"
              id="gamerTag"
              value={formData.gamerTag}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Your current gamer tag"
              required
            />
          </div>
          <div>
            <label htmlFor="uid" className="block text-sm font-medium text-gray-700 mb-2">
              UID (Player ID) *
            </label>
            <Input
              type="text"
              id="uid"
              value={formData.uid}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Your CODM UID"
              required
            />
          </div>
          <div>
            <label htmlFor="currentGameName" className="block text-sm font-medium text-gray-700 mb-2">
              Current Game Name *
            </label>
            <Input
              type="text"
              id="currentGameName"
              value={formData.currentGameName}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Your in-game name in Call of Duty Mobile"
              required
            />
          </div>
          <div>
            <label htmlFor="formerClan" className="block text-sm font-medium text-gray-700 mb-2">
              Former Clan (if any)
            </label>
            <Input
              type="text"
              id="formerClan"
              value={formData.formerClan}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="Previous clan name or 'None'"
            />
          </div>
          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp Number *
            </label>
            <Input
              type="tel"
              id="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan"
              placeholder="+1234567890"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Info & Required Details *
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-gray-900 bg-white border-gray-300 focus:border-ogclan focus:ring-ogclan resize-none"
              placeholder="Please confirm all required information above is accurate and tell us why you want to join OG Clan..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4"
          >
            {isSubmitting ? 'Sending Application...' : 'Submit Application'}
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            By submitting, you agree to join our community and provide accurate information
          </p>
        </form>
      </div>
    </AnimatedContent>
  );
};

export default JoinForm;
