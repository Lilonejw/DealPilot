"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const outreachNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Leads", href: "/leads" },
  { name: "AI Outreach", href: "/outreach" },
  { name: "Pipeline", href: "/pipeline" },
  { name: "Settings", href: "/settings" },
];

export default function OutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">DP</span>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">DealPilot</span>
            </Link>
          </div>

          {/* Mobile navigation */}
          <nav className="flex items-center gap-1 overflow-x-auto">
            {outreachNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-surface hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-xs">MJ</span>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="p-4 lg:p-6">{children}</main>
    </div>
  );
}