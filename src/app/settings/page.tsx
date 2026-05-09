"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Badge } from "@/components/ui/badge";
import { 
  User, Bell, Key, Users, CreditCard, Database, ChevronRight, 
  Camera, Shield, ExternalLink, Check, Plus, Trash2, Mail, Crown
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("profile");
  const [saved, setSaved] = React.useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "integrations", label: "Integrations", icon: Key },
    { id: "team", label: "Team", icon: Users },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "data", label: "Data", icon: Database },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-text-secondary text-sm mt-1">Manage your account settings</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <Card className="p-2">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-surface-100 hover:text-white"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{tab.label}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Profile Settings</h2>
                  <Badge variant="primary" className="bg-primary/20 text-primary">Pro Plan</Badge>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">MJ</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-text-muted text-xs mt-2">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Full Name" defaultValue="Marcus Johnson" />
                  <Input label="Email" type="email" defaultValue="marcus@example.com" />
                  <Input label="Phone" type="tel" defaultValue="(713) 555-0123" />
                  <Input label="Company" defaultValue="Johnson Real Estate" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Bio</label>
                  <textarea
                    className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-primary resize-none"
                    rows={3}
                    placeholder="Tell us about yourself..."
                    defaultValue="Real estate investor specializing in wholesale deals in the Houston metro area."
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-white font-medium">Password</p>
                    <p className="text-text-muted text-sm">Last changed 30 days ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Password
                  </Button>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  {saved && (
                    <span className="flex items-center gap-1 text-green-400 text-sm">
                      <Check className="w-4 h-4" />
                      Saved
                    </span>
                  )}
                  <Button onClick={handleSave}>
                    {saved ? "Saved!" : "Save Changes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>

                {[
                  { title: "Email Notifications", description: "Receive email updates about your deals", enabled: true },
                  { title: "SMS Alerts", description: "Get text messages for urgent updates", enabled: true },
                  { title: "Push Notifications", description: "Browser push notifications", enabled: false },
                  { title: "Daily Digest", description: "Daily summary of your pipeline activity", enabled: true },
                  { title: "New Lead Alerts", description: "Notify when new leads are added", enabled: true },
                  { title: "Deal Updates", description: "Updates when deals change stages", enabled: true },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-text-muted text-sm">{item.description}</p>
                    </div>
                    <Toggle checked={item.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center">
                      <span className="text-[#3B82F6] font-bold text-sm">SB</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">Supabase</h3>
                        <Badge variant="success" className="bg-green-500/20 text-green-400">Connected</Badge>
                      </div>
                      <p className="text-text-muted text-sm">Database and authentication</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center">
                      <span className="text-[#10B981] font-bold text-sm">AI</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">OpenAI API</h3>
                      <p className="text-text-muted text-sm">Powering AI outreach generation</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#6772E5]/20 rounded-xl flex items-center justify-center">
                      <span className="text-[#6772E5] font-bold text-sm">S</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Stripe</h3>
                      <p className="text-text-muted text-sm">Subscription billing and payments</p>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-white font-semibold">API Keys</h3>
                  <Input label="OpenAI API Key" type="password" defaultValue="sk-xxxx...xxxx" />
                  <p className="text-text-muted text-xs">Your API keys are encrypted and stored securely.</p>
                  <Button size="sm">Update API Key</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "team" && (
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Team Members</h2>
                    <p className="text-text-muted text-sm">Manage your team and permissions</p>
                  </div>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Invite Member
                  </Button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Marcus Johnson", email: "marcus@example.com", role: "Owner", avatar: "MJ" },
                    { name: "Sarah Williams", email: "sarah@team.com", role: "Admin", avatar: "SW" },
                    { name: "David Chen", email: "david@team.com", role: "Member", avatar: "DC" },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-surface-100/50 rounded-xl">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{member.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-text-muted text-sm">{member.email}</p>
                      </div>
                      <Badge variant={member.role === "Owner" ? "primary" : "default"}>
                        {member.role}
                      </Badge>
                      {member.role !== "Owner" && (
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "billing" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">Current Plan</h2>
                    <Badge variant="primary" className="bg-primary/20 text-primary">
                      <Crown className="w-3 h-3 mr-1" />
                      Pro Plan
                    </Badge>
                  </div>
                  <div className="bg-surface-100/50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-lg">$99/month</p>
                        <p className="text-text-muted text-sm">Billed monthly</p>
                      </div>
                      <Button variant="outline" size="sm">Change Plan</Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-text-muted" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Visa ending in 4242</p>
                      <p className="text-text-muted text-sm">Expires 12/2025</p>
                    </div>
                    <Button variant="ghost" size="sm">Update</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Billing History</h3>
                  <div className="space-y-2">
                    {[
                      { date: "Jun 1, 2024", amount: "$99.00", status: "Paid" },
                      { date: "May 1, 2024", amount: "$99.00", status: "Paid" },
                      { date: "Apr 1, 2024", amount: "$99.00", status: "Paid" },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="text-white text-sm">{invoice.date}</p>
                          <p className="text-text-muted text-xs">{invoice.amount}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="success" className="bg-green-500/20 text-green-400">{invoice.status}</Badge>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-white">Data Export</h2>
                  <p className="text-text-muted text-sm">Download a copy of all your data in JSON or CSV format.</p>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      Export as JSON
                    </Button>
                    <Button variant="outline" size="sm">
                      Export as CSV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-white">Import Data</h2>
                  <p className="text-text-muted text-sm">Import leads or deals from a CSV file.</p>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                    <Database className="w-10 h-10 text-text-muted mx-auto mb-3" />
                    <p className="text-white font-medium mb-1">Drop your file here</p>
                    <p className="text-text-muted text-sm mb-3">or click to browse</p>
                    <Button variant="outline" size="sm">Select File</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-white">Danger Zone</h2>
                  <p className="text-text-muted text-sm">Permanently delete your account and all associated data.</p>
                  <Button variant="danger" size="sm">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}