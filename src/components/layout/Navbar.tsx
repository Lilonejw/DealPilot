"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-charcoal-light py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg rotate-12">
            <Plane className="text-white -rotate-12" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            DealPilot<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How it Works</Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Login</Link>
          <Link
            href="/signup"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all red-glow"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-charcoal border-b border-charcoal-light p-6 md:hidden flex flex-col gap-4"
        >
          <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-400">Features</Link>
          <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-400">How it Works</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-400">Pricing</Link>
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-400">Login</Link>
          <Link
            href="/signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
          >
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
