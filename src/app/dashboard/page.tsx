"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Clock, Phone, Mail, MoreHorizontal, ChevronRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const kpiData = [
  { title: "Total Leads", value: "1,284", change: "+12%", trend: "up", icon: Users },
  { title: "Active Deals", value: "47", change: "+8%", trend: "up", icon: TrendingUp },
  { title: "Conversion Rate", value: "23.5%", change: "+2.1%", trend: "up", icon: MessageSquare },
  { title: "Revenue Generated", value: "$2.4M", change: "-5%", trend: "down", icon: DollarSign },
];

const dealsOverTime = [
  { name: "Jan", deals: 24 },
  { name: "Feb", deals: 31 },
  { name: "Mar", deals: 28 },
  { name: "Apr", deals: 45 },
  { name: "May", deals: 52 },
  { name: "Jun", deals: 48 },
];

const leadSources = [
  { name: "Website", value: 35 },
  { name: "Referral", value: 28 },
  { name: "Cold Call", value: 20 },
  { name: "Social", value: 17 },
];

const COLORS = ["#dc2626", "#991b1b", "#7f1d1d", "#450a0a"];

const pipelineStages = [
  { name: "New Lead", count: 12, color: "bg-blue-500" },
  { name: "Contacted", count: 18, color: "bg-yellow-500" },
  { name: "Negotiating", count: 9, color: "bg-purple-500" },
  { name: "Under Contract", count: 5, color: "bg-orange-500" },
  { name: "Closed", count: 3, color: "bg-green-500" },
];

const recentLeads = [
  { name: "Robert Smith", property: "123 Oak Street, Houston TX", status: "new", time: "2 hours ago", score: 85 },
  { name: "Jennifer Lee", property: "456 Maple Ave, Dallas TX", status: "contacted", time: "4 hours ago", score: 72 },
  { name: "Michael Brown", property: "789 Pine Rd, Austin TX", status: "negotiating", time: "1 day ago", score: 91 },
];

const activities = [
  { action: "New lead added", detail: "Robert Smith - 123 Oak Street", time: "2 hours ago" },
  { action: "Deal moved to Negotiating", detail: "Michael Brown - 789 Pine Rd", time: "4 hours ago" },
  { action: "AI message sent", detail: "To Jennifer Lee", time: "5 hours ago" },
  { action: "Follow-up reminder set", detail: "Call Sarah Wilson", time: "6 hours ago" },
  { action: "Deal closed", detail: "456 Elm Street - $45,000", time: "1 day ago" },
];

const statusColors: Record<string, string> = {
  new: "primary",
  contacted: "warning",
  negotiating: "success",
  contract: "danger",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-text-secondary text-sm mt-1">Welcome back, Marcus</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Download Report
          </Button>
          <Button size="sm">
            <Users className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} hover className="p-4">
            <CardContent className="p-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-muted text-sm">{kpi.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{kpi.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {kpi.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm ${kpi.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                      {kpi.change}
                    </span>
                    <span className="text-text-muted text-sm">vs last month</span>
                  </div>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <kpi.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Deals over time chart */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Deals Over Time</h3>
              <select className="bg-surface border border-border rounded-lg px-3 py-1.5 text-sm text-text-secondary">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dealsOverTime}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                  <YAxis stroke="#71717a" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="deals" fill="#dc2626" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Lead sources pie chart */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Lead Sources</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {leadSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {leadSources.map((source, index) => (
                <div key={source.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-xs text-text-secondary">{source.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Recent Leads</h3>
              <Button variant="ghost" size="sm">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-3">
              {recentLeads.map((lead, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-surface-100/50 rounded-xl hover:bg-surface-100 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">
                      {lead.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-medium text-sm">{lead.name}</p>
                      <Badge variant={statusColors[lead.status] as any}>{lead.status}</Badge>
                    </div>
                    <p className="text-text-muted text-xs mt-0.5 truncate">{lead.property}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-text-muted text-xs">{lead.time}</p>
                    <p className="text-primary text-sm font-medium mt-1">{lead.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm">{activity.action}</p>
                    <p className="text-text-muted text-xs mt-0.5">{activity.detail}</p>
                    <p className="text-text-muted text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Pipeline Overview</h3>
            <Button variant="ghost" size="sm">
              View pipeline <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {pipelineStages.map((stage, index) => (
              <div
                key={stage.name}
                className="bg-surface-100/50 rounded-xl p-4 text-center hover:bg-surface-100 transition-colors cursor-pointer"
              >
                <div className={`w-3 h-3 ${stage.color} rounded-full mx-auto mb-2`} />
                <p className="text-white font-medium text-sm">{stage.name}</p>
                <p className="text-2xl font-bold text-white mt-1">{stage.count}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}