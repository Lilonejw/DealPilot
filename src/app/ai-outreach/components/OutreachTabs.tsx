"use client";

import { MessageSquare, Phone, Mic } from "lucide-react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export default function OutreachTabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: "sms", label: "SMS Messages", icon: MessageSquare },
    { id: "coldcall", label: "Cold Call Scripts", icon: Phone },
    { id: "voicemail", label: "Voicemail Scripts", icon: Mic },
  ];

  return (
    <div className="flex bg-charcoal p-1 rounded-2xl border border-charcoal-light mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-xl transition-all relative ${
              isActive 
                ? "bg-charcoal-light text-white" 
                : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
            }`}
          >
            <Icon size={18} className={isActive ? "text-primary" : ""} />
            <span className="text-sm font-semibold">{tab.label}</span>
            {isActive && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
