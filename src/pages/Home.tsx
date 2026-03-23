import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Users, Zap, Store, Layout, ListChecks, TrendingUp } from 'lucide-react';

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

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 md:mb-20">
            {/* Left Column: Copy & CTAs */}
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-200/50 text-neutral-700 text-sm font-medium mb-6 border border-neutral-300/50">
                  Digital Support for Small Businesses
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]"
              >
                Helping Small Businesses Build a Better Digital Foundation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-neutral-500 leading-relaxed max-w-2xl"
              >
                BasalOps helps small businesses improve their online presence, simplify digital systems, and uncover practical opportunities for growth through thoughtful analysis and clear action.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/book-a-meeting"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95"
                >
                  Book a Meeting
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all active:scale-95 group"
                >
                  See How We Help
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Hero Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-neutral-200/40 to-transparent rounded-full blur-3xl -z-10" />
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/60 bg-white">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1QzqxSZSUfdJ0TUk_EqKEikoPLXze273T" 
                  alt="Digital Support Illustration" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Trust Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-200/60 pt-8"
          >
            {[
              "Small Business Focused",
              "Practical Recommendations",
              "Clear Digital Direction",
              "Meeting-Led Approach"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                 <span className="text-sm font-medium text-neutral-700">{text}</span>
              </div>
            ))}
          </motion.div>

        </div>
        
        {/* Abstract minimal background element */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-neutral-200 to-transparent blur-3xl" />
        </div>
      </section>

      {/* What BasalOps helps with / Pain Points */}
      <section className="py-24 bg-white border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16 max-w-2xl">
              Your business is online, but it is not working properly. We fix that.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weak Online Presence",
                desc: "Your digital presence does not reflect your business quality, costing you trust and credibility."
              },
              {
                title: "Poor Conversion",
                desc: "You get inquiries or traffic, but not enough conversions to justify the effort."
              },
              {
                title: "No Clear Digital System",
                desc: "You are posting content and trying tactics, but without a clear system or strategy."
              }
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200/50 h-full">
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">{point.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{point.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                Built for small businesses ready to grow.
              </h2>
              <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
                We understand the unique challenges of running a small business. You need practical support, not empty marketing jargon.
              </p>
              <ul className="space-y-4">
                {['Local service businesses', 'Retail and e-commerce', 'Clinics and professional practices', 'Hospitality and food brands'].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/who-we-help" className="text-neutral-900 font-medium hover:text-neutral-600 transition-colors inline-flex items-center">
                  Learn more about who we help <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-neutral-200/50 bg-neutral-100 group">
                <img 
                  src="https://picsum.photos/seed/modern-workspace/800/800" 
                  alt="Modern workspace" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                      <Store className="w-5 h-5 text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">Retail & E-commerce</div>
                      <div className="text-xs text-neutral-500">System Optimized</div>
                    </div>
                    <div className="ml-auto">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-100 px-3 py-2 rounded-lg w-fit">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Operations streamlined
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-neutral-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
                Meaningful solutions based on actual business needs.
              </h2>
              <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                View all services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Presence & Website Improvement",
                desc: "We fix websites that don't convert and build digital footprints that reflect your true quality."
              },
              {
                title: "Lead Generation & Social Media",
                desc: "Stop wasting effort online. We create clear systems to attract and convert the right customers."
              },
              {
                title: "Business Systems & Workflow",
                desc: "Streamline your operations so you can focus on growth instead of administrative chaos."
              },
              {
                title: "Strategy & Consultation",
                desc: "Get clarity over noise. We provide actionable roadmaps tailored to your specific goals."
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                A simple, transparent process.
              </h2>
              <p className="text-lg text-neutral-500">
                We believe in clarity. Here is exactly how our engagement starts.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-neutral-200" />
            
            {[
              {
                step: "01",
                title: "Book a meeting",
                desc: "Schedule a free consultation to discuss your current situation."
              },
              {
                step: "02",
                title: "We review & recommend",
                desc: "We analyze your digital gaps and propose meaningful next steps."
              },
              {
                step: "03",
                title: "Implement & improve",
                desc: "We guide the improvement or handle the implementation for you."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center pt-8">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-medium text-sm mb-6 relative z-10 ring-8 ring-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-500 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Ready to look at your business properly?
            </h2>
            <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto">
              Book a meeting today. No pressure, just a practical conversation about your growth.
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
