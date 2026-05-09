"use client";

import { useState } from "react";
import { Search, Plus, User, MapPin, DollarSign, Brain, Check } from "lucide-react";

export default function OutreachInputForm({ onGenerate, isGenerating }: any) {
  const [showNewLead, setShowNewLead] = useState(false);
  const [tone, setTone] = useState("Professional");

  return (
    <div className="space-y-8">
      {/* Lead Selection */}
      <div className="bg-charcoal-dark border border-charcoal-light rounded-2xl p-6">
        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Lead Selection</label>
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <select className="w-full bg-charcoal border border-charcoal-light rounded-xl py-3 pl-12 pr-4 text-sm focus:border-primary outline-none appearance-none text-zinc-300">
            <option>Select an existing lead...</option>
            <option>John Smith - 123 Main St</option>
            <option>Sarah Parker - 456 Oak Ave</option>
            <option>Michael Brown - 789 Pine Rd</option>
          </select>
        </div>
        
        <button 
          onClick={() => setShowNewLead(!showNewLead)}
          className="text-primary text-xs font-bold flex items-center gap-2 hover:underline"
        >
          <Plus size={14} /> {showNewLead ? "Cancel" : "Or add new lead quickly"}
        </button>

        {showNewLead && (
          <div className="mt-6 space-y-4 pt-6 border-t border-charcoal-light animate-in fade-in slide-in-from-top-2">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase">Name</label>
                  <input type="text" className="w-full bg-charcoal border border-charcoal-light rounded-lg px-4 py-2 text-sm" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase">Phone</label>
                  <input type="text" className="w-full bg-charcoal border border-charcoal-light rounded-lg px-4 py-2 text-sm" placeholder="(555) 000-0000" />
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="bg-charcoal-dark border border-charcoal-light rounded-2xl p-6">
        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Property Details</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-full space-y-2">
            <label className="text-[10px] text-zinc-500 font-bold uppercase flex items-center gap-1">
              <MapPin size={10} /> Address
            </label>
            <input type="text" className="w-full bg-charcoal border border-charcoal-light rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" placeholder="e.g. 123 Main St, Austin TX" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-zinc-500 font-bold uppercase flex items-center gap-1">
              <DollarSign size={10} /> Asking Price
            </label>
            <input type="text" className="w-full bg-charcoal border border-charcoal-light rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" placeholder="$0.00" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-zinc-500 font-bold uppercase flex items-center gap-1">
              <Brain size={10} /> Est. ARV
            </label>
            <input type="text" className="w-full bg-charcoal border border-charcoal-light rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" placeholder="$0.00" />
          </div>
        </div>
      </div>

      {/* Tone Selector */}
      <div className="bg-charcoal-dark border border-charcoal-light rounded-2xl p-6">
        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Tone Selection</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["Professional", "Friendly", "Urgent", "Aggressive"].map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              className={`py-3 rounded-xl border text-xs font-bold transition-all ${
                tone === t 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-charcoal border-charcoal-light text-zinc-500 hover:border-zinc-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Personalization */}
      <div className="bg-charcoal-dark border border-charcoal-light rounded-2xl p-6">
        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Personalization</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Include seller name",
            "Include property details",
            "Reference previous contact",
            "Custom instructions"
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 bg-charcoal border border-charcoal-light rounded flex items-center justify-center group-hover:border-primary transition-colors">
                <Check size={12} className="text-primary opacity-0 group-has-[:checked]:opacity-100" />
              </div>
              <input type="checkbox" className="hidden" />
              <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        onClick={onGenerate}
        disabled={isGenerating}
        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-primary/40 disabled:opacity-50 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 uppercase tracking-widest flex items-center justify-center gap-3"
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            Generating...
          </>
        ) : (
          <>
            Generate with AI
          </>
        )}
      </button>
    </div>
  );
}
