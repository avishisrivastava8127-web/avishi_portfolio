/**
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to customize all details, projects, achievements, and contact information.
 */

const portfolioData = {
  personal: {
    name: "Avishi Srivastava",
    role: "Full-Stack Software Engineer & Creative Technologist",
    statusBadge: "Available for Full-Time Roles & Consulting",
    tagline: "Architecting high-performance web systems, distributed cloud applications, and AI-driven digital experiences.",
    avatar: "assets/images/avatar.svg",
    location: "Bengaluru, India (Open to Relocation & Remote)",
    email: "avishi.srivastava.dev@gmail.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/avishi-srivastava",
    github: "https://github.com/avishi-srivastava",
    twitter: "https://twitter.com/avishi_dev",
    summary: "Innovative and results-driven Software Engineer with proven expertise building resilient distributed architectures, modern front-end user experiences, and production machine learning workflows. Adept at turning intricate problem spaces into high-throughput, elegant software that delivers measurable impact.",
    stats: [
      { label: "Flagship System", value: "KhetiNex" },
      { label: "Hackathons & Awards", value: "8+" },
      { label: "Open Source Commits", value: "1,200+" },
      { label: "System Uptime Track", value: "99.98%" }
    ]
  },

  // 🏆 ACHIEVEMENTS & MILESTONES
  achievements: [
    {
      id: "ach-1",
      title: "1st Place Winner — Global AI Agent Hackathon 2025",
      category: "Hackathon",
      organization: "Hugging Face & Anthropic Community",
      date: "Nov 2025",
      icon: "🏆",
      description: "Spearheaded an autonomous multi-agent developer copilot that dynamically compiles, tests, and resolves pull requests in microservice ecosystems.",
      metrics: "Outperformed 450+ international developer teams",
      credentialUrl: "https://example.com/certificate/hackathon-winner",
      credentialId: "CERT-AI-AGENTS-2025"
    },
    {
      id: "ach-2",
      title: "AWS Certified Solutions Architect – Associate",
      category: "Certification",
      organization: "Amazon Web Services",
      date: "Aug 2025",
      icon: "☁️",
      description: "Demonstrated mastery in deploying secure, resilient, high-availability cloud infrastructures using serverless Lambdas, ECS, and DynamoDB.",
      metrics: "Score: 920 / 1000",
      credentialUrl: "https://aws.amazon.com/verification",
      credentialId: "AWS-SAA-8842109"
    },
    {
      id: "ach-3",
      title: "Dean's Excellence Award for Academic & Technical Merit",
      category: "Academic",
      organization: "Institute of Engineering & Technology",
      date: "May 2025",
      icon: "🎖️",
      description: "Conferred for ranking in the top 1% of the Computer Science cohort and publishing undergraduate research in distributed cache synchronization.",
      metrics: "Top 1% Department Rank • CGPA: 9.4/10.0",
      credentialUrl: "https://example.com/certificate/deans-list",
      credentialId: "ACAD-HONOR-2025-01"
    },
    {
      id: "ach-4",
      title: "Google Cloud Innovator Champion",
      category: "Certification",
      organization: "Google Cloud Platform",
      date: "Feb 2025",
      icon: "⚡",
      description: "Recognized for community leadership, architecting Kubernetes GKE pipelines, and publishing open-source terraform automation modules.",
      metrics: "Selected among top 50 emerging cloud architects",
      credentialUrl: "https://cloud.google.com/innovators",
      credentialId: "GCP-INN-59312"
    },
    {
      id: "ach-5",
      title: "Smart India Hackathon Finalist & Top Innovator",
      category: "Hackathon",
      organization: "Ministry of Education & AICTE",
      date: "Dec 2024",
      icon: "🥇",
      description: "Built an offline-first distributed medical inventory allocation dashboard utilizing lightweight edge PWA architectures and encrypted SQLite synchronization.",
      metrics: "Selected from 65,000+ participating candidates nationwide",
      credentialUrl: "https://sih.gov.in",
      credentialId: "SIH-2024-NAT-77"
    },
    {
      id: "ach-6",
      title: "Open Source Core Contributor Badge",
      category: "Open Source",
      organization: "React & Next.js Ecosystem Community",
      date: "Ongoing",
      icon: "🚀",
      description: "Authored optimizations for client-side tree-shaking and responsive image loading pipelines adopted by over 20,000+ weekly NPM installs.",
      metrics: "12 Merged PRs in widely adopted tools",
      credentialUrl: "https://github.com",
      credentialId: "GH-OSS-CONTRIB"
    }
  ],

  // 💻 PROJECTS BUILT
  projects: [
    {
      id: "proj-khetinex-biochain",
      title: "KhetiNex BioChain — Autonomous Agri-Tech & APMC Mandi Arbitrage Exchange",
      category: "agritech",
      categoryLabel: "Web3 & Agri-Tech",
      image: "assets/images/project-biochain.svg",
      summary: "Decentralized agricultural trading desk and mandi arbitrage platform providing cross-corridor wholesale price discovery, AI harvest proof, and automated forward smart contracts.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Web3 Smart Contracts", "Google Maps API", "APMC Feeds", "Vercel"],
      liveUrl: "https://fantasticfive-hg-26.vercel.app/",
      githubUrl: "https://github.com/avishisrivastava8127-web/avishi_portfolio",
      featured: true,
      metrics: "Live Multi-Mandi Arbitrage Engine & Smart Contract Deal Room",
      details: {
        problem: "Agricultural producers and bulk commodity buyers endure fragmented wholesale pricing, high intermediary commissions, and unreliable manual quality inspections across regional APMC mandis.",
        solution: "Engineered BioChain (Fantastic Five), a unified agri-tech platform integrating real-time APMC price telemetry, Google Maps logistics arbitrage routing, escrow-backed forward smart contracts, and AI harvest quality verification.",
        keyFeatures: [
          "Mandi Arbitrage Engine: Real-time price discovery comparing rates across Mumbai Vashi, Bangalore, Delhi Azadpur, Nashik, and Indore APMCs",
          "Automated Forward Smart Contracts: Dynamic crop valuation, transit spoilage caps, and cryptographic contract generation",
          "AI Harvest Proof & Quality Hub: Standardized checks for moisture levels, grain health, cleanliness, and FSSAI regulatory compliance",
          "Logistics & Route Optimization: Interactive Google Maps visualizer calculating distance, transit hours, and net profit margins (+₹480/MT)"
        ]
      }
    }
  ],

  // 📄 PHOTO RESUME DATA
  resume: {
    photo: "assets/images/avatar.svg",
    title: "Avishi Srivastava — Full Stack Software Engineer",
    contactLine: "avishi.srivastava.dev@gmail.com • +91 98765 43210 • Bengaluru, India • linkedin.com/in/avishi-srivastava",
    profileSummary: "Accomplished Software Engineer with a rigorous foundation in Computer Science and comprehensive experience developing enterprise-grade web applications, microservices, and AI integrations. Demonstrates expertise across TypeScript, React, Node.js, Python, and Cloud Native Architectures (AWS/GCP). Proven track record of improving system latency by 40%, mentoring peer developers, and shipping products from zero to scaled production.",
    
    experience: [
      {
        role: "Software Development Engineer",
        company: "Apex Cloud Technologies",
        period: "2024 — Present",
        location: "Bengaluru, India",
        points: [
          "Architected and deployed microservices handling 25M+ daily requests utilizing Node.js, Express, and Redis caching layers.",
          "Spearheaded redesign of customer web portal with React and TypeScript, boosting Core Web Vitals to 98% and reducing churn by 18%.",
          "Designed automated CI/CD canary deployment pipelines using Docker, GitHub Actions, and AWS ECS, minimizing release downtime.",
          "Mentored 6 junior engineers and interns in asynchronous programming paradigms and automated test suite design (Jest/Cypress)."
        ]
      },
      {
        role: "Full-Stack Engineering Intern",
        company: "Cognitive Matrix Labs",
        period: "2023 — 2024",
        location: "Remote / Hybrid",
        points: [
          "Engineered interactive analytics dashboards with Next.js, Tailwind CSS, and D3.js visualization charts.",
          "Integrated generative AI APIs (OpenAI, Claude, and local Ollama) into workflow copilot features utilized by 10,000+ active users.",
          "Optimized PostgreSQL schema queries and indexing, reducing peak reporting execution time by 62%."
        ]
      },
      {
        role: "Open Source Contributor & Technical Fellow",
        company: "Developer Guild Initiative",
        period: "2022 — 2023",
        location: "Community",
        points: [
          "Collaborated on modern UI component design systems and accessibility auditing adhering strictly to WCAG 2.1 AA standards.",
          "Authored comprehensive technical guides on distributed systems and micro-frontends with over 80,000 collective reads."
        ]
      }
    ],

    education: [
      {
        degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
        institution: "National Institute of Technology / Leading Tech University",
        period: "2020 — 2024",
        score: "CGPA: 9.4 / 10.0 (First Class with Distinction)",
        highlights: "Dean's Honor Roll, Secretary of ACM Student Chapter, Lead Organizer for Annual Hackathon"
      }
    ],

    skills: {
      languages: ["JavaScript (ES6+)", "TypeScript", "Python", "Go (Golang)", "SQL", "HTML5/CSS3"],
      frameworks: ["React.js", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS", "Redux/Zustand"],
      cloudDevops: ["AWS (S3, Lambda, ECS, RDS)", "Docker", "Kubernetes", "Git & GitHub Actions", "Nginx", "Linux/Bash"],
      databases: ["PostgreSQL", "MongoDB", "Redis", "Pinecone (Vector DB)", "TimescaleDB"],
      practices: ["Microservices", "REST & GraphQL", "CI/CD GitOps", "System Design", "Agile/Scrum", "TDD & Unit Testing"]
    },

    certifications: [
      "AWS Certified Solutions Architect – Associate",
      "Google Cloud Innovator Champion",
      "Meta Certified Front-End Developer Specialization",
      "HackerRank Problem Solving (Advanced) & Algorithms"
    ]
  },

  // 💼 CONTACT FOR HIRING
  hiring: {
    statusText: "Currently accepting inquiries for Full-time roles, Staff/Senior IC positions, and Architecture Consulting.",
    targetRoles: [
      "Full-Stack Software Engineer",
      "Senior Frontend / React Architect",
      "Backend / Distributed Systems Engineer",
      "AI / Machine Learning Application Engineer",
      "Technical Lead / Founding Engineer"
    ],
    timeline: "Immediate to 30 Days Notice",
    preferredLocation: "Bengaluru, Hybrid, or Global Remote",
    responseGuarantee: "Guaranteed response within 24 business hours"
  }
};

// Export for usage in browser or node
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
