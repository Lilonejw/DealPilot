"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Kanban,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  BarChart3,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "AI Outreach", href: "/ai-outreach", icon: MessageSquare },
  { name: "Pipeline", href: "/pipeline", icon: Kanban },
  { name: "Pricing", href: "/pricing", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-surface border-r border-border transition-all duration-300",
          sidebarOpen ? "w-64" : "w-0 lg:w-64",
          sidebarCollapsed && "lg:w-20"
        )}
      >
        <div className={cn("flex flex-col h-full", sidebarCollapsed ? "lg:items-center" : "")}>
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">DP</span>
              </div>
              {!sidebarCollapsed && (
                <span className="text-xl font-bold text-white">DealPilot</span>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-text-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-surface-100 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <div className={cn("flex items-center gap-3", sidebarCollapsed && "lg:justify-center")}>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">MJ</span>
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">Marcus Johnson</p>
                  <p className="text-xs text-text-muted truncate">marcus@example.com</p>
                </div>
              )}
              {!sidebarCollapsed && (
                <button className="text-text-muted hover:text-white">
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-300",
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-64"
        )}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-text-muted hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:block text-text-muted hover:text-white"
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-5 h-5" />
                ) : (
                  <ChevronLeft className="w-5 h-5" />
                )}
              </button>

              {/* Search */}
              <div className="hidden sm:flex items-center gap-2 bg-surface px-3 py-2 rounded-xl w-64">
                <Search className="w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-white placeholder:text-text-muted focus:outline-none text-sm w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative text-text-muted hover:text-white">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-xs">MJ</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}