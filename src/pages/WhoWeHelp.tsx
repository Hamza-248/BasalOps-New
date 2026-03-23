import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Store, Stethoscope, GraduationCap, Utensils, Briefcase, Rocket } from 'lucide-react';

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

export default function WhoWeHelp() {
  const industries = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Local Service Businesses",
      desc: "Plumbers, electricians, landscapers, and contractors who need to turn local searches into booked jobs."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Retail Businesses",
      desc: "Boutiques and specialty shops looking to expand their local footprint and drive foot traffic or online sales."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinics & Professional Practices",
      desc: "Dentists, therapists, accountants, and lawyers who need to build trust and streamline client onboarding."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Businesses",
      desc: "Tutors, training centers, and course creators seeking to attract students and manage enrollments."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Hospitality & Food Brands",
      desc: "Restaurants, cafes, and caterers who need a strong visual presence and easy booking or ordering systems."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "New & Growing Small Businesses",
      desc: "Founders who have a great product or service but need help establishing a professional digital foundation."
    }
  ];

  return (
    <div className="flex flex-col w-full">
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
              This is for businesses like yours.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed"
            >
              We understand the context of small businesses. You don't have infinite budgets or time for complex marketing theories. You need practical solutions that work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200/50 h-full hover:border-neutral-300 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-200/50 flex items-center justify-center text-neutral-900 mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">{industry.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{industry.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pain Points */}
      <section className="py-24 bg-[#FAFAFA] border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">
              Sound familiar?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <FadeIn delay={0.1}>
              <div className="p-8 bg-white rounded-3xl border border-neutral-200/50">
                <p className="text-lg text-neutral-700 italic">
                  "I know I need to be online, but I don't know what actually works."
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 bg-white rounded-3xl border border-neutral-200/50">
                <p className="text-lg text-neutral-700 italic">
                  "My website is embarrassing and I'm losing customers to competitors."
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-8 bg-white rounded-3xl border border-neutral-200/50">
                <p className="text-lg text-neutral-700 italic">
                  "I'm spending too much time on admin tasks instead of serving my clients."
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-8 bg-white rounded-3xl border border-neutral-200/50">
                <p className="text-lg text-neutral-700 italic">
                  "I've tried running ads, but I just wasted money and got no results."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
              Let's look at your business properly.
            </h2>
            <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto">
              Every business is different. Book a call and we'll discuss your specific challenges and goals.
            </p>
            <Link
              to="/book-a-meeting"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95"
            >
              Schedule a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
