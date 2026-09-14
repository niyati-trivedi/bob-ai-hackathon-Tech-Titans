# DEFCON-X: AI Defence Readiness & Threat Intelligence Copilot

> AI-powered defence intelligence platform combining mission readiness assessment and threat intelligence correlation.

---

## 👥 Team

| Field | Value |
|---|---|
| **Team Name** | Tech Titans |
| **Track** | AI |
| **Team Lead** | Shreya — 25dcs106@charusat.edu.in |
| **Members** | [Add team members] |

---

## 🎯 Problem Statement

Defence teams struggle with fragmented intelligence — treating maintenance, cybersecurity, and mission planning as separate systems. They need unified visibility into:
- **Mission Readiness**: Asset health, predictive failures, readiness scoring
- **Threat Intelligence**: Cyber threats, anomalies, alert prioritization
- **Mission Impact**: How threats and failures affect operational capability

---

## 💡 Solution

**DEFCON-X** unifies mission readiness and threat intelligence into one AI-powered command environment. Instead of managing separate dashboards, defence teams get one copilot that answers:

> **Is this mission ready? What could go wrong? Why is it risky? What will happen next? What should we prioritize?**

---

## ✨ Key Features

- **Real-time Mission Readiness Assessment**: Asset health monitoring + predictive maintenance
- **Threat Intelligence Correlation**: Cyber threat detection + alert prioritization
- **AI Copilot**: Risk explanations, threat summaries, recommended actions
- **Mission-Impact Mapping**: Connects threats & failures to mission outcomes
- **Unified Command Environment**: One dashboard for defence readiness

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React, TanStack Start, TypeScript |
| **UI Framework** | Radix UI, shadcn/ui, Tailwind CSS |
| **Build** | Vite, TanStack Router |
| **Languages** | TypeScript, React |
| **Package Manager** | Bun |
| **Other** | Recharts (data visualization), Zod (validation) |

---

## 📁 Repository Structure

```
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── routes/           # TanStack Start pages
│   ├── router.tsx        # Router configuration
│   ├── start.ts          # Start server config
│   └── styles.css        # Tailwind CSS + theme
├── public/               # Static assets
├── docs/                 # Documentation
├── demo/                 # Demo artifacts
├── presentation/         # Slide deck
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── submission.yaml       # Submission metadata
```

---

## ⚡ How to Run

```bash
# 1. Clone the repo
git clone https://github.com/niyati-trivedi/bob-ai-hackathon-Tech-Titans.git
cd bob-ai-hackathon-Tech-Titans

# 2. Install dependencies
bun install

# 3. Run development server
bun run dev

# 4. Build for production
bun run build
```

The app will be available at `http://localhost:5173`

---

## 🖥️ Demo

| Artifact | Location |
|---|---|
| 📹 Demo Video | [demo/demo-video-link.txt](demo/demo-video-link.txt) |
| 🌐 Live Demo | [demo/live-demo-url.txt](demo/live-demo-url.txt) |
| 🖼️ Screenshots | [demo/screenshots/](demo/screenshots/) |
| 📊 Presentation | [presentation/slides.pdf](presentation/) |

---

## ⚠️ Known Limitations

- AI copilot features are scaffolded (ready for LLM integration via watsonx.ai)
- Mock data used for demo purposes
- Authentication layer not yet implemented
- Database integration in progress

---

## 🏅 What We're Most Proud Of

The **unified intelligence model** that connects mission readiness and threat intelligence in one copilot — something currently handled by separate point solutions in defence organizations.

---

## 📝 Additional Resources

- [Architecture Documentation](docs/)
- [Setup Guide](docs/setup-guide.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

**Built with ❤️ for the IBM Bob AI Hackathon**
