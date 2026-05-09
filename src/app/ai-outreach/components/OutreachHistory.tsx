"use client";

import { MessageSquare, Phone, Mic, Clock, ChevronRight } from "lucide-react";

export default function OutreachHistory() {
  const history = [
    { type: "sms", lead: "John Smith", preview: "Hi John, I saw your property at 123 Main St...", time: "2 hours ago" },
    { type: "coldcall", lead: "Sarah Parker", preview: "Hello, this is [Name]. I'm calling about the...", time: "5 hours ago" },
    { type: "voicemail", lead: "Michael Brown", preview: "Hi Michael, I'm interested in a direct cash offer...", time: "Yesterday" },
    { type: "sms", lead: "Emma Wilson", preview: "Hey Emma, would you be open to selling your...", time: "2 days ago" },
    { type: "sms", lead: "Robert Davis", preview: "Hi Robert, I noticed you have a property for...", time: "Feb 10" },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
        <Clock className="text-primary" size={20} /> Recent Generations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item, i) => {
          const Icon = item.type === "sms" ? MessageSquare : item.type === "coldcall" ? Phone : Mic;
          return (
            <button key={i} className="bg-charcoal border border-charcoal-light p-6 rounded-2xl hover:border-primary/40 transition-all text-left group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-charcoal-light rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{item.time}</span>
              </div>
              <h4 className="font-bold text-white mb-2">{item.lead}</h4>
              <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed mb-4">{item.preview}</p>
              <div className="flex items-center text-primary text-[10px] font-black uppercase tracking-tighter gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Load into editor <ChevronRight size={10} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
