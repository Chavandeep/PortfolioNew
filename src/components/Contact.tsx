import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgvawayn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-background to-background opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-white/60 mb-1">Email</h4>
                  <p className="text-white/90">deep.chavan.201085@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-white/60 mb-1">Phone</h4>
                  <p className="text-white/90">+91 7045187390</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-white/60 mb-1">Location</h4>
                  <p className="text-white/90">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm text-white/60 mb-1 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 focus-visible:ring-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm text-white/60 mb-1 block">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/10 focus-visible:ring-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm text-white/60 mb-1 block">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="bg-white/5 border-white/10 focus-visible:ring-white/20 text-white min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full glass-card bg-white/10 hover:bg-white/55 border-none flex items-center">
              
                {isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
