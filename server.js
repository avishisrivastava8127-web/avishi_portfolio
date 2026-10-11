/**
 * PORTFOLIO BACKEND & FULL-STACK SERVER
 * Author: Avishi Srivastava Portfolio
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname)));

// Ensure data directory exists for message persistence
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const inquiriesFile = path.join(dataDir, 'inquiries.json');
if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2));
}

// Load Portfolio Data
let portfolioData = {};
try {
  portfolioData = require('./js/data.js');
} catch (err) {
  console.error('Error loading portfolio data module:', err.message);
}

// ==========================================
// REST API ROUTES
// ==========================================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Full Portfolio Data API
app.get('/api/portfolio', (req, res) => {
  res.json({
    success: true,
    data: portfolioData
  });
});

// Projects API with optional category/search query
app.get('/api/projects', (req, res) => {
  const { category, search } = req.query;
  let projects = portfolioData.projects || [];

  if (category && category !== 'all') {
    projects = projects.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    projects = projects.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  res.json({
    success: true,
    count: projects.length,
    projects
  });
});

// Achievements API
app.get('/api/achievements', (req, res) => {
  res.json({
    success: true,
    achievements: portfolioData.achievements || []
  });
});

// Photo Resume API
app.get('/api/resume', (req, res) => {
  res.json({
    success: true,
    resume: portfolioData.resume || {}
  });
});

// Contact / Hiring Form Submission API
app.post('/api/contact', (req, res) => {
  const { name, email, company, roleType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required fields.'
    });
  }

  const newInquiry = {
    id: 'inq_' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    company: company ? company.trim() : 'N/A',
    roleType: roleType || 'Full-Time Software Engineer',
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    const rawData = fs.readFileSync(inquiriesFile, 'utf8');
    const inquiries = JSON.parse(rawData || '[]');
    inquiries.unshift(newInquiry);
    fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));

    console.log(`[HIRING INQUIRY] Received from ${newInquiry.name} (${newInquiry.email}) for role: ${newInquiry.roleType}`);

    res.status(201).json({
      success: true,
      message: `Thank you ${newInquiry.name}! Your hiring inquiry has been received. Expect a response within 24 hours.`,
      inquiryId: newInquiry.id
    });
  } catch (err) {
    console.error('Error saving inquiry:', err.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error while saving inquiry.'
    });
  }
});

// List Inquiries (for recruiter/admin review)
app.get('/api/inquiries', (req, res) => {
  try {
    const rawData = fs.readFileSync(inquiriesFile, 'utf8');
    const inquiries = JSON.parse(rawData || '[]');
    res.json({
      success: true,
      count: inquiries.length,
      inquiries
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Could not read inquiries.' });
  }
});

// Fallback to index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 Portfolio App running at http://localhost:${PORT}`);
  console.log(`📡 Frontend: http://localhost:${PORT}`);
  console.log(`⚙️  Backend API: http://localhost:${PORT}/api/portfolio`);
  console.log(`📬 Hiring Submissions API: http://localhost:${PORT}/api/contact`);
  console.log('====================================================');
});
