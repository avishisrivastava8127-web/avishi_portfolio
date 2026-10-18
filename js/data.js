/**
 * PORTFOLIO DATA CONFIGURATION
 * Synchronized with Avishi Srivastava's Official Resume & Profile
 */

const portfolioData = {
  personal: {
    name: "Avishi Srivastava",
    role: "B.Tech in Computer Science and Engineering (AI & ML) • VIT Vellore",
    institution: "Vellore Institute of Technology, Vellore",
    statusBadge: "Open to Software Engineering & AI Internships",
    tagline: "Building strong foundations in Java, Python, DSA, and Artificial Intelligence.",
    avatar: "assets/images/avatar.svg",
    resumeImage: "assets/images/resume.jpg",
    location: "VIT Vellore, Tamil Nadu, India",
    email: "avishisrivastava8127@gmail.com",
    phone: "8318676578",
    github: "https://github.com/avishisrivastava8127-web",
    projectUrl: "https://fantasticfive-hg-26.vercel.app/",
    summary: "First-year B.Tech CSE student at VIT Vellore, specialising in Artificial Intelligence and Machine Learning. Passionate about software development, algorithmic problem-solving, and technology. Actively building strong skills in Java, Python, and Data Structures & Algorithms (DSA) while maintaining solid conceptual fundamentals. Eager to contribute to innovative engineering teams with strengths in public speaking, critical thinking, team management, and collaborative execution.",
    stats: [
      { label: "Core Languages", value: "Java & Python" },
      { label: "Focus Areas", value: "DSA & AI/ML" },
      { label: "Class XII CS", value: "100 / 100" },
      { label: "Class XII Overall", value: "97.5%" }
    ]
  },

  // 🏆 ACHIEVEMENTS & MILESTONES
  achievements: [
    {
      id: "ach-gravitas-genai",
      title: "Full Stack Application Development with Generative AI — graVITas 2026",
      category: "Workshop Certification",
      organization: "Vellore Institute of Technology & HCLTech",
      date: "September 18 – 20, 2026",
      icon: "🤖",
      description: "Successfully participated in the One-Day Hands-on Workshop on 'Full Stack Application Development with Generative AI', conducted during graVITas 2026 — the annual techno-management fest of Vellore Institute of Technology, Vellore, conducted in partnership with HCLTech.",
      metrics: "Reg No: 26BAI0202 • Verified by VIT & HCLTech",
      credentialUrl: "assets/documents/certificate-gravitas-2026.pdf",
      credentialPdf: "assets/documents/certificate-gravitas-2026.pdf",
      credentialImage: "assets/images/certificate-gravitas.svg",
      credentialId: "VIT-GRAVITAS-26BAI0202"
    },
    {
      id: "ach-1",
      title: "Second Runner-Up — HackGrid Hackathon",
      category: "Hackathon",
      organization: "HackGrid Hackathon Community",
      date: "2026",
      icon: "🥈",
      description: "Secured second runner-up position in a competitive hackathon out of 53 teams. Collaborated with teammates to develop and present KhetiNex BioChain, an innovative technical solution for agricultural price arbitrage and smart contracts.",
      metrics: "Rank: 2nd Runner-Up out of 53 Teams",
      credentialUrl: "https://fantasticfive-hg-26.vercel.app/",
      credentialId: "HACKGRID-2026-RUNNERUP"
    },
    {
      id: "ach-2",
      title: "Class XII ISC Board Distinction — 100/100 in Computer Science",
      category: "Academic",
      organization: "Council for the Indian School Certificate Examinations (ISC)",
      date: "2024 – 2025",
      icon: "🎖️",
      description: "Achieved a perfect score of 100/100 in Computer Science with a 97.5% overall grade in ISC Class XII board examinations, showing consistent academic excellence and strong conceptual foundation in computing.",
      metrics: "Computer Science: 100/100 • Overall: 97.5%",
      credentialUrl: "#",
      credentialId: "ISC-XII-97.5-CS100"
    },
    {
      id: "ach-3",
      title: "Debate Competitions Winner & Speaker",
      category: "Public Speaking",
      organization: "Inter-School & Collegiate Debate Circuits",
      date: "2023 – Present",
      icon: "🎙️",
      description: "Participated in multiple debate competitions and won several events, showcasing strong public speaking, critical thinking, teamwork, and persuasive communication skills.",
      metrics: "Multiple Tournament Victories & Honors",
      credentialUrl: "#",
      credentialId: "DEBATE-EXCELLENCE"
    },
    {
      id: "ach-4",
      title: "Class X CBSE Board High Distinction — 95.8% Overall",
      category: "Academic",
      organization: "Central Board of Secondary Education (CBSE)",
      date: "2022 – 2023",
      icon: "📚",
      description: "Demonstrated consistent academic performance and strong conceptual understanding with 95.8% overall in CBSE Class X board examinations.",
      metrics: "Overall: 95.8% Distinction",
      credentialUrl: "#",
      credentialId: "CBSE-X-95.8"
    }
  ],

  // 💻 PROJECTS BUILT
  projects: [
    {
      id: "proj-studybuddy-ai",
      title: "StudyBuddy AI — Real-Time Exam Revision, Adaptive Quiz & Streaming Doubt Tutor",
      category: "ai",
      categoryLabel: "AI Systems & Ed-Tech",
      image: "assets/images/project-studybuddy.svg",
      summary: "Full-stack AI study platform powered by Node.js, Express 5, React 19, and Google Gemini Flash Lite. Features multi-format lecture ingestion (PDF text extraction, Markdown, text), instant 1-minute revision sheets, interactive multiple-choice quizzes with explanations, and a real-time streaming doubt tutor.",
      tags: ["React 19", "Node.js", "Express 5", "Google Gemini Flash", "Vite", "Server-Sent Streaming", "PDF Extraction", "Tailwind CSS"],
      liveUrl: "https://45pxqhx1-5173.inc1.devtunnels.ms/",
      githubUrl: "https://github.com/avishisrivastava8127-web/studybuddyy",
      featured: true,
      metrics: "Google Gemini Flash Lite · Streaming Tutor · PDF Ingest",
      details: {
        problem: "Students frequently struggle to revise massive volumes of unstructured lecture slides, handouts, and notes the night before examinations, lacking immediate feedback or dynamic clarification on complex topics.",
        solution: "Architected StudyBuddy AI: an end-to-end intelligent study platform that ingests multi-page lecture PDFs, Markdown, and notes. Employs Gemini Flash Lite with structured schema enforcement to synthesize high-yield 1-minute revision sheets, generate adaptive interactive quizzes with real-time scoring, and provide a conversational streaming tutor grounded in course material.",
        keyFeatures: [
          "Multi-Format Notes Ingestion: Client-side PDF text extraction, Markdown and text file uploads, and clipboard templates",
          "1-Minute Revision Synthesis: Algorithmic extraction of the central thesis, 5 high-yield bullet takeaways (<25 words), and must-remember vocabulary",
          "Interactive Adaptive Quiz Engine: 5-question multiple-choice quizzes with strict JSON schema validation, instant scoring, and concept explanations",
          "Real-Time Streaming Doubt Tutor: Multi-turn conversational chat with token-by-token streaming responses grounded strictly in the student's lecture notes",
          "Session History Persistence: Localized session tracking enabling instant retrieval and review of past revision topics"
        ]
      }
    },
    {
      id: "proj-khetinex-biochain",
      title: "KhetiNex BioChain — Autonomous Agri-Tech & APMC Mandi Arbitrage Exchange",
      category: "agritech",
      categoryLabel: "Web3 & Agri-Tech (HackGrid Project)",
      image: "assets/images/project-biochain.svg",
      summary: "Second Runner-Up at HackGrid Hackathon. Decentralized agricultural trading desk and mandi arbitrage platform providing cross-corridor wholesale price discovery, AI harvest proof, and automated forward smart contracts.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Web3 Smart Contracts", "Google Maps API", "APMC Feeds", "Vercel"],
      liveUrl: "https://fantasticfive-hg-26.vercel.app/",
      githubUrl: "https://github.com/avishisrivastava8127-web",
      featured: true,
      metrics: "2nd Runner-Up at HackGrid Hackathon",
      details: {
        problem: "Agricultural producers and bulk commodity buyers endure fragmented wholesale pricing, high intermediary commissions, and unreliable manual quality inspections across regional APMC mandis.",
        solution: "Engineered KhetiNex BioChain (team Fantastic Five) during the HackGrid Hackathon: a unified agri-tech platform integrating real-time APMC price telemetry, Google Maps logistics arbitrage routing, escrow-backed forward smart contracts, and AI harvest quality verification.",
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
    photo: "assets/images/resume.jpg",
    title: "Avishi Srivastava",
    subtitle: "B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    institution: "Vellore Institute of Technology, Vellore",
    contactLine: "avishisrivastava8127@gmail.com • 8318676578 • github.com/avishisrivastava8127-web • fantasticfive-hg-26.vercel.app",
    profileSummary: "First-year B.Tech CSE student at VIT Vellore, specialising in Artificial Intelligence and Machine Learning. Passionate about technology, problem-solving and creating meaningful solutions. Recognised as a second runner-up at the HackGrid Hackathon, with strong interests in public speaking, team management and collaboration. Currently building my programming skills in Java and Python while exploring opportunities to contribute to innovative projects and grow in the tech community.",
    
    education: [
      {
        institution: "Vellore Institute of Technology, Vellore",
        degree: "B.Tech in Computer Science and Engineering (Specialisation: AI & ML)",
        period: "2026 – Present",
        score: "Pursuing First Year",
        highlights: "Focus on AI & Machine Learning, Data Structures, and Computational Foundations"
      },
      {
        institution: "Class XII (ISC)",
        degree: "Higher Secondary Certificate",
        period: "2024 – 2025",
        score: "97.5% overall • Computer Science: 100/100",
        highlights: "Perfect 100/100 score in Computer Science"
      },
      {
        institution: "Class X (CBSE)",
        degree: "Secondary School Examination",
        period: "2022 – 2023",
        score: "95.8% overall",
        highlights: "Consistent academic performance and conceptual understanding"
      }
    ],

    achievements: [
      {
        title: "Full Stack Development with Generative AI (graVITas 2026)",
        points: [
          "Completed hands-on technical workshop on Full Stack Application Development with Generative AI at graVITas 2026, VIT Vellore in partnership with HCLTech.",
          "Applied generative AI models, LLM APIs, and full-stack integration frameworks."
        ]
      },
      {
        title: "Second Runner-Up — HackGrid Hackathon",
        points: [
          "Secured second runner-up position in a competitive hackathon.",
          "Collaborated with teammates to develop and present a technical solution.",
          "Project Link: fantasticfive-hg-26.vercel.app"
        ]
      },
      {
        title: "Debate Competitions",
        points: [
          "Participated in multiple debate competitions and won several events, showcasing strong public speaking, critical thinking and persuasive communication skills."
        ]
      },
      {
        title: "Academic Highlights",
        points: [
          "Scored 97.5% in Class XII (Computer Science – 100/100) and 95.8% in Class X.",
          "Consistent academic performance and strong conceptual understanding."
        ]
      }
    ],

    skills: {
      languages: ["Python (learning)", "Java (learning)"],
      interests: ["Artificial Intelligence", "Machine Learning", "Software Development"],
      competencies: [
        "Public Speaking and Presentation",
        "Team Management",
        "Communication",
        "Collaboration",
        "Critical Thinking",
        "Problem Solving"
      ],
      technicalDev: ["Programming fundamentals and problem-solving"]
    },

    additionalInterests: [
      "Technology and Innovation",
      "Debate",
      "Public Speaking",
      "Collaborative Problem-Solving"
    ]
  },

  // 💼 CONTACT FOR HIRING & OPPORTUNITIES
  hiring: {
    statusText: "Open to Technical Internships, Research Collaborations, and Open-Source Opportunities.",
    targetRoles: [
      "Software Engineering Intern",
      "AI / Machine Learning Intern",
      "Frontend / Full-Stack Contributor",
      "Hackathon Collaboration Partner"
    ],
    timeline: "Available Immediately for Part-time / Remote Internships & Projects",
    preferredLocation: "VIT Vellore / Remote / Hybrid",
    responseGuarantee: "Guaranteed reply within 24 hours"
  }
};

// Export for usage in browser or node
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
