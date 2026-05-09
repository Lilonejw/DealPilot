"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, Phone, Voicemail, Sparkles, Copy, CheckCheck, 
  Clock, User, Loader2, ChevronDown, History, Star, Send
} from "lucide-react";

type OutreachType = "sms" | "call" | "voicemail";

const outreachTypes = [
  { id: "sms", label: "SMS Message", icon: MessageSquare, description: "AI-generated text messages" },
  { id: "call", label: "Cold Call Script", icon: Phone, description: "Phone call conversation guide" },
  { id: "voicemail", label: "Voicemail Script", icon: Voicemail, description: "Leave on unanswered calls" },
];

const historyItems = [
  { id: 1, type: "sms", lead: "Robert Smith", preview: "Hi Robert, I came across your property on Oak Street...", date: "2 hours ago", rating: 5 },
  { id: 2, type: "call", lead: "Jennifer Lee", preview: "Hi Jennifer, this is Marcus from DealPilot...", date: "4 hours ago", rating: 4 },
  { id: 3, type: "voicemail", lead: "Michael Brown", preview: "Hi Michael, I'm calling about your property...", date: "1 day ago", rating: 5 },
];

export default function OutreachPage() {
  const [selectedType, setSelectedType] = React.useState<OutreachType>("sms");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [generatedContent, setGeneratedContent] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);

  const [formData, setFormData] = React.useState({
    leadName: "",
    propertyAddress: "",
    propertyType: "",
    motivationLevel: "",
    timeframe: "",
    notes: "",
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedContent(null);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (selectedType === "sms") {
      setGeneratedContent(`Hi ${formData.leadName || "there"},

I came across your property at ${formData.propertyAddress || "your address"} and I'm very interested in helping you.

I work with investors who are ready to purchase homes quickly, often closing in as little as 7 days. If you're looking to sell your property fast without the hassle of traditional listings, I'd love to connect.

Would you have 5 minutes to chat? I'm confident we can work something out that meets your needs.

Best regards,
Marcus`);
    } else if (selectedType === "call") {
      setGeneratedContent(`SCRIPT: Cold Call Introduction

"Hi ${formData.leadName || "[Name]"}}, this is Marcus Johnson calling about your property at ${formData.propertyAddress || "[address]"}. 

Do you have a quick minute? 

[seller response]

Great! I work with real estate investors who are actively looking to purchase properties in your area. They’re pre-approved and ready to close quickly.

I understand you might be ${formData.motivationLevel || "looking to sell"} - is that still the case? 

[seller response]

Perfect. Would you be open to a brief conversation about what you're looking for? I think we might be able to help.

[If interested: Schedule appointment]

Thank you for your time!"`);
    } else {
      setGeneratedContent(`VOICEMAIL SCRIPT:

"Hi ${formData.leadName || "[Name]"}, this is Marcus Johnson calling from DealPilot AI.

I'm reaching out because we have active investors ready to purchase properties in your area. They can close quickly - often within 7 days.

If you're still interested in selling ${formData.propertyAddress ? `your property at ${formData.propertyAddress}` : "your property"}, I'd love to connect and discuss how we might be able to help.

You can reach me at (713) 555-0123. Again, that's Marcus at (713) 555-0123. Looking forward to hearing from you. Thanks!"`);
    }
    
    setIsGenerating(false);
  };

  const handleCopy = () => {
    if (generatedContent) {
      navigator.clipboard.writeText(generatedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">AI Outreach Generator</h1>
          <p className="text-text-secondary text-sm mt-1">Generate personalized messages using AI</p>
        </div>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => setShowHistory(!showHistory)}
        >
          <History className="w-4 h-4 mr-2" />
          History
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Input */}
        <div className="lg:col-span-2 space-y-6">
          {/* Type selector */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-4">Select Outreach Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {outreachTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id as OutreachType);
                      setGeneratedContent(null);
                    }}
                    className={cn(
                      "p-4 rounded-xl border text-left transition-all",
                      selectedType === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-surface hover:border-border-hover"
                    )}
                  >
                    <type.icon className={cn(
                      "w-6 h-6 mb-2",
                      selectedType === type.id ? "text-primary" : "text-text-muted"
                    )} />
                    <p className={cn(
                      "font-medium",
                      selectedType === type.id ? "text-white" : "text-text-secondary"
                    )}>
                      {type.label}
                    </p>
                    <p className="text-text-muted text-xs mt-1">{type.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lead info form */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-white font-semibold">Lead Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  label="Lead Name" 
                  placeholder="John Doe"
                  value={formData.leadName}
                  onChange={(e) => setFormData({...formData, leadName: e.target.value})}
                />
                <Input 
                  label="Property Address"
                  placeholder="123 Main St, Houston TX"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                />
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Property Type</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                  >
                    <option value="">Select type</option>
                    <option value="single-family">Single Family</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="condo">Condo/Townhouse</option>
                    <option value="land">Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Motivation Level</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white"
                    value={formData.motivationLevel}
                    onChange={(e) => setFormData({...formData, motivationLevel: e.target.value})}
                  >
                    <option value="">Select motivation</option>
                    <option value="highly motivated">Highly Motivated</option>
                    <option value="somewhat motivated">Somewhat Motivated</option>
                    <option value="exploring options">Exploring Options</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Timeframe to Sell</label>
                  <select 
                    className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                  >
                    <option value="">Select timeframe</option>
                    <option value="asap">As Soon as Possible</option>
                    <option value="30-days">Within 30 Days</option>
                    <option value="60-days">Within 60 Days</option>
                    <option value="90-days">Within 90 Days</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Additional Notes (Optional)</label>
                <textarea
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-primary resize-none"
                  rows={3}
                  placeholder="Any additional context about the seller or property..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate {selectedType === "sms" ? "SMS" : selectedType === "call" ? "Call Script" : "Voicemail"}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated content */}
          {generatedContent && (
            <Card className="border-primary/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-white font-semibold">Generated {selectedType === "sms" ? "SMS" : "Script"}</h3>
                  </div>
                  <Badge variant="primary" className="bg-primary/20 text-primary">AI Generated</Badge>
                </div>
                <div className="bg-surface-100/50 rounded-xl p-4">
                  <pre className="text-text-secondary text-sm whitespace-pre-wrap font-sans">
                    {generatedContent}
                  </pre>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="secondary" className="flex-1" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <CheckCheck className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy to Clipboard
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Send Now
                  </Button>
                </div>
                <p className="text-text-muted text-xs text-center">
                  Review the generated content before sending. You can edit it to match your style.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right column - History */}
        <div className="space-y-4">
          {showHistory && (
            <Card>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-white font-semibold">Recent Generated</h3>
                {historyItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-3 bg-surface-100/50 rounded-xl hover:bg-surface-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "sms" && <MessageSquare className="w-4 h-4 text-primary" />}
                      {item.type === "call" && <Phone className="w-4 h-4 text-yellow-400" />}
                      {item.type === "voicemail" && <Voicemail className="w-4 h-4 text-purple-400" />}
                      <span className="text-white text-sm font-medium">{item.lead}</span>
                      <span className="text-text-muted text-xs ml-auto">{item.date}</span>
                    </div>
                    <p className="text-text-muted text-xs line-clamp-2">{item.preview}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-3 h-3",
                            i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Tips card */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Tips for Better Results
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Include the property address for more personalized messages
                </li>
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Mention the seller&apos;s motivation level for better context
                </li>
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Add specific details about their timeline
                </li>
                <li className="flex items-start gap-2">
                  <CheckCheck className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Always review and personalize before sending
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-white font-semibold mb-4">Your AI Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Messages Generated</span>
                  <span className="text-white font-medium">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Response Rate</span>
                  <span className="text-green-400 font-medium">34%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Avg Rating</span>
                  <span className="text-yellow-400 font-medium">4.7/5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}