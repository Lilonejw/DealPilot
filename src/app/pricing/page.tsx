"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  HelpCircle, 
  Zap, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: { monthly: 49, yearly: 39 },
    description: "Perfect for individual wholesalers.",
    features: [
      "Up to 100 leads",
      "50 AI generations/month",
      "Basic pipeline tracking",
      "Email support",
      "SMS templates (5)"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro",
    price: { monthly: 99, yearly: 79 },
    description: "For growing investors ready to scale.",
    features: [
      "Up to 500 leads",
      "Unlimited AI generations",
      "Advanced pipeline + analytics",
      "Priority support",
      "All SMS templates",
      "Cold call scripts",
      "Voicemail scripts",
      "Team collaboration (3 seats)"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: { monthly: 199, yearly: 159 },
    description: "For teams closing deals together.",
    features: [
      "Unlimited leads",
      "Unlimited AI generations",
      "Full pipeline + analytics",
      "Dedicated support",
      "All templates + custom templates",
      "Team collaboration (unlimited)",
      "API access",
      "White-label option"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Choose Your Plan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-10"
            >
              Whether you're just starting out or scaling a wholesale empire, we have a plan that fits your needs.
            </motion.p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-zinc-500'}`}>Monthly</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-charcoal-light rounded-full p-1 relative transition-colors border border-charcoal"
              >
                <div className={`w-5 h-5 bg-primary rounded-full transition-all ${billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white font-bold' : 'text-zinc-500'}`}>
                Yearly <span className="text-primary text-xs ml-1 font-bold">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl border flex flex-col transition-all duration-300 ${
                  plan.popular 
                    ? "bg-charcoal border-primary red-glow scale-105 z-10" 
                    : "bg-charcoal-dark border-charcoal-light hover:border-zinc-700"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full self-start mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-zinc-500 font-medium">/mo</span>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-zinc-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/signup"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-charcoal-light hover:bg-charcoal text-white border border-zinc-800"
                  }`}
                >
                  {plan.cta} <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table (Simplified for mobile) */}
          <div className="max-w-5xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
            <div className="bg-charcoal rounded-3xl border border-charcoal-light overflow-hidden">
              <div className="grid grid-cols-4 p-8 border-b border-charcoal-light bg-charcoal-dark">
                <div className="font-bold">Feature</div>
                <div className="text-center font-bold">Starter</div>
                <div className="text-center font-bold">Pro</div>
                <div className="text-center font-bold">Team</div>
              </div>
              {[
                { name: "AI Outreach Credits", s: "1,000", p: "Unlimited", t: "Unlimited" },
                { name: "Kanban Pipelines", s: "1", p: "Unlimited", t: "Unlimited" },
                { name: "Team Members", s: "1", p: "1", t: "Up to 10" },
                { name: "Property Insights", s: "Basic", p: "Advanced", t: "Advanced" },
                { name: "Support Response", s: "24h", p: "2h", t: "Instant" },
                { name: "API Access", s: "No", p: "No", t: "Yes" },
                { name: "Custom Templates", s: "No", p: "Yes", t: "Yes" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 p-8 border-b border-charcoal-light last:border-0 hover:bg-white/[0.02] transition-colors">
                  <div className="text-zinc-400 text-sm font-medium">{row.name}</div>
                  <div className="text-center text-sm">{row.s}</div>
                  <div className="text-center text-sm font-semibold">{row.p}</div>
                  <div className="text-center text-sm">{row.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-32">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-charcoal-dark border border-charcoal-light">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Secure Payments</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Encryption at every step. We use Stripe for secure billing.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-charcoal-dark border border-charcoal-light">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-primary" size={32} />
              </div>
              <h4 className="font-bold mb-2">7-Day Free Trial</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Test all features risk-free. No credit card required to start.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-charcoal-dark border border-charcoal-light">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-primary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Money-Back Guarantee</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Not satisfied? Get a full refund within your first 30 days.</p>
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="max-w-3xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <HelpCircle className="text-primary" /> Pricing FAQ
            </h2>
            <div className="space-y-6">
              {[
                { q: "Can I change plans at any time?", a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the change is immediate. If you downgrade, it will take effect at the end of your current billing cycle." },
                { q: "What happens if I exceed my AI generation limit on Starter?", a: "On the Starter plan, if you hit your 1,000 credit limit, you'll be prompted to upgrade to Pro for unlimited access or wait until the next month for your credits to reset." },
                { q: "Is there a discount for annual billing?", a: "Yes! By choosing the annual billing cycle, you save 20% compared to paying monthly." },
                { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee. If you're not happy with DealPilot AI for any reason, contact our support team for a full refund." }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-charcoal border border-charcoal-light">
                  <h4 className="font-bold mb-4">{faq.q}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary/10 border border-primary/20 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
             <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to grow your business?</h2>
             <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Join the hundreds of wholesalers already closing more deals with AI.</p>
             <Link 
                href="/signup" 
                className="inline-flex bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-xl font-bold text-lg transition-all red-glow"
              >
                Get Started for Free
              </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
