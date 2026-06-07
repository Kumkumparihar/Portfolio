import { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Github, Linkedin } from './Icons'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-indigo-500" size={22} />,
      label: "Email Address",
      value: "kumkumparihar2005@gmail.com",
      href: "mailto:kumkumparihar2005@gmail.com"
    },
    {
      icon: <Linkedin className="text-indigo-500" size={22} />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/kumkum-parihar",
      href: "https://www.linkedin.com/in/kumkum-parihar-a6305a310"
    },
    {
      icon: <Github className="text-indigo-500" size={22} />,
      label: "GitHub Account",
      value: "github.com/kumkum-parihar",
      href: "https://github.com/Kumkumparihar"
    }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message details are required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error as user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate server request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            Have a project in mind, an internship opportunity, or just want to connect? Send a message!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Connect With Me Directly
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-100 dark:border-purple-900/30 shadow-sm hover:border-indigo-500/35 dark:hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <span className="p-3.5 rounded-xl bg-slate-100 dark:bg-purple-950/40 dark:border dark:border-purple-900/20 text-slate-700 dark:text-zinc-300 group-hover:bg-indigo-500 group-hover:text-white dark:group-hover:bg-purple-400 dark:group-hover:text-zinc-950 transition-colors duration-300">
                    {info.icon}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                      {info.label}
                    </span>
                    <span className="font-bold text-slate-700 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 break-all">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-100 dark:border-purple-900/30 shadow-sm relative overflow-hidden">
              
              {/* Success Overlay state */}
              {submitSuccess && (
                <div className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 flex flex-col items-center justify-center text-center p-6 z-20 animate-fade-in-up">
                  <CheckCircle2 size={56} className="text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-zinc-400 max-w-sm">
                    Thank you for reaching out, Kumkum will get back to you as soon as possible.
                  </p>
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Tell me about your internship position or project collaboration..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 flex items-center space-x-1 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
