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

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Book a meeting",
      desc: "Schedule a free, no-pressure consultation. We'll ask a few simple questions upfront so we can prepare."
    },
    {
      num: "02",
      title: "We understand your business",
      desc: "During our call, we listen. We learn about your goals, your current challenges, and what you actually want to achieve."
    },
    {
      num: "03",
      title: "We review your digital presence",
      desc: "We analyze your website, your systems, and your online footprint to identify gaps and opportunities."
    },
    {
      num: "04",
      title: "We recommend meaningful next steps",
      desc: "We provide a clear, jargon-free roadmap. We tell you what needs fixing, what to prioritize, and how we can help."
    },
    {
      num: "05",
      title: "We implement or guide improvement",
      desc: "Once agreed, we get to work. Whether we are building a new site, setting up systems, or running campaigns, we keep you informed every step of the way."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>How It Works | BasalOps</title>
        <meta name="description" content="A simple, transparent process. Learn exactly how our engagement works from the first meeting to implementation." />
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
              A simple, transparent process.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed"
            >
              Many small businesses don't know what happens after they contact an agency. We believe in clarity. Here is exactly how our engagement works.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-2xl font-semibold text-neutral-400 font-mono">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index !== steps.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-neutral-200 ml-8 mt-8" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
              Ready to take the first step?
            </h2>
            <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto">
              It all starts with a simple conversation. Let's discuss your business and see if we're a good fit.
            </p>
            <Link
              to="/book-a-meeting"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
            >
              Book a Strategy Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
