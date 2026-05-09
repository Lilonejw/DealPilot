# DealPilot AI 🤖

> AI-powered SaaS for real estate wholesalers and investors

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

**DealPilot AI** helps real estate wholesalers manage motivated seller leads, generate AI-powered outreach messages, automate follow-ups, and track deals - all in one modern dashboard.

**[Live Demo](https://dealpilot-8tgjaf7rr-lilonejws-projects.vercel.app)** | **[Sale Listing](./SALE.md)**

---

## ✨ Features

### Core Features
- **AI Outreach Generator** - Generate SMS, cold call scripts, and voicemail scripts with AI
- **Lead Management CRM** - Track and manage motivated seller leads
- **Deal Pipeline Tracker** - Visual Kanban board with drag-and-drop
- **Dashboard Analytics** - KPIs, charts, and activity feeds
- **Follow-up Reminders** - Never miss a lead follow-up

### Pages (9 total)
1. `/` - Landing page with hero, features, testimonials, pricing, FAQ
2. `/login` - Email/password + Google OAuth login
3. `/signup` - Account creation with plan selection
4. `/dashboard` - KPIs, charts, recent leads, activity feed
5. `/leads` - CRM with grid/table views, search, filters, bulk actions
6. `/ai-outreach` - SMS/Call/Voicemail AI generator with history
7. `/pipeline` - Kanban deal tracker with 5 stages
8. `/pricing` - 3-tier pricing with comparison table
9. `/settings` - Account management (6 tabs)

### Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Charts | Recharts |
| Animations | Framer Motion |
| Deployment | Vercel |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Lilonejw/DealPilot.git
cd DealPilot

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔧 Configuration

### Environment Variables (create `.env.local`)

```env
# Supabase (for database + auth)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI (for AI features)
OPENAI_API_KEY=your_openai_api_key

# Stripe (for payments)
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Required Integrations

1. **Supabase** - Create project at [supabase.com](https://supabase.com)
   - Enable Auth
   - Create database tables (leads, deals, users)
   - Configure Row Level Security

2. **OpenAI** - Get API key at [platform.openai.com](https://platform.openai.com)
   - Add to `.env.local`
   - Current generation is mocked - wire up to OpenAI for real AI

3. **Stripe** - Create account at [stripe.com](https://stripe.com)
   - Create products/pricing
   - Add webhook endpoint
   - Configure subscription tiers

---

## 📁 Project Structure

```
dealpilot/
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login/Signup pages
│   │   ├── ai-outreach/      # AI generator page
│   │   ├── dashboard/        # Main dashboard
│   │   ├── leads/           # Lead management
│   │   ├── pipeline/        # Deal pipeline
│   │   ├── pricing/        # Pricing page
│   │   └── settings/       # Settings page
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   └── ui/            # Button, Card, Input, Badge, Toggle
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/
├── package.json
├── tailwind.config.ts
└── vercel.json
```

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Background | `#000000` | Main background |
| Surface | `#1a1a1a` | Cards, panels |
| Surface-100 | `#2a2a2a` | Elevated elements |
| Primary | `#dc2626` | Buttons, accents |
| Primary-Dark | `#991b1b` | Hover states |
| Border | `#2a2a2a` | Borders |
| Text-Primary | `#ffffff` | Headings |
| Text-Secondary | `#a1a1aa` | Body text |
| Text-Muted | `#71717a` | Captions |

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold/Semibold
- Body: Regular/Medium

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Manual Build
```bash
npm run build
npm run start
```

---

## 💰 Pricing

| Plan | Monthly | Annual | Leads |
|------|---------|--------|-------|
| Starter | $49 | $39/mo | 100/mo |
| Pro | $99 | $79/mo | 500/mo |
| Team | $199 | $159/mo | Unlimited |

---

## 📈 Roadmap

- [ ] Connect Supabase database
- [ ] Add Stripe checkout
- [ ] Wire up OpenAI for real AI generation
- [ ] Add Twilio SMS integration
- [ ] Create demo video
- [ ] Add email automation

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Recharts](https://recharts.org/) - Charts library
- [Framer Motion](https://www.framer.com/motion/) - Animations

---

Built with ❤️ for real estate wholesalers