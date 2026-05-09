"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OutreachTabs from "./components/OutreachTabs";
import OutreachInputForm from "./components/OutreachInputForm";
import OutreachOutput from "./components/OutreachOutput";
import OutreachHistory from "./components/OutreachHistory";

export default function AIOutreachPage() {
  const [activeTab, setActiveTab] = useState("sms");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedContent("");
    
    // Simulate AI generation
    setTimeout(() => {
      const mockResponses: Record<string, string> = {
        sms: "Hi John, I saw your property at 123 Main St and I'm very interested. I'm a local investor who buys houses in any condition. Would you be open to a quick conversation about your asking price? Call or text me anytime.",
        coldcall: "Hi Mr. Smith, my name is [Name] and I'm a local real estate investor. I'm calling because I'm looking to buy a house in your neighborhood and was wondering if you've ever considered a cash offer for 123 Main St? We handle all repairs and can close on your timeline.",
        voicemail: "Hello, this is [Name]. I'm calling about the property at 123 Main St. If you're interested in a direct cash offer without commissions or fees, please give me a call back at [Number]. I'm looking to buy quickly and would love to chat. Thanks!"
      };
      
      setGeneratedContent(mockResponses[activeTab] || mockResponses.sms);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">AI Outreach Generator</h1>
            <p className="text-zinc-500 text-lg">Generate high-conversion outreach scripts in seconds using advanced AI.</p>
          </div>

          <OutreachTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <OutreachInputForm 
              onGenerate={handleGenerate} 
              isGenerating={isGenerating} 
            />
            <OutreachOutput 
              content={generatedContent} 
              isGenerating={isGenerating} 
              onRegenerate={handleGenerate}
            />
          </div>

          <OutreachHistory />
        </div>
      </main>

      <Footer />
    </div>
  );
}
