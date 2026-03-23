import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFAFA]">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6"
              >
                Get in touch.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-neutral-500 leading-relaxed max-w-lg mb-12"
              >
                Not ready to book a full consultation? No problem. Send us a message and we'll get back to you within 24 hours.
              </motion.p>

              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-200/50 flex items-center justify-center text-neutral-900 mr-6 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-1">Email</h3>
                      <a href="mailto:hello@basalops.com" className="text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                        hello@basalops.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-200/50 flex items-center justify-center text-neutral-900 mr-6 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-1">Phone / WhatsApp</h3>
                      <a href="tel:+15550000000" className="text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                        +1 (555) 000-0000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-200/50 flex items-center justify-center text-neutral-900 mr-6 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-1">Location</h3>
                      <p className="text-lg font-medium text-neutral-900">
                        Remote-first, serving clients globally.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl border border-neutral-200/50 p-8 md:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Message Sent</h2>
                    <p className="text-neutral-500">Thank you for reaching out. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="John Doe" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                      <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA] resize-none" placeholder="How can we help you?"></textarea>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-all active:scale-95">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
