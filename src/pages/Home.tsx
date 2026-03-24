import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Users, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';

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

const FAQItem = ({ question, answer, delay }: { question: string, answer: string, delay: number, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div className="border border-neutral-200/60 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-neutral-300">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        >
          <span className="font-medium text-neutral-900 pr-4">{question}</span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />}
        </button>
        {isOpen && (
          <div className="px-6 pb-5 text-neutral-500 leading-relaxed">
            {answer}
          </div>
        )}
      </div>
    </FadeIn>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]"
            >
              We help small businesses improve their digital presence, systems, and growth.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto"
            >
              Book a consultation and get practical insights for your business. No jargon, just meaningful solutions based on actual business needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/book-a-meeting"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-xl shadow-neutral-900/20"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all active:scale-95 group shadow-sm"
              >
                See How We Help
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background Image & 3D Grid */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-[#FAFAFA]" style={{ perspective: '1000px' }}>
          {/* Subtle Background Image */}
          <div className="absolute inset-0 z-0 opacity-[0.06] mix-blend-luminosity">
            <img 
              src="https://picsum.photos/seed/office/1920/1080?grayscale" 
              alt="Agency Workspace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:4rem_4rem] origin-top opacity-60 z-10" 
            style={{ transform: 'rotateX(60deg) translateY(-100px) scale(2.5)' }}
          ></div>
          <div className="absolute left-0 right-0 top-1/4 z-0 m-auto h-[500px] w-[500px] rounded-full bg-neutral-300 opacity-40 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20"></div>
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
      <section className="py-24 bg-white border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                Built for small businesses ready to grow.
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed">
                We understand the unique challenges of running a small business. You need practical support, not empty marketing jargon.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 h-full flex flex-col justify-between group hover:border-neutral-300 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">Local Service Businesses</h3>
                  <p className="text-neutral-500 leading-relaxed">Plumbers, electricians, landscapers, and home services needing more local leads.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 h-full flex flex-col justify-between group hover:border-neutral-300 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">Clinics & Practices</h3>
                  <p className="text-neutral-500 leading-relaxed">Dental, medical, and wellness clinics looking to streamline patient acquisition.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/60 h-full flex flex-col justify-between group hover:border-neutral-300 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-neutral-700" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">Retail & E-commerce</h3>
                  <p className="text-neutral-500 leading-relaxed">Independent stores and online shops wanting to increase sales and retention.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link to="/who-we-help" className="inline-flex items-center text-neutral-900 font-medium hover:text-neutral-600 transition-colors">
                See all industries we serve <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 max-w-2xl">
                Meaningful solutions based on actual business needs.
              </h2>
              <Link to="/services" className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                View all services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Presence & Website Improvement",
                desc: "We fix websites that don't convert and build digital footprints that reflect your true quality. Fast, SEO-optimized, and built to generate leads."
              },
              {
                title: "Lead Generation & Social Media",
                desc: "Stop wasting effort online. We create clear systems to attract and convert the right customers using targeted campaigns and content."
              },
              {
                title: "Business Systems & Workflow",
                desc: "Streamline your operations so you can focus on growth instead of administrative chaos. We integrate tools that save you hours every week."
              },
              {
                title: "Strategy & Consultation",
                desc: "Get clarity over noise. We provide actionable roadmaps tailored to your specific goals, helping you make informed decisions."
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[2rem] bg-white border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 h-full group">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">{service.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-lg">{service.desc}</p>
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

      {/* Trustpilot Reviews */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-neutral-900">Excellent</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center rounded-sm">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-neutral-500">Based on <span className="font-semibold text-neutral-900">150+ reviews</span> on <span className="font-semibold text-neutral-900 inline-flex items-center justify-center gap-1"><Star className="w-4 h-4 text-[#00B67A] fill-current" /> Trustpilot</span></p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Jenkins",
                company: "Jenkins Plumbing",
                review: "BasalOps completely transformed how we get leads. Our new website paid for itself in the first month. Highly recommend their no-nonsense approach."
              },
              {
                name: "Dr. Michael Chen",
                company: "Chen Dental",
                review: "Finally, an agency that understands small business. They streamlined our booking system and our patient acquisition has never been smoother."
              },
              {
                name: "Emma Roberts",
                company: "The Artisan Bakery",
                review: "Clear, practical, and effective. They didn't try to sell us things we didn't need. They just fixed what was broken and helped us grow."
              }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200/60 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[#00B67A] fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-6 flex-grow">"{review.review}"</p>
                  <div>
                    <p className="font-medium text-neutral-900">{review.name}</p>
                    <p className="text-sm text-neutral-500">{review.company}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-500">
                Everything you need to know about working with us.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Do you only work with specific industries?",
                a: "While we specialize in local services, clinics, and retail, our core principles of digital presence and system optimization apply to almost any small to medium-sized business."
              },
              {
                q: "How long does it take to see results?",
                a: "Website improvements and system integrations often show immediate efficiency gains. Lead generation and SEO strategies typically take 3-6 months to show significant, compounding results."
              },
              {
                q: "Do I need a large budget to work with you?",
                a: "No. We believe in practical, scalable solutions. We start by fixing the most critical issues that provide the highest ROI, and scale our efforts as your business grows."
              },
              {
                q: "Will I be locked into a long-term contract?",
                a: "We offer both project-based work (like website builds) and ongoing retainers. Our retainers are typically month-to-month because we believe in earning your business through consistent results."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
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
