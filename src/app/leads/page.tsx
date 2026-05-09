"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Filter, Plus, MoreHorizontal, Phone, Mail, Calendar, 
  MapPin, TrendingUp, Grid3X3, List, X, ChevronDown, ArrowUpDown,
  MessageSquare, Clock, User, Download, Trash2, Edit
} from "lucide-react";
import { cn } from "@/lib/utils";

const leads = [
  { id: 1, name: "Robert Smith", phone: "(713) 555-0123", email: "robert.smith@email.com", property: "123 Oak Street, Houston TX", status: "new", source: "Website", score: 85, lastContact: "2 hours ago", motivation: "high" },
  { id: 2, name: "Jennifer Lee", phone: "(214) 555-0456", email: "jennifer.lee@email.com", property: "456 Maple Ave, Dallas TX", status: "contacted", source: "Referral", score: 72, lastContact: "4 hours ago", motivation: "medium" },
  { id: 3, name: "Michael Brown", phone: "(512) 555-0789", email: "michael.brown@email.com", property: "789 Pine Rd, Austin TX", status: "negotiating", source: "Cold Call", score: 91, lastContact: "1 day ago", motivation: "high" },
  { id: 4, name: "Sarah Wilson", phone: "(713) 555-1234", email: "sarah.wilson@email.com", property: "321 Cedar Ln, Houston TX", status: "new", source: "Social", score: 65, lastContact: "2 days ago", motivation: "medium" },
  { id: 5, name: "David Martinez", phone: "(210) 555-5678", email: "david.martinez@email.com", property: "654 Elm St, San Antonio TX", status: "contract", source: "Website", score: 88, lastContact: "3 days ago", motivation: "high" },
  { id: 6, name: "Emily Chen", phone: "(713) 555-9012", email: "emily.chen@email.com", property: "987 Birch Dr, Houston TX", status: "closed", source: "Referral", score: 95, lastContact: "1 week ago", motivation: "high" },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  new: { bg: "bg-blue-500/20", text: "text-blue-400", label: "New" },
  contacted: { bg: "bg-yellow-500/20", text: "text-yellow-400", label: "Contacted" },
  negotiating: { bg: "bg-purple-500/20", text: "text-purple-400", label: "Negotiating" },
  contract: { bg: "bg-orange-500/20", text: "text-orange-400", label: "Under Contract" },
  closed: { bg: "bg-green-500/20", text: "text-green-400", label: "Closed" },
};

export default function LeadsPage() {
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [selectedLeads, setSelectedLeads] = React.useState<number[]>([]);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.property.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(filteredLeads.map((l) => l.id));
    }
  };

  const toggleSelectLead = (id: number) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter((l) => l !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Lead Management</h1>
          <p className="text-text-secondary text-sm mt-1">{filteredLeads.length} leads total</p>
        </div>
        <Button size="sm" onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search leads by name or property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-white placeholder:text-text-muted focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={statusFilter || ""}
              onChange={(e) => setStatusFilter(e.target.value || null)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-surface border border-border rounded-xl text-text-secondary hover:border-border-hover transition-colors cursor-pointer"
            >
              <option value="">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="negotiating">Negotiating</option>
              <option value="contract">Under Contract</option>
              <option value="closed">Closed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
          <div className="flex items-center border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2.5 transition-colors",
                viewMode === "grid" ? "bg-primary text-white" : "bg-surface text-text-muted hover:text-white"
              )}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={cn(
                "p-2.5 transition-colors",
                viewMode === "table" ? "bg-primary text-white" : "bg-surface text-text-muted hover:text-white"
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk actions */}
      {selectedLeads.length > 0 && (
        <div className="flex items-center gap-4 p-3 bg-primary/10 border border-primary/30 rounded-xl">
          <span className="text-white text-sm font-medium">{selectedLeads.length} selected</span>
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      )}

      {/* Leads grid/table */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} hover className="p-4 cursor-pointer">
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {lead.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{lead.name}</p>
                      <p className="text-text-muted text-xs">{lead.source}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="text-text-muted hover:text-white"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <MapPin className="w-4 h-4 text-text-muted" />
                    <span className="truncate">{lead.property}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-sm">
                    <Phone className="w-4 h-4 text-text-muted" />
                    <span>{lead.phone}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <Badge className={cn(statusColors[lead.status].bg, statusColors[lead.status].text)}>
                    {statusColors[lead.status].label}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-white font-medium text-sm">{lead.score}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Text
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                        onChange={toggleSelectAll}
                        className="rounded border-border bg-surface text-primary"
                      />
                    </th>
                    <th className="p-4 text-left text-text-muted text-sm font-medium">Name</th>
                    <th className="p-4 text-left text-text-muted text-sm font-medium">Property</th>
                    <th className="p-4 text-left text-text-muted text-sm font-medium">Status</th>
                    <th className="p-4 text-left text-text-muted text-sm font-medium">Score</th>
                    <th className="p-4 text-left text-text-muted text-sm font-medium">Last Contact</th>
                    <th className="p-4 text-right text-text-muted text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border/50 hover:bg-surface-100/50 transition-colors">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.id)}
                          onChange={() => toggleSelectLead(lead.id)}
                          className="rounded border-border bg-surface text-primary"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold text-xs">
                              {lead.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{lead.name}</p>
                            <p className="text-text-muted text-xs">{lead.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-text-secondary text-sm">{lead.property}</td>
                      <td className="p-4">
                        <Badge className={cn(statusColors[lead.status].bg, statusColors[lead.status].text)}>
                          {statusColors[lead.status].label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-white text-sm">{lead.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-text-muted text-sm">{lead.lastContact}</td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-surface border border-border rounded-2xl w-full max-w-lg p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Add New Lead</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-text-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <Input label="Full Name" placeholder="John Doe" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Phone" placeholder="(555) 123-4567" />
                <Input label="Email" placeholder="john@email.com" type="email" />
              </div>
              <Input label="Property Address" placeholder="123 Main St, Houston TX" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Lead Source</label>
                  <select className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white">
                    <option>Website</option>
                    <option>Referral</option>
                    <option>Cold Call</option>
                    <option>Social</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Motivation</label>
                  <select className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Button type="button" variant="secondary" className="flex-1" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Add Lead
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}