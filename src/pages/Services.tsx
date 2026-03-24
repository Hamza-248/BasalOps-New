import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, LayoutTemplate, LineChart, Share2, Settings, Lightbulb } from 'lucide-react';

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

export default function Services() {
  const services = [
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Website Improvement",
      issue: "Your website looks outdated, loads slowly, or fails to convert visitors into customers.",
      solution: "We redesign and optimize your site for clarity, speed, and user experience.",
      outcome: "A professional digital storefront that builds trust and drives actual inquiries."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Lead Generation Support",
      issue: "You rely entirely on word-of-mouth and lack a predictable way to attract new business.",
      solution: "We set up targeted campaigns and clear conversion pathways.",
      outcome: "A consistent stream of qualified leads and a measurable return on your marketing effort."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media & Creative Direction",
      issue: "Your social presence is inconsistent, off-brand, or taking up too much of your time.",
      solution: "We provide content strategy, creative direction, and practical posting systems.",
      outcome: "A cohesive brand image that engages your audience without burning you out."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Business Systems & Workflow",
      issue: "You are drowning in manual tasks, messy spreadsheets, and disorganized customer data.",
      solution: "We implement simple, effective software tools and automate repetitive processes.",
      outcome: "More time saved, fewer errors, and a scalable foundation for your operations."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Strategy & Consultation",
      issue: "You know you need to grow digitally, but you don't know where to start or what to prioritize.",
      solution: "We act as your strategic partner, offering unbiased advice and clear roadmaps.",
      outcome: "Confidence in your decisions and a clear, step-by-step plan for your business."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Our Services | BasalOps</title>
        <meta name="description" content="Practical support for your business. We offer website improvement, lead generation, social media direction, and business systems." />
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
              Practical support for your business.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed"
            >
              We don't offer generic packages. We look at your specific challenges and provide outcome-based solutions to improve your digital presence and operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-24">
            {services.map((service, index) => (
              <FadeIn key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-4 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">The Issue</h3>
                      <p className="text-neutral-700 leading-relaxed">{service.issue}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">How We Help</h3>
                      <p className="text-neutral-700 leading-relaxed">{service.solution}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">The Outcome</h3>
                      <p className="text-neutral-900 font-medium leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>
                {index !== services.length - 1 && (
                  <div className="w-full h-px bg-neutral-200/60 mt-12 md:mt-24" />
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
              Not sure which area needs the most attention?
            </h2>
            <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto">
              That's exactly what our initial consultation is for. We'll help you identify the gaps and prioritize the most impactful improvements.
            </p>
            <Link
              to="/book-a-meeting"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
            >
              Let's Discuss Your Business
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
