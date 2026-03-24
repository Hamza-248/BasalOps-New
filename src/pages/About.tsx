import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>About Us | BasalOps</title>
        <meta name="description" content="We are a thoughtful, practical partner for small businesses. Learn about our mission and philosophy." />
      </Helmet>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6"
            >
              Clarity over noise.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed"
            >
              We are a thoughtful, practical partner for small businesses. Not a flashy agency selling empty marketing jargon.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <FadeIn>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our mission is to help small businesses navigate the digital landscape with confidence. We believe that every business, regardless of size, deserves access to high-quality digital tools, strategies, and systems that actually work. We cut through the noise and focus on what matters: growth, efficiency, and building trust with your customers.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Our Philosophy</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                We value practical support over complex theories. We don't believe in one-size-fits-all packages. Instead, we take a consultative approach. We listen to your problems, analyze your current setup, and provide meaningful solutions based on your actual business needs.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We believe in transparency. You'll always know what we're doing, why we're doing it, and how it impacts your bottom line. No hidden fees, no confusing reports, just honest work and clear communication.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Why Small Businesses?</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Small businesses are the backbone of the economy, but they often struggle to compete online. They don't have dedicated IT departments or massive marketing budgets. We exist to level the playing field. We provide the expertise and support you need to build a strong digital foundation, so you can focus on what you do best: running your business.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
              Looking for a practical partner?
            </h2>
            <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow. Book a call today.
            </p>
            <Link
              to="/book-a-meeting"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95"
            >
              Book a Strategy Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
