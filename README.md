# 📦 ShieldKart — AI-Powered Parametric Income Protection

<div align="center">

![ShieldKart Banner](https://img.shields.io/badge/ShieldKart-Gig%20Worker%20Income%20Protection-0ea5e9?style=for-the-badge&logo=shield&logoColor=white)

[![Hackathon](https://img.shields.io/badge/Guidewire-DEVTrails%202026-F59E0B?style=flat-square)](https://guidewire.com)
[![Persona](https://img.shields.io/badge/Persona-E--Commerce%20Delivery-6366F1?style=flat-square)](https://amazon.in)
[![Platform](https://img.shields.io/badge/Platform-Web%20PWA-10B981?style=flat-square)](#)
[![Tech](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Python-3B82F6?style=flat-square)](#)
[![Coverage](https://img.shields.io/badge/Coverage-Income%20Loss%20Only-EF4444?style=flat-square)](#)
[![Pricing](https://img.shields.io/badge/Pricing-Weekly%20Model-8B5CF6?style=flat-square)](#)

**Protecting India's last-mile warriors (Amazon / Flipkart) from income loss caused by uncontrollable external disruptions — with zero manual claims.**

[Problem](#-the-problem) · [Unique Idea](#-unique-differentiator-delivery-zone-intelligence) · [Architecture](#-system-architecture) · [Triggers](#-5-parametric-triggers) · [Pricing](#-weekly-premium-model) · [Tech Stack](#-tech-stack) · [Roadmap](#-6-week-development-roadmap)

</div>

---

## 🔴 The Problem

India has **5M+ active e-commerce delivery partners** working for Amazon, Flipkart, Meesho — yet not a single income safety net exists when external disruptions strike.

```
📦 Raju, Amazon Flex partner, Indore
   Earns: ₹600–900/day  |  Works: 6 days/week

   Week of heavy monsoon rains 🌧️:
   ├── Monday    → Full day lost. Roads flooded.       -₹750
   ├── Tuesday   → Half day. Waterlogging in zone.     -₹400
   └── Wednesday → Platform reduced outdoor slots.     -₹500

   Total weekly loss: ₹1,650 with ZERO protection.
   No claim. No payout. No safety net.
```

> External disruptions (extreme weather, AQI spikes, bandhs, curfews) cause **20–30% monthly income loss** for gig workers. ShieldKart fixes this with **fully automated parametric insurance**.

---

## 💡 Unique Differentiator: Delivery Zone Intelligence

> **Every other team insures the city. We insure every 2km² zone within it.**

This is **Delivery Zone Intelligence (DZI)** — the core innovation that separates ShieldKart from any generic weather-triggered insurance solution.

### Why Zone-Level Scoring Wins

| Approach | Problem |
|---|---|
| City-flat premium | Dharavi (flood-prone, sea-level) pays same as Bandra (elevated, safe) — unfair and actuarially wrong |
| Weather-only trigger | Misses platform activity drops, civic disruptions, GPS movement collapse |
| Manual claims | Creates fraud risk, payout delays, and UX friction gig workers can't afford |

### ShieldKart vs. Competitors

| Feature | Generic Solution | ShieldKart |
|---|---|---|
| Premium pricing | City-level flat rate | Zone-level dynamic rate (2km² micro-zones) |
| Trigger detection | Weather API only | Weather + AQI + Civic + Platform drop + GPS entropy |
| Fraud detection | Basic rule checks | Behavioral biometrics + GPS entropy + cross-worker validation |
| Claim process | Worker files manually | Zero-touch: auto-detected → auto-approved → auto-paid |
| Worker insight | None | "Your zone earned ₹240 less this week due to flooding — covered!" |
| Pricing structure | Monthly (too large) | Weekly autopay aligned with Flex payout cycle |

---

## 👤 Persona: Raju — E-Commerce Delivery Partner

```
┌──────────────────────────────────────────────────────────────┐
│  👤 RAJU SHARMA                                              │
│  Amazon Flex + Flipkart FMPL Partner, Indore MP             │
├──────────────────────────────────────────────────────────────┤
│  Age: 26              City: Indore, Madhya Pradesh          │
│  Daily earnings: ₹600–900     Weekly: ₹4,200–6,300         │
│  Phone: Android (Redmi)       Payments: UPI / PhonePe       │
│  Works: 8–10 hrs/day  ·  6 days/week                       │
│  Comfort level: WhatsApp-savvy, used to UPI autopay         │
├──────────────────────────────────────────────────────────────┤
│  DISRUPTION RISKS (Indore delivery zones)                   │
│  🌧️  Monsoon floods (Jun–Sep): 3–4 lost days/month          │
│  🌡️  Extreme heat + dust (Apr–May): 30% earnings drop       │
│  🚫  Bandh / curfew (unpredictable): full-day income loss   │
│  📦  Warehouse zone lockdowns: VIP movement restrictions    │
└──────────────────────────────────────────────────────────────┘
```

### Raju's End-to-End Journey

```
MONDAY (Onboarding — 3 minutes)
  ├─ Opens ShieldKart PWA via WhatsApp link
  ├─ Aadhaar OTP KYC-lite verification
  ├─ Links Amazon Flex Partner ID
  ├─ GPS registers zone: Vijay Nagar, Indore
  └─ App: Zone Risk Score = 67/100 ⚠️  (Monsoon forecast this week)
     Raju selects Standard plan → ₹49/week via UPI autopay ✅

WEDNESDAY 9:00 AM (Disruption detected)
  IMD API → Rainfall 78mm/3hrs in Vijay Nagar zone 🌧️

  Trigger Engine cross-validates 5 streams:
  ├─ [✓] T1: Rainfall threshold exceeded (78mm > 60mm)
  ├─ [✓] T3: Platform API — order volume down 51%
  ├─ [✓] GPS: Zone movement heatmap near zero
  ├─ [–] T4: No civic alert (not a bandh today)
  └─ Confidence Score: 91/100 → AUTO-APPROVE ✅

WEDNESDAY 9:07 AM (Payout)
  ₹350 credited to Raju's UPI ID instantly
  WhatsApp: "ShieldKart ne ₹350 bheja! 🛡️ Aaj ke nuksaan se protected ho."

FRIDAY (Weekly summary dashboard)
  "Week protected. ₹350 recovered. Net disruption loss: ₹0."
```

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                        FRONTEND LAYER                                │
│  React.js PWA — Mobile-first — WhatsApp notifications               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌──────────────┐  │
│  │ Onboarding  │ │   Policy    │ │   Claims    │ │    Admin     │  │
│  │ KYC + GPS   │ │  Dashboard  │ │   Tracker   │ │  Analytics   │  │
│  └─────────────┘ └─────────────┘ └─────────────┘ └──────────────┘  │
└────────────────────────────┬─────────────────────────────────────────┘
                             │ REST API
┌────────────────────────────▼─────────────────────────────────────────┐
│                   NODE.JS API GATEWAY                                │
│              Auth · Rate limiting · Request routing                  │
└───────────┬──────────────────┬────────────────────┬──────────────────┘
            │                  │                    │
┌───────────▼──────┐ ┌─────────▼──────────┐ ┌──────▼──────────────────┐
│  POLICY ENGINE   │ │   TRIGGER ENGINE   │ │    PAYOUT ENGINE        │
│                  │ │                    │ │                         │
│ Weekly premium   │ │ 5 parametric       │ │ Confidence scoring      │
│ Zone risk score  │ │ real-time monitors │ │ UPI / IMPS dispatch     │
│ Plan management  │ │ Redis event queue  │ │ WhatsApp notify         │
└───────────┬──────┘ └─────────┬──────────┘ └──────┬──────────────────┘
            └─────────────┬────┘                   │
                          │ (all services call ML)  │
┌─────────────────────────▼───────────────────────────────────────────┐
│             ML MICROSERVICE (Python FastAPI)                        │
│  ┌───────────────┐  ┌──────────────────┐  ┌────────────────────┐   │
│  │ Zone Risk     │  │  Fraud Detector  │  │  Confidence        │   │
│  │ Model         │  │                  │  │  Scorer            │   │
│  │ XGBoost       │  │  Isolation       │  │  Multi-stream      │   │
│  │ Weekly score  │  │  Forest + GPS    │  │  corroboration     │   │
│  └───────────────┘  └──────────────────┘  └────────────────────┘   │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
┌─────────────────────────▼──────────────┬────────────────────────────┐
│  DATA STORES                           │  EXTERNAL INTEGRATIONS     │
│  PostgreSQL                            │  Open-Meteo (free weather) │
│  workers · policies · claims · payouts │  CPCB AQI (govt feed)      │
│                                        │  Razorpay test mode        │
│  Redis                                 │  Twilio WhatsApp sandbox   │
│  Real-time trigger event queue         │  Google Maps Static API    │
└────────────────────────────────────────┴────────────────────────────┘
```
![image alt](https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon/blob/b912e6969bc0176276331066fc6ee65befab7768/assests/shieldkart_system_architecture.svg)
---

## 🔥 5 Parametric Triggers

> **Rule:** All triggers check for income loss events only. No health, accident, or vehicle coverage ever.

| # | Trigger | Data Source | Threshold | Income Loss Signal |
|---|---|---|---|---|
| T1 | 🌧️ Heavy rainfall / flood | IMD + Open-Meteo | > 60mm in 3hrs in zone | Deliveries halted |
| T2 | 🌡️ Extreme heat + AQI | OpenWeather + CPCB | Temp > 42°C AND AQI > 250 | Outdoor slots cut |
| T3 | 📦 Platform activity crash | Simulated platform API | Order volume drop > 45% vs weekday avg | Platform work gone |
| T4 | 🚫 Curfew / bandh / lockdown | Govt alert + Maps traffic | Zone movement < 20% of normal | Zone inaccessible |
| T5 | 🌫️ Dense fog / zero visibility | Open-Meteo | Visibility < 200m for > 4 hrs | Delivery unsafe |


![image alt](https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon/blob/b0e3856e20ffe86763e4b7d57361811ce049ceb6/assests/shieldkart_5_triggers.svg)
  
```
Multi-trigger bonus:
  2+ triggers firing simultaneously → payout × 1.25  (+25%)
  Example: T1 flood + T3 platform crash on same day
  Standard plan: ₹350 × 1.25 = ₹437.50 paid out
```

### Zero-Touch Claim Flow

```
External disruption event
         │
         ▼
All 5 data streams checked simultaneously (< 2 minutes)
         │
         ▼
AI Confidence Score computed (0–100)
         │
   ┌─────┼──────────────────┐
   │     │                  │
Score  Score             Score
< 50   50–79             ≥ 80
   │     │                  │
   ▼     ▼                  ▼
Human  50% instant      AUTO-APPROVE
review 50% in 24hr      Instant full payout
(rare) validation       Target: 85%+ of claims
```
![image alt](https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon/blob/b0e3856e20ffe86763e4b7d57361811ce049ceb6/assests/shieldkart_claim_flow.svg)
---

## 💰 Weekly Premium Model

### Core Formula

```
Weekly Premium = Base Rate × Zone Risk Multiplier

Base rates:
  Basic    →  ₹29/week  →  ₹200/day coverage  ·  max 2 disruption days/week
  Standard →  ₹49/week  →  ₹350/day coverage  ·  max 3 disruption days/week
  Premium  →  ₹79/week  →  ₹500/day coverage  ·  max 5 disruption days/week

Zone Risk Multiplier (from ML Zone Risk Score):
  Low risk    Score  0–30  →  0.85×  (discount for safe zones)
  Medium      Score 31–60  →  1.00×  (base rate)
  High risk   Score 61–100 →  1.15×  (small surcharge, still affordable)

Raju's example (Score 67, Standard plan):
  ₹49 × 1.15 = ₹57/week
  If 2 disruption days: ₹700 payout on ₹57 premium → 12.3× return
```

### Zone Risk Scoring (ML Model)

```
Model type:    XGBoost Regressor
Input features:
  · Historical IMD rainfall data (3 years per zone)
  · Flood frequency index (NDRF historical data)
  · AQI trend data (CPCB, 2 years)
  · Bandh/curfew history (news-scraped events)
  · Zone elevation + waterlogging risk index
  · Warehouse/pickup hub proximity
  · Historical platform order-drop events by zone

Output:        Risk Score 0–100 per 2km² delivery zone
Update cycle:  Every Monday (weekly batch job)
Worker-facing: "Your zone forecast this week: ⚠️ 67/100 — Heavy rain expected"

risk_score = rain_probability * 0.5 + pollution_level * 0.3 + traffic_index * 0.2

```

### Why Weekly Pricing

| Monthly Model (Competitors) | Weekly Model (ShieldKart) |
|---|---|
| ₹200–400/month feels large upfront | ₹29–79/week feels minimal |
| Unaffordable with variable income | Same UPI autopay day as platform payout |
| No flexibility during leave weeks | Worker can pause anytime |
| Delays trust-building | Builds trust incrementally week-by-week |





---

## 🤖 AI / ML Integration Plan

### 1. Zone Risk Scoring Engine
```
Model:      XGBoost Regressor (Python scikit-learn)
Features:   Rainfall, AQI, flood, curfew, elevation, order-drop history
Output:     Risk score 0–100 per 2km² zone, updated weekly
Target:     R² > 0.82 on held-out validation data
```

### 2. Dynamic Premium Calculator
```
Inputs:     Zone risk score + earnings tier + seasonal index + week forecast
Output:     Personalized weekly premium in ₹
Bonus:      Safe Week Discount — 4 consecutive low-risk weeks → 10% off
```

### 3. Fraud Detection Engine
```
GPS Entropy Analysis
  · Measures movement randomness during claimed disruption
  · Low movement + active claim = genuine
  · Zero app activity during claimed event = suspicious

Temporal Anomaly Detection (Isolation Forest)
  · Flags claims at unusual hours or outside registered zone

Cross-Worker Validation
  · 1/10 workers in zone claiming = suspicious
  · 8/10 workers showing low activity = genuine confirmation

Behavioral Biometrics
  · Opening app + declining orders during disruption = genuine signal
  · No app interaction at all = secondary review triggered
```

### 4. Payout Confidence Scorer
```
Input:    Corroboration from 5 data streams + fraud signals + worker history
Output:   Confidence score 0–100

Routing:
  ≥ 80  → Auto-approve, instant payout     (target: 85%+ of all claims)
  50–79 → 50% now, 50% after 24hr check
  < 50  → Human review queue (rare edge case)
```
![image alt](https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon/blob/b0e3856e20ffe86763e4b7d57361811ce049ceb6/assests/pricing.html)


![image alt](https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon/blob/b0e3856e20ffe86763e4b7d57361811ce049ceb6/assests/analytics.html)
---

## 🏗️ Tech Stack

```
FRONTEND
  React.js            Main web app (PWA, mobile-first, offline-capable)
  Tailwind CSS        UI styling
  Chart.js/Recharts   Analytics dashboards

BACKEND
  Node.js + Express   REST API gateway
  Python FastAPI      ML inference microservice
  PostgreSQL          Core database (workers, policies, claims, payouts)
  Redis               Real-time trigger event queue + caching

AI / ML
  XGBoost             Zone risk scoring
  scikit-learn        Isolation Forest fraud detection
  Pandas + NumPy      Data processing pipeline
  Python 3.11+

INTEGRATIONS (Free / Mock / Test tiers)
  Open-Meteo API      Weather data (free, no API key needed)
  CPCB AQI API        Government air quality feed (free)
  Razorpay Test Mode  Simulated UPI / IMPS payouts
  Twilio WhatsApp     Worker notifications (sandbox)
  Google Maps Static  Zone visualization

INFRASTRUCTURE
  Docker + Compose    Local development
  GitHub Actions      CI/CD pipeline
  Render / Railway    Free-tier demo deployment
```

---

## 📁 Repository Structure

```
shieldkart/
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Onboarding.jsx         KYC-lite + zone GPS registration
│       │   ├── Dashboard.jsx          Worker view: coverage, claims, earnings
│       │   ├── PolicyManager.jsx      Plan selection + weekly pricing
│       │   ├── ClaimsTracker.jsx      Real-time claim status
│       │   └── AdminDashboard.jsx     Insurer: analytics, loss ratios
│       └── components/
│           ├── ZoneRiskMap.jsx        Interactive risk zone map
│           ├── PremiumCalculator.jsx  Live pricing preview
│           └── PayoutTimeline.jsx     Claim progress visualization
│
├── backend/
│   ├── api/                           Node.js Express
│   │   ├── routes/
│   │   │   ├── workers.js
│   │   │   ├── policies.js
│   │   │   ├── claims.js
│   │   │   └── payouts.js
│   │   └── services/
│   │       ├── triggerMonitor.js      5 parametric trigger checks
│   │       ├── zoneService.js         Zone risk score lookup
│   │       └── payoutService.js       UPI dispatch + WhatsApp notify
│   │
│   └── ml/                            Python FastAPI
│       ├── zone_risk_model.py         XGBoost zone scorer
│       ├── fraud_detection.py         Isolation Forest + GPS entropy
│       ├── premium_calculator.py      Weekly pricing logic
│       ├── confidence_scorer.py       Multi-stream corroboration
│       └── training/
│           ├── train_zone_model.py
│           └── data/                  Mock IMD, CPCB, platform data
│
├── docker-compose.yml
└── README.md
```

---

## 📊 Business Viability

### Market Size
```
Total e-commerce delivery partners in India:         5M+
Partners in Tier-1 + Tier-2 cities:                 2.5M
Year 1 target (Indore, Pune, Ahmedabad,
               Surat, Nagpur pilot cities):          500K
```

### Unit Economics — Standard Plan (₹49/week)

| Metric | Value |
|---|---|
| Weekly premium | ₹49 |
| Monthly premium per worker | ₹196 |
| Expected disruption days/month | 3 days |
| Expected avg payout/month | ₹1,050 |
| Target loss ratio | < 65% |
| Gross margin target (Year 1) | > 30% |
| Platform distribution fee | 0% (direct UPI) |
| CAC via WhatsApp referrals | < ₹50/worker |

### Revenue Projection
```
Year 1 — Conservative (50K activated workers):
  ₹196 × 50,000 × 12 = ₹11.76 Cr ARR

Year 1 — Target (500K activated workers):
  ₹196 × 500,000 × 12 = ₹117.6 Cr ARR
```

---

## 🗓️ Development Roadmap

---

### Phase 1 — Ideation & Foundation `Mar 4–20` ✅
- Concept design — persona, use cases, DZI differentiator
- Architecture planning — system design, tech stack selection
- Parametric modeling — zone risk scoring formula, weekly pricing model
- README documentation and GitHub repository setup

---

### Phase 2 — Automation & Protection `Mar 21–Apr 4`
- Backend + APIs — Node.js gateway, PostgreSQL schema, Redis queue
- Risk engine — XGBoost zone risk model v1, dynamic premium calculator
- Worker registration, KYC-lite onboarding, policy management UI
- Parametric triggers T1 (weather), T2 (AQI), T3 (platform drop) live
- Claims management module + Razorpay test mode payout integration

---

### Phase 3 — Scale & Optimise `Apr 5–17`
- Automation — zero-touch claim flow, confidence scorer, instant UPI payouts
- Fraud detection — GPS entropy analysis, Isolation Forest, cross-worker validation
- Triggers T4 (civic/curfew) + T5 (dense fog) live
- Worker + Admin analytics dashboards
- Deployment — Docker, GitHub Actions CI/CD, Render/Railway free-tier hosting
- Final 5-min demo video + pitch deck PDF

---

## 🌐 Platform Choice: Web PWA

We chose **Web (PWA) over Native Mobile** for:

| Factor | Rationale |
|---|---|
| Zero install friction | Critical for gig worker adoption |
| Android homescreen install | PWA installable via Chrome on Redmi/Samsung |
| Single codebase | Worker app + admin panel in one React project |
| WhatsApp-first UX | Notifications via WhatsApp (workers already use it daily) |
| Offline capability | Service worker caches key screens for low connectivity |
| Hackathon velocity | Faster 6-week delivery than React Native |

---

## 👥 Team — Quantum Leapers

| Member | Role |
|---|---|
| Ashutosh Chauhan | System Architecture & Frontend |
| Isha Shrivastav | AI / ML Engineering |
| Sakur Likhit | Backend & API Development |
| Nishant Raj | Parametric Trigger Engine & Integrations |
| Kurchi Khamaru | Research & Data Collection |

---

 🔗 Submission Links

- GitHub Repository:https://github.com/ashutosh2453/Guidewire-Devtrails-Hackathon
- Phase 1 Demo Video (2 min):
  

---

<div align="center">

ShieldKart — Because every delivery partner deserves a safety net as reliable as the platforms they power.

*Guidewire DEVTrails 2026 · Phase 1 Submission · E-Commerce Delivery Persona*

</div>
