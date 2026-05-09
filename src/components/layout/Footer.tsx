import Link from "next/link";
import { Plane, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-charcoal-light pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded rotate-12">
                <Plane className="text-white -rotate-12" size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                DealPilot<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The ultimate AI-powered platform for real estate wholesalers. Scale your outreach and close more deals.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-zinc-500 hover:text-primary transition-colors"><Github size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-zinc-500 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/ai-outreach" className="text-zinc-500 hover:text-white transition-colors text-sm">AI Generator</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Documentation</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Community</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} DealPilot AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-600 hover:text-white transition-colors text-xs">Terms of Service</Link>
            <Link href="#" className="text-zinc-600 hover:text-white transition-colors text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
