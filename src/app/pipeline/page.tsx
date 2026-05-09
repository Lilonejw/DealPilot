"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  Search, Filter, Plus, GripVertical, Clock, DollarSign, 
  TrendingUp, Home, User, Calendar, X, ChevronDown, Copy, CheckCheck
} from "lucide-react";

const initialDeals = [
  { id: 1, property: "123 Oak Street, Houston TX", seller: "Robert Smith", offer: 185000, profit: 25000, stage: "new", days: 3, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400" },
  { id: 2, property: "456 Maple Ave, Dallas TX", seller: "Jennifer Lee", offer: 320000, profit: 35000, stage: "contacted", days: 7, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400" },
  { id: 3, property: "789 Pine Rd, Austin TX", seller: "Michael Brown", offer: 275000, profit: 40000, stage: "negotiating", days: 12, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
  { id: 4, property: "321 Cedar Ln, Houston TX", seller: "Sarah Wilson", offer: 195000, profit: 22000, stage: "contacted", days: 5, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" },
  { id: 5, property: "654 Elm St, San Antonio TX", seller: "David Martinez", offer: 225000, profit: 30000, stage: "negotiating", days: 9, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400" },
  { id: 6, property: "987 Birch Dr, Austin TX", seller: "Emily Chen", offer: 410000, profit: 55000, stage: "contract", days: 15, image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400" },
  { id: 7, property: "111 Oak Ave, Dallas TX", seller: "James Taylor", offer: 175000, profit: 20000, stage: "new", days: 2, image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400" },
  { id: 8, property: "222 Pine St, Houston TX", seller: "Lisa Anderson", offer: 289000, profit: 38000, stage: "closed", days: 28, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400" },
];

const stages = [
  { id: "new", label: "New Lead", color: "bg-blue-500" },
  { id: "contacted", label: "Contacted", color: "bg-yellow-500" },
  { id: "negotiating", label: "Negotiating", color: "bg-purple-500" },
  { id: "contract", label: "Under Contract", color: "bg-orange-500" },
  { id: "closed", label: "Closed", color: "bg-green-500" },
];

export default function PipelinePage() {
  const [deals, setDeals] = React.useState(initialDeals);
  const [draggedDeal, setDraggedDeal] = React.useState<number | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [copiedId, setCopiedId] = React.useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, dealId: number) => {
    setDraggedDeal(dealId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, stage: string) => {
    e.preventDefault();
    if (draggedDeal) {
      setDeals(deals.map(deal => 
        deal.id === draggedDeal ? { ...deal, stage } : deal
      ));
      setDraggedDeal(null);
    }
  };

  const getDealsByStage = (stageId: string) => deals.filter(d => d.stage === stageId);

  const totalValue = deals.reduce((sum, d) => sum + d.offer, 0);
  const totalProfit = deals.reduce((sum, d) => sum + d.profit, 0);
  const avgDays = Math.round(deals.reduce((sum, d) => sum + d.days, 0) / deals.length);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Deal Pipeline</h1>
          <p className="text-text-secondary text-sm mt-1">{deals.length} active deals</p>
        </div>
        <Button size="sm" onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Deal
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <CardContent className="p-0 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Total Pipeline Value</p>
              <p className="text-2xl font-bold text-white">${(totalValue / 1000000).toFixed(1)}M</p>
            </div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="p-0 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Potential Profit</p>
              <p className="text-2xl font-bold text-white">${(totalProfit / 1000).toFixed(0)}K</p>
            </div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="p-0 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-text-muted text-sm">Avg Days to Close</p>
              <p className="text-2xl font-bold text-white">{avgDays} days</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageDeals = getDealsByStage(stage.id);
          return (
            <div
              key={stage.id}
              className="flex-shrink-0 w-80"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              {/* Stage header */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded-full", stage.color)} />
                  <span className="text-white font-medium">{stage.label}</span>
                  <span className="bg-surface-100 text-text-muted text-xs px-2 py-0.5 rounded-full">
                    {stageDeals.length}
                  </span>
                </div>
              </div>

              {/* Stage cards */}
              <div className="space-y-3 min-h-[200px]">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, deal.id)}
                    className={cn(
                      "bg-surface border border-border rounded-xl p-3 cursor-grab active:cursor-grabbing transition-all hover:border-primary/50",
                      draggedDeal === deal.id && "opacity-50"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={deal.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{deal.property}</p>
                        <p className="text-text-muted text-xs mt-0.5">{deal.seller}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <div>
                        <p className="text-text-muted text-xs">Offer</p>
                        <p className="text-white font-medium text-sm">${(deal.offer / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs">Profit</p>
                        <p className="text-green-400 font-medium text-sm">${(deal.profit / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-text-muted text-xs">Days</p>
                        <p className="text-white font-medium text-sm">{deal.days}d</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Deal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-surface border border-border rounded-2xl w-full max-w-lg p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Add New Deal</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-text-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4">
              <Input label="Property Address" placeholder="123 Main St, Houston TX" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Seller Name" placeholder="John Doe" />
                <Input label="Phone" placeholder="(555) 123-4567" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Offer Price" placeholder="$200,000" type="number" />
                <Input label="Expected Profit" placeholder="$25,000" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Stage</label>
                <select className="w-full px-4 py-2.5 bg-surface border border-border rounded-xl text-white">
                  <option value="new">New Lead</option>
                  <option value="contacted">Contacted</option>
                  <option value="negotiating">Negotiating</option>
                  <option value="contract">Under Contract</option>
                </select>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Button type="button" variant="secondary" className="flex-1" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Add Deal
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}