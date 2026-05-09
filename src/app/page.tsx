"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  MessageSquare, 
  PhoneCall, 
  Mic, 
  LineChart, 
  Users, 
  LayoutDashboard, 
  Bell, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-light border border-charcoal text-xs font-medium text-primary mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: AI Cold Call Script Generator
            </motion.div>
            
            <motion.h1 
              {...fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
            >
              Wholesale <span className="gradient-text">Smarter.</span><br />
              Close <span className="text-white">Faster.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Use AI to generate seller outreach, automate follow-ups, and manage your wholesale deals effortlessly. The all-in-one platform for serious investors.
            </motion.p>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/signup" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all red-glow flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight size={20} />
              </Link>
              <button className="w-full sm:w-auto bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-charcoal-light flex items-center justify-center gap-2">
                <Play size={20} className="fill-white" /> Watch Demo
              </button>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-20 relative max-w-5xl mx-auto"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-[40px]" />
              <div className="bg-charcoal rounded-[20px] p-2 border border-charcoal-light shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2000" 
                  alt="DealPilot Dashboard" 
                  className="rounded-[14px] w-full object-cover aspect-[16/9] opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <p className="text-center text-zinc-500 text-sm font-medium mb-12 uppercase tracking-widest">
              Trusted by 500+ Top Real Estate Investors
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="text-2xl font-bold text-zinc-300">PROPSTREAM</div>
              <div className="text-2xl font-bold text-zinc-300">BATCHSERVICE</div>
              <div className="text-2xl font-bold text-zinc-300">PODIO</div>
              <div className="text-2xl font-bold text-zinc-300">REI REPLY</div>
              <div className="text-2xl font-bold text-zinc-300">DEALMACHINE</div>
              <div className="text-2xl font-bold text-zinc-300">LISTSTACKER</div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32 bg-charcoal-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for the Modern Wholesaler</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Everything you need to find, track, and close motivated seller deals using cutting-edge AI technology.
              </p>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "AI SMS Generator", desc: "Generate high-conversion text messages tailored to seller motivation.", icon: <MessageSquare className="text-primary" /> },
                { title: "Cold Call Scripts", desc: "Dynamic scripts that adapt to seller objections in real-time.", icon: <PhoneCall className="text-primary" /> },
                { title: "Voicemail Scripts", desc: "Professional AI-written voicemail drops that actually get callbacks.", icon: <Mic className="text-primary" /> },
                { title: "Seller Analysis", desc: "Deep analysis of property data to identify true motivation scores.", icon: <LineChart className="text-primary" /> },
                { title: "Lead CRM", desc: "Keep all your leads organized in one clean, powerful interface.", icon: <Users className="text-primary" /> },
                { title: "Kanban Pipeline", desc: "Visual deal tracking from new lead to closed contract.", icon: <LayoutDashboard className="text-primary" /> },
                { title: "Follow-up Reminders", desc: "Never let a deal fall through the cracks with automated alerts.", icon: <Bell className="text-primary" /> },
                { title: "Cash Buyer Manager", desc: "Organize your buyers list and match them with deals instantly.", icon: <Users className="text-primary" /> }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-charcoal border border-charcoal-light hover:border-primary/50 transition-all hover:translate-y-[-5px]"
                >
                  <div className="w-12 h-12 bg-charcoal-light rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">How DealPilot AI <br/><span className="text-primary">Closes More Deals</span></h2>
                
                <div className="space-y-12">
              {[
                { step: "01", title: "Add Your Leads", desc: "Upload your list from PropStream, Batch, or DealMachine. Our AI instantly analyzes them for motivation signs." },
                { step: "02", title: "Generate AI Outreach", desc: "Generate perfectly crafted SMS, scripts, or emails. Reach out with confidence and speed." },
                { step: "03", title: "Close More Deals", desc: "Move deals through your custom pipeline. Use our automated reminders to stay top of mind until the contract is signed." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i < 2 && (
                    <div className="absolute left-7 top-16 w-0.5 h-16 bg-charcoal-light hidden lg:block" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-charcoal border border-charcoal-light flex items-center justify-center text-xl font-bold text-primary flex-shrink-0 z-10">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-500 text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-[100px] -z-10" />
                <div className="bg-charcoal p-4 rounded-3xl border border-charcoal-light shadow-2xl">
                  <div className="bg-charcoal-dark rounded-2xl p-6 h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Play className="text-primary fill-primary" size={32} />
                      </div>
                      <p className="text-lg font-medium">Watch Workflow Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-charcoal-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Real Wholesalers, <span className="text-primary">Real Results</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus Johnson", role: "Elite Wholesaler", text: "DealPilot's AI text generator doubled my response rate in the first week. It writes better than I ever could.", avatar: "MJ" },
                { name: "Sarah Chen", role: "REI Acquisitions", text: "The pipeline management is so clean. Finally, a CRM that doesn't feel like it was built in the 90s.", avatar: "SC" },
                { name: "David Miller", role: "7-Figure Investor", text: "I've replaced three different tools with DealPilot. It's the central nervous system of my wholesale business.", avatar: "DM" }
              ].map((t, i) => (
                <div key={i} className="p-8 rounded-2xl bg-charcoal border border-charcoal-light relative">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-primary font-bold">★</span>)}
                  </div>
                  <p className="text-zinc-300 italic mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-zinc-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
              <p className="text-zinc-400">Choose the plan that fits your deal flow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Starter", price: "$49", features: ["1,000 AI Generations", "Basic CRM", "Standard Support", "Up to 100 Leads"] },
                { name: "Pro", price: "$99", popular: true, features: ["Unlimited AI Generations", "Advanced CRM", "Priority Support", "Unlimited Leads", "Custom Pipelines"] },
                { name: "Team", price: "$199", features: ["Everything in Pro", "Up to 10 Team Members", "Whitelabeling", "API Access", "Dedicated Success Manager"] }
              ].map((plan, i) => (
                <div 
                  key={i} 
                  className={`p-10 rounded-3xl border ${plan.popular ? 'border-primary bg-charcoal relative' : 'border-charcoal-light bg-charcoal-dark'} flex flex-col`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-zinc-500">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/signup" 
                    className={`w-full py-4 rounded-xl font-bold transition-all text-center ${plan.popular ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-charcoal-light hover:bg-charcoal text-white border border-charcoal-light'}`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-charcoal-dark">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                { q: "How accurate is the AI outreach generator?", a: "Extremely. Our AI is trained on thousands of high-performing wholesale scripts and real-world conversations to ensure the tone and strategy are perfect for real estate." },
                { q: "Can I import leads from PropStream?", a: "Yes! DealPilot AI supports easy CSV imports from PropStream, BatchLeads, DealMachine, and most other major real estate data providers." },
                { q: "Do you offer a free trial?", a: "Absolutely. You can start with a 7-day free trial on any plan to test out the AI and CRM features." },
                { q: "Is my data secure?", a: "We take security seriously. All lead and deal data is encrypted and stored securely in our database. We never share your data with other investors." },
                { q: "Can I use my own phone number for SMS?", a: "Currently, our AI generates the scripts which you can then send through your preferred SMS platform. We are working on direct integrations for late 2024." },
                { q: "Is there a limit on how many leads I can manage?", a: "The Starter plan supports up to 100 leads, while our higher tiers support 500 or unlimited leads to accommodate growing businesses." }
              ].map((faq, i) => (
                <div key={i} className="bg-charcoal border border-charcoal-light rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span className="font-bold">{faq.q}</span>
                    <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="p-6 pt-0 text-zinc-500 border-t border-charcoal-light animate-in fade-in slide-in-from-top-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-[40px] p-12 md:p-24 border border-primary/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -ml-32 -mb-32" />
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to Scale Your<br/>Wholesale Business?</h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto relative z-10">Join hundreds of investors who are closing more deals with less effort using DealPilot AI.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link 
                  href="/signup" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-xl font-bold text-lg transition-all red-glow flex items-center justify-center gap-2"
                >
                  Start Your Free Trial
                </Link>
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
