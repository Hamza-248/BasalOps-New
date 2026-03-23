import React, { useState } from 'react';
import { motion } from 'motion/react';

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

export default function BookMeeting() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFAFA]">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6"
            >
              Book a meeting and let's look at your business properly.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto"
            >
              We will discuss your current digital presence, business needs, and opportunities for improvement. No pressure, just a practical conversation.
            </motion.p>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl border border-neutral-200/50 p-8 md:p-12 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Request Received</h2>
                  <p className="text-neutral-500">Thank you for reaching out. We will get back to you shortly to confirm the meeting time.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-neutral-700 mb-2">Business Name</label>
                      <input type="text" id="business" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone or WhatsApp</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">Website or Social Media Link</label>
                    <input type="url" id="website" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA]" placeholder="https://yourwebsite.com" />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-2">Business Type</label>
                    <select id="type" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA] text-neutral-700">
                      <option value="">Select an option</option>
                      <option value="local">Local Service Business</option>
                      <option value="retail">Retail or E-commerce</option>
                      <option value="clinic">Clinic or Professional Practice</option>
                      <option value="education">Educational Business</option>
                      <option value="hospitality">Hospitality or Food Brand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-neutral-700 mb-2">Biggest challenge right now</label>
                    <textarea id="challenge" rows={4} required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all bg-[#FAFAFA] resize-none" placeholder="Tell us briefly what you're struggling with..."></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-all active:scale-95">
                      Request Consultation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
