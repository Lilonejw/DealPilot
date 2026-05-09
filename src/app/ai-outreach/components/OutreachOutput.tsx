"use client";

import { Copy, RefreshCcw, Bookmark, Edit3, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OutreachOutput({ content, isGenerating, onRegenerate }: any) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col">
      <div className={`flex-grow bg-black border border-charcoal-light rounded-3xl p-8 relative overflow-hidden transition-all duration-500 ${isGenerating ? 'red-glow ring-2 ring-primary/20' : ''}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
        
        <div className="flex justify-between items-center mb-6">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={14} className="text-primary" /> AI Generated Result
          </label>
          {content && (
            <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
              Professional Tone
            </div>
          )}
        </div>

        <div className="h-full flex flex-col">
          <AnimatePresence mode="wait">
            {!content && !isGenerating ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-20"
              >
                <div className="w-20 h-20 bg-charcoal rounded-3xl flex items-center justify-center mb-6 border border-charcoal-light">
                  <Sparkles className="text-zinc-800" size={32} />
                </div>
                <p className="text-zinc-600 font-medium">Your AI-generated content will appear here</p>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full"
              >
                {isEditing ? (
                  <textarea 
                    className="w-full h-[300px] bg-transparent resize-none outline-none text-xl leading-relaxed text-zinc-200 font-medium"
                    defaultValue={content}
                  />
                ) : (
                  <p className="text-xl leading-relaxed text-white font-medium gradient-text-subtle">
                    {content}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {content && !isGenerating && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <button 
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-4 bg-charcoal border border-charcoal-light rounded-xl text-sm font-bold hover:bg-charcoal-light transition-all"
          >
            {copied ? <><Check size={16} className="text-green-500" /> Copied!</> : <><Copy size={16} /> Copy</>}
          </button>
          <button 
            onClick={onRegenerate}
            className="flex items-center justify-center gap-2 py-4 bg-charcoal border border-charcoal-light rounded-xl text-sm font-bold hover:bg-charcoal-light transition-all"
          >
            <RefreshCcw size={16} /> Regenerate
          </button>
          <button className="flex items-center justify-center gap-2 py-4 bg-charcoal border border-charcoal-light rounded-xl text-sm font-bold hover:bg-charcoal-light transition-all">
            <Bookmark size={16} /> Save
          </button>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center justify-center gap-2 py-4 border rounded-xl text-sm font-bold transition-all ${isEditing ? 'bg-primary border-primary text-white' : 'bg-charcoal border-charcoal-light hover:bg-charcoal-light'}`}
          >
            <Edit3 size={16} /> {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      )}
    </div>
  );
}
