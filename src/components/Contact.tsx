import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "bdf52447-d001-4503-b597-997a694ab7fa";

  // Intersection Observer animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Web3Forms Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_name: "Portfolio Contact Form",
      }),
    });

    const result = await res.json();
    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setSubmitStatus("error");
    }

    setTimeout(() => setSubmitStatus("idle"), 4000);
  };

  // Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pradnyapangavhane5@gmail.com',
      href: 'mailto:pradnyapangavhane5@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7499805537',
      href: 'tel:+917499805537',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kopargaon-423603, Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      href: "https://github.com/techbypradnya",
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: "https://linkedin.com/in/pradnya-pangavhane-446793289",
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Let's collaborate and create something amazing together. Reach out with any inquiries or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="glass p-8 rounded-2xl mb-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.title}</p>
                      <p className="text-gray-800 dark:text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="glass p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={`Visit ${social.title}`}
                    className={`p-4 glass rounded-xl hover:scale-110 hover:shadow-lg transition-all duration-300 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                Send a Message
              </h3>

              <div className="space-y-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border transition-colors ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border transition-colors ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border transition-colors ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                    } resize-none focus:outline-none`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 rounded-lg text-center flex items-center justify-center gap-2">
                    <span>✓</span>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-700 dark:text-red-300 rounded-lg text-center flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Validation error. Please check the form and try again.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Pradnya Shailendra Pangavhane. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
