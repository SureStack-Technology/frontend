import React, { useState } from 'react';
import { Mail, Shield, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import useLanguageStore from '../../stores/useLanguageStore';

// Modularized contact information block
const ContactInfoItem = ({ Icon, title, link, linkText }) => (
  <div className="flex items-start">
    <Icon className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
    <div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400">
        {linkText}
      </a>
    </div>
  </div>
);

// Modularized contact form
const ContactForm = () => {

  const { t, language } = useLanguageStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
    
      const XANO_ENDPOINT = 'https://x8ki-letl-twmt.n7.xano.io/api:5m-n75rP/contact-us'; 
      
      const response = await fetch(XANO_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Success
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400";

  return (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-white form-label mb-2">{t('contact.name')}</label>
          <input id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('contact.name_placeholder')}
                required />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-white form-label mb-2">{t('contact.email')}</label>
          <input id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your@email.com"
                required />
        </div>

        {/* Company Input */}
        <div>
          <label htmlFor="company" className="block text-white form-label mb-2">{t('contact.company')}</label>
          <input id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder={t('contact.company_placeholder')} />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-white form-label mb-2">{t('contact.message')}</label>
          <textarea id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClasses}
                    placeholder={t('contact.message_placeholder')}
                    required></textarea>
        </div>

        {/* Feedback Messages */}
        {status === 'success' && (
          <div className="p-3 bg-green-500/20 border border-green-500 rounded text-green-300 flex items-center gap-2">
            <CheckCircle size={18} />
            <span>{t('contact.success')}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 bg-red-500/20 border border-red-500 rounded text-red-300 flex items-center gap-2">
            <AlertCircle size={18} />
            <span>{t('contact.failure')}</span>
          </div>
        )}

        <button type="submit"
                className="w-full bg-cyan-500 flex justify-center items-center hover:bg-cyan-600 text-white subheading py-3 rounded-lg transition">
          {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                {t('contact.sending')}
              </>
            ) : (
              t('contact.button')
            )
          }
        </button>
      </form>
    </div>
  );
};


const Contact = () => {

  const { t, language } = useLanguageStore();
  
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 glass-card max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 border border-[var(--glow-cyan)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">{t('contact.heading')}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('contact.sub')}
            </p>

            <div className="space-y-6">
              <ContactInfoItem Icon={Mail} 
                              title={t('contact.email')} 
                              link="mailto:hello@surestack.tech" 
                              linkText="hello@surestack.tech" />

              <ContactInfoItem Icon={SiGithub} 
                              title="GitHub" 
                              link="https://github.com/surestack" 
                              linkText="github.com/surestack" />

              <ContactInfoItem Icon={Shield} 
                              title="WWW" 
                              link="https://surestack.tech" 
                              linkText="surestack.tech" />

            </div>
          </div>

          <ContactForm />

        </div>
      </div>
    </section>
  );
};

export default Contact;