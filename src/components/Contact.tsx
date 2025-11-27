import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // ⭐ Web3Forms Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "bdf52447-d001-4503-b597-997a694ab7fa", // ⭐ Your Access Key
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
    } else {
      setSubmitStatus("error");
    }

    setTimeout(() => setSubmitStatus("idle"), 4000);
  };

  // Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pradnya.pangavhane@example.com',
      href: 'mailto:pradnya.pangavhane@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7499805537',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kopargaon-423603, Maharashtra, India',
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
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="glass p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                      <p className="text-gray-800 dark:text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-4 glass rounded-xl hover:scale-110 transition-all duration-300 ${social.color}`}
                    target="_blank"
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
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">

                <input type="hidden" name="access_key" value="bdf52447-d001-4503-b597-997a694ab7fa" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 disabled:opacity-50 transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center">
                    Message sent successfully!
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Pradnya Shailendra Pangavhane. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
