import { FormEvent, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { Play, Download, Trash2, RotateCcw } from 'lucide-react';
import Editor from '@monaco-editor/react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { setSelectedTemplate } from './compilerTemplateStore';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content:
      'Welcome to Web Maker! Describe the website you want to build, or pick a starting point from the templates.',
  },
];

export function AIWebMaker() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const templates = {
    'Portfolios': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Chen - Creative Developer & Designer</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🎨</span>
        Alex Chen
      </div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="cta-btn">Let's Talk</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span>Available for new projects</span>
        </div>
        <h1 class="hero-title">
          Crafting Digital<br>
          <span class="highlight">Experiences</span>
        </h1>
        <p class="hero-subtitle">
          I'm a passionate developer and designer creating meaningful digital solutions that combine beautiful design with powerful functionality.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">3+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">100%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="primary-button">View My Work</button>
          <button class="secondary-button">Download CV</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="profile-image">
          <div class="image-placeholder">
            <span>👨‍💻</span>
          </div>
          <div class="floating-elements">
            <div class="floating-card card-1">
              <span>💻</span>
            </div>
            <div class="floating-card card-2">
              <span>🎯</span>
            </div>
            <div class="floating-card card-3">
              <span>🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <div class="section-badge">About Me</div>
          <h2 class="section-title">
            Passionate about creating<br>
            <span class="text-highlight">exceptional experiences</span>
          </h2>
          <p class="about-text">
            With over 3 years of experience in web development and design, I specialize in creating digital solutions that not only look beautiful but also deliver exceptional user experiences. My approach combines technical expertise with creative vision.
          </p>
          <p class="about-text">
            I believe in the power of collaboration and continuous learning. Every project is an opportunity to push boundaries and create something truly remarkable.
          </p>
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">🎯</div>
              <div>
                <h4>Problem Solver</h4>
                <p>Turning complex challenges into elegant solutions</p>
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">💡</div>
              <div>
                <h4>Innovative Thinker</h4>
                <p>Bringing fresh perspectives to every project</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="skills-showcase">
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">95%</span>
                <span class="skill-name">React</span>
              </div>
            </div>
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">90%</span>
                <span class="skill-name">TypeScript</span>
              </div>
            </div>
            <div class="skill-circle">
              <div class="circle-content">
                <span class="skill-percentage">85%</span>
                <span class="skill-name">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="work">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">My Work</div>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A selection of projects that showcase my skills and passion for creating exceptional digital experiences.</p>
      </div>
      <div class="work-grid">
        <div class="work-card featured">
          <div class="work-image">
            <div class="image-placeholder">
              <span>🛒</span>
            </div>
            <div class="work-category">E-Commerce</div>
          </div>
          <div class="work-content">
            <h3>EcoShop - Sustainable E-Commerce</h3>
            <p>A modern e-commerce platform built with React and Node.js, featuring sustainable product curation and seamless checkout experience.</p>
            <div class="work-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
              <a href="#" class="work-link secondary">View Code</a>
            </div>
          </div>
        </div>
        <div class="work-card">
          <div class="work-image">
            <div class="image-placeholder">
              <span>📱</span>
            </div>
            <div class="work-category">Mobile App</div>
          </div>
          <div class="work-content">
            <h3>FitTracker Pro</h3>
            <p>A comprehensive fitness tracking app with personalized workout plans and progress analytics.</p>
            <div class="work-tech">
              <span>React Native</span>
              <span>Firebase</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
            </div>
          </div>
        </div>
        <div class="work-card">
          <div class="work-image">
            <div class="image-placeholder">
              <span>🎨</span>
            </div>
            <div class="work-category">Design System</div>
          </div>
          <div class="work-content">
            <h3>DesignFlow UI Kit</h3>
            <p>A comprehensive design system and component library for modern web applications.</p>
            <div class="work-tech">
              <span>Figma</span>
              <span>Storybook</span>
            </div>
            <div class="work-links">
              <a href="#" class="work-link">View Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">Expertise</div>
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Proficient in modern technologies and frameworks</p>
      </div>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend Development</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">⚛️</div>
              <div class="skill-info">
                <h4>React & Next.js</h4>
                <p>Advanced component architecture and SSR</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🎨</div>
              <div class="skill-info">
                <h4>TypeScript & JavaScript</h4>
                <p>Type-safe development and modern ES6+</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">💅</div>
              <div class="skill-info">
                <h4>CSS & Tailwind</h4>
                <p>Responsive design and modern styling</p>
              </div>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Backend & Tools</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-icon">🟢</div>
              <div class="skill-info">
                <h4>Node.js & Express</h4>
                <p>RESTful APIs and server-side development</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🗄️</div>
              <div class="skill-info">
                <h4>Databases</h4>
                <p>MongoDB, PostgreSQL, and Redis</p>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-icon">☁️</div>
              <div class="skill-info">
                <h4>Cloud & DevOps</h4>
                <p>AWS, Docker, and CI/CD pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to bring your ideas to life?</h2>
        <p>Let's collaborate and create something amazing together.</p>
        <div class="cta-actions">
          <button class="cta-button primary">Start a Project</button>
          <button class="cta-button secondary">Get In Touch</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🎨</span>
            Alex Chen
          </div>
          <p>Creating digital experiences that matter.</p>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Dribbble</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Work</h4>
            <a href="#">Portfolio</a>
            <a href="#">Case Studies</a>
            <a href="#">Testimonials</a>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <a href="#">Web Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Consulting</a>
          </div>
          <div class="footer-column">
            <h4>Contact</h4>
            <a href="#">hello@alexchen.dev</a>
            <a href="#">Schedule a Call</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Alex Chen. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.cta-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="50" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="1000" height="1000" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #fbbf24;
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hero-visual {
  position: relative;
}

.profile-image {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.floating-card {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: -20px;
  right: -20px;
  animation-delay: 0s;
}

.card-2 {
  bottom: -20px;
  left: -20px;
  animation-delay: 2s;
}

.card-3 {
  top: 50%;
  left: -30px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-badge {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.text-highlight {
  color: #2563eb;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.about {
  padding: 6rem 0;
  background: #f8fafc;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-content {
  max-width: 500px;
}

.about-text {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.highlight-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.highlight-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.highlight-item p {
  color: #6b7280;
  font-size: 0.875rem;
}

.about-visual {
  display: flex;
  justify-content: center;
}

.skills-showcase {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-circle {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.skill-circle::before {
  content: '';
  position: absolute;
  inset: 8px;
  background: white;
  border-radius: 50%;
}

.circle-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.skill-percentage {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
  display: block;
}

.skill-name {
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
}

.work {
  padding: 6rem 0;
  background: white;
}

.work-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.work-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.work-card.featured {
  grid-column: span 2;
}

.work-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.work-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #2563eb;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.work-content {
  padding: 1.5rem;
}

.work-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.work-content p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.work-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.work-tech span {
  background: #f3f4f6;
  color: #4b5563;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.work-links {
  display: flex;
  gap: 1rem;
}

.work-link {
  color: #2563eb;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.work-link:hover {
  color: #1d4ed8;
}

.work-link.secondary {
  color: #6b7280;
}

.work-link.secondary:hover {
  color: #4b5563;
}

.skills {
  padding: 6rem 0;
  background: #f8fafc;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.skill-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.skill-info p {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button.primary {
  background: white;
  color: #2563eb;
  border: none;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2563eb;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  .floating-card {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-visual {
    order: -1;
  }

  .skills-showcase {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .skill-circle {
    width: 100px;
    height: 100px;
  }

  .work-grid {
    grid-template-columns: 1fr;
  }

  .work-card.featured {
    grid-column: span 1;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skill-items {
    gap: 1rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}`
    },
    'SaaS Landing Pages': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaskFlow - Productivity Made Simple</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">⚡</span>
        TaskFlow
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>
      <div class="nav-actions">
        <button class="login-btn">Log In</button>
        <button class="signup-btn">Start Free Trial</button>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge">
          <span>✨ New: AI-Powered Workflow</span>
        </div>
        <h1 class="hero-title">
          Streamline Your Team's<br>
          <span class="highlight">Productivity</span>
        </h1>
        <p class="hero-subtitle">
          TaskFlow combines powerful project management with intelligent automation to help teams achieve more, faster.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50K+</div>
            <div class="stat-label">Active Users</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
          <div class="stat">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support</div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="primary-button">Start Free Trial</button>
          <button class="secondary-button">Watch Demo</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="dashboard-preview">
          <div class="preview-header">
            <div class="preview-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="preview-content">
            <div class="preview-card">
              <h4>Project Alpha</h4>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>
            <div class="preview-card">
              <h4>Team Tasks</h4>
              <div class="task-list">
                <div class="task-item">✓ Design review</div>
                <div class="task-item">○ Code review</div>
                <div class="task-item">○ Deploy to production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Everything you need to succeed</h2>
        <p class="section-subtitle">Powerful features designed for modern teams</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Lightning Fast</h3>
          <p>Optimized performance with instant loading and real-time updates across all devices.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3>AI Automation</h3>
          <p>Intelligent workflows that learn from your patterns and automate repetitive tasks.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Advanced Analytics</h3>
          <p>Detailed insights and reporting to track progress and optimize team performance.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>Seamless Integration</h3>
          <p>Connect with 200+ tools including Slack, GitHub, Jira, and Google Workspace.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Dedicated support team available around the clock with live chat and video calls.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to transform your workflow?</h2>
        <p>Join thousands of teams already using TaskFlow to boost productivity.</p>
        <button class="cta-button">Get Started Today</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">⚡</span>
            TaskFlow
          </div>
          <p>Streamlining productivity for modern teams.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Security</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Status</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-btn {
  background: transparent;
  color: #4b5563;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.login-btn:hover {
  color: #2563eb;
}

.signup-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.signup-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #fbbf24;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dashboard-preview {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.preview-dots {
  display: flex;
  gap: 0.5rem;
}

.preview-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(5px);
}

.preview-card h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background: #fbbf24;
  border-radius: 2px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.task-item {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  padding: 6rem 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .nav-links {
    display: none;
  }

  .nav-actions {
    flex-direction: column;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}`
    },
    'Restaurant Sites': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Bella Vista - Fine Italian Dining</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🍽️</span>
        La Bella Vista
      </div>
      <div class="nav-links">
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="reserve-btn">Reserve Table</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="hero-content">
        <div class="badge">
          <span>⭐ Michelin Star Restaurant</span>
        </div>
        <h1 class="hero-title">
          Experience Authentic<br>
          <span class="highlight">Italian Cuisine</span>
        </h1>
        <p class="hero-subtitle">
          Indulge in the finest Italian dining experience with fresh ingredients, traditional recipes, and impeccable service in an elegant atmosphere.
        </p>
        <div class="hero-actions">
          <button class="primary-button">Make Reservation</button>
          <button class="secondary-button">View Menu</button>
        </div>
      </div>
    </div>
  </section>

  <section id="menu" class="menu">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Menu</h2>
        <p class="section-subtitle">Fresh, seasonal ingredients prepared with traditional Italian techniques</p>
      </div>
      <div class="menu-categories">
        <div class="category-tabs">
          <button class="tab active" data-category="appetizers">Appetizers</button>
          <button class="tab" data-category="mains">Main Courses</button>
          <button class="tab" data-category="desserts">Desserts</button>
          <button class="tab" data-category="wines">Wine Selection</button>
        </div>
        <div class="menu-items">
          <div class="menu-item">
            <div class="item-info">
              <h3>Antipasto della Casa</h3>
              <p>Selection of cured meats, artisanal cheeses, and seasonal vegetables</p>
            </div>
            <div class="item-price">$24</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Risotto ai Funghi</h3>
              <p>Creamy Arborio rice with wild mushrooms, truffle oil, and Parmesan</p>
            </div>
            <div class="item-price">$28</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Ossobuco alla Milanese</h3>
              <p>Braised veal shanks with saffron risotto and gremolata</p>
            </div>
            <div class="item-price">$42</div>
          </div>
          <div class="menu-item">
            <div class="item-info">
              <h3>Tiramisu Classico</h3>
              <p>Traditional coffee-flavored dessert with mascarpone and ladyfingers</p>
            </div>
            <div class="item-price">$12</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="reservations" class="reservations">
    <div class="container">
      <div class="reservation-content">
        <div class="reservation-info">
          <h2>Make a Reservation</h2>
          <p>Book your table for an unforgettable dining experience</p>
          <div class="reservation-features">
            <div class="feature">
              <span class="feature-icon">🕐</span>
              <span>Open daily 5:30 PM - 11:00 PM</span>
            </div>
            <div class="feature">
              <span class="feature-icon">👥</span>
              <span>Groups up to 12 people</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🎩</span>
              <span>Dress code: Smart casual</span>
            </div>
          </div>
        </div>
        <div class="reservation-form">
          <form>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Your name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" id="date">
              </div>
              <div class="form-group">
                <label for="time">Time</label>
                <select id="time">
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="guests">Number of Guests</label>
              <select id="guests">
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5-8 people</option>
                <option>9+ people</option>
              </select>
            </div>
            <button type="submit" class="submit-btn">Reserve Table</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>Our Story</h2>
          <p>La Bella Vista has been serving authentic Italian cuisine for over 25 years. Our passion for traditional recipes, combined with the finest seasonal ingredients, creates an unforgettable dining experience.</p>
          <p>Chef Marco brings his family's recipes from Tuscany, passed down through generations, to create dishes that celebrate the rich culinary heritage of Italy.</p>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <span>👨‍🍳</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🍽️</span>
            La Bella Vista
          </div>
          <p>Authentic Italian dining since 1999</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Visit Us</h4>
            <p>123 Italian Street<br>New York, NY 10001</p>
            <p>(555) 123-4567</p>
          </div>
          <div class="footer-column">
            <h4>Hours</h4>
            <p>Mon-Thu: 5:30 PM - 10:00 PM</p>
            <p>Fri-Sat: 5:30 PM - 11:00 PM</p>
            <p>Sunday: 5:00 PM - 9:00 PM</p>
          </div>
          <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 La Bella Vista. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  line-height: 1.6;
  color: #2d3748;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #d97706;
}

.reserve-btn {
  background: #d97706;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reserve-btn:hover {
  background: #b45309;
}

.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%238B4513" width="1200" height="800"/><text fill="white" font-size="100" x="600" y="400" text-anchor="middle">Restaurant</text></svg>');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(217, 119, 6, 0.8), rgba(180, 83, 9, 0.8));
}

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', sans-serif;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button {
  background: white;
  color: #d97706;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.menu {
  padding: 6rem 0;
  background: #f7fafc;
}

.menu-categories {
  max-width: 800px;
  margin: 0 auto;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.tab {
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.tab.active {
  background: #d97706;
  color: white;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.item-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.item-info p {
  color: #718096;
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
}

.item-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #d97706;
}

.reservations {
  padding: 6rem 0;
  background: white;
}

.reservation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.reservation-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.reservation-info p {
  font-size: 1.125rem;
  color: #718096;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}

.reservation-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
}

.feature-icon {
  font-size: 1.25rem;
}

.reservation-form {
  background: #f7fafc;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

label {
  display: block;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

input, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

input:focus, select:focus {
  outline: none;
  border-color: #d97706;
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
}

.submit-btn {
  width: 100%;
  background: #d97706;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.submit-btn:hover {
  background: #b45309;
}

.about {
  padding: 6rem 0;
  background: #f7fafc;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.125rem;
  color: #718096;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #d97706, #c2410c);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d97706;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #a0aec0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.footer-column p {
  color: #a0aec0;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Inter', sans-serif;
}

.social-links a:hover {
  color: #d97706;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  text-align: center;
  color: #a0aec0;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .nav-links {
    display: none;
  }

  .reservation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .menu-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}`
    },
    'E-Commerce Stores': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StyleHub - Premium Fashion & Lifestyle</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🛍️</span>
        StyleHub
      </div>
      <div class="nav-links">
        <a href="#products">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </div>
      <div class="nav-actions">
        <button class="search-btn">🔍</button>
        <button class="cart-btn">
          <span class="cart-icon">🛒</span>
          <span class="cart-count">3</span>
        </button>
        <button class="account-btn">👤</button>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Discover Your<br>
          <span class="highlight">Style</span>
        </h1>
        <p class="hero-subtitle">
          Premium fashion and lifestyle products curated for the modern individual. Quality, style, and sustainability in every piece.
        </p>
        <div class="hero-actions">
          <button class="primary-button">Shop Collection</button>
          <button class="secondary-button">Explore Categories</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>👗</span>
        </div>
      </div>
    </div>
  </section>

  <section id="categories" class="categories">
    <div class="container">
      <h2 class="section-title">Shop by Category</h2>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-image">
            <span>👗</span>
          </div>
          <h3>Women's Fashion</h3>
          <p>Elegant dresses, tops, and accessories</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>👔</span>
          </div>
          <h3>Men's Collection</h3>
          <p>Contemporary men's wear and accessories</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>💍</span>
          </div>
          <h3>Jewelry & Accessories</h3>
          <p>Statement pieces and everyday essentials</p>
        </div>
        <div class="category-card">
          <div class="category-image">
            <span>🏠</span>
          </div>
          <h3>Home & Living</h3>
          <p>Beautiful home decor and lifestyle items</p>
        </div>
      </div>
    </div>
  </section>

  <section id="products" class="featured-products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Handpicked items from our latest collection</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👕</span>
            </div>
            <div class="product-badge">New</div>
          </div>
          <div class="product-info">
            <h3>Elegant Silk Blouse</h3>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(24 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$89.99</span>
              <span class="original-price">$129.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👜</span>
            </div>
            <div class="product-badge">Sale</div>
          </div>
          <div class="product-info">
            <h3>Designer Handbag</h3>
            <div class="product-rating">
              <span class="stars">★★★★☆</span>
              <span class="reviews">(18 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$199.99</span>
              <span class="original-price">$299.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>👠</span>
            </div>
          </div>
          <div class="product-info">
            <h3>Premium Leather Boots</h3>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="reviews">(32 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$249.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <div class="image-placeholder">
              <span>🕶️</span>
            </div>
          </div>
          <div class="product-info">
            <h3>Sunglasses Collection</h3>
            <div class="product-rating">
              <span class="stars">★★★★☆</span>
              <span class="reviews">(15 reviews)</span>
            </div>
            <div class="product-price">
              <span class="current-price">$79.99</span>
            </div>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay in Style</h2>
        <p>Subscribe to our newsletter for exclusive deals, new arrivals, and style inspiration.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">🛍️</span>
            StyleHub
          </div>
          <p>Your destination for premium fashion and lifestyle products.</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Shop</h4>
            <a href="#">Women's Fashion</a>
            <a href="#">Men's Collection</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">Size Guide</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Sustainability</a>
          </div>
          <div class="footer-column">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 StyleHub. All rights reserved.</p>
        <div class="payment-methods">
          <span>💳</span>
          <span>💳</span>
          <span>💳</span>
          <span>💳</span>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #7c3aed;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-btn, .account-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.search-btn:hover, .account-btn:hover {
  background: #f3f4f6;
}

.cart-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.cart-btn:hover {
  background: #f3f4f6;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.primary-button {
  background: white;
  color: #7c3aed;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.categories {
  padding: 6rem 0;
  background: #f8fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.category-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #6b7280;
}

.featured-products {
  padding: 6rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.product-image {
  position: relative;
  height: 250px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  color: #fbbf24;
  font-size: 0.875rem;
}

.reviews {
  color: #6b7280;
  font-size: 0.875rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #7c3aed;
}

.original-price {
  font-size: 1rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.add-to-cart-btn {
  width: 100%;
  background: #7c3aed;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #6d28d9;
}

.newsletter {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.newsletter-form button {
  background: white;
  color: #7c3aed;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7c3aed;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #7c3aed;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #7c3aed;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-methods {
  display: flex;
  gap: 0.5rem;
}

.payment-methods span {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .nav-links {
    display: none;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}`
    },
    'Admin Dashboards': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AdminPro - Dashboard</title>
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <span class="logo-icon">📊</span>
          AdminPro
        </div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3>Overview</h3>
          <a href="#" class="nav-link active">
            <span class="nav-icon">📈</span>
            Dashboard
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📊</span>
            Analytics
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📋</span>
            Reports
          </a>
        </div>
        <div class="nav-section">
          <h3>Management</h3>
          <a href="#" class="nav-link">
            <span class="nav-icon">👥</span>
            Users
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">📦</span>
            Products
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🛒</span>
            Orders
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">💬</span>
            Messages
          </a>
        </div>
        <div class="nav-section">
          <h3>Settings</h3>
          <a href="#" class="nav-link">
            <span class="nav-icon">⚙️</span>
            General
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🔒</span>
            Security
          </a>
          <a href="#" class="nav-link">
            <span class="nav-icon">🔔</span>
            Notifications
          </a>
        </div>
      </nav>
    </aside>

    <main class="main-content">
      <header class="top-bar">
        <div class="search-bar">
          <input type="text" placeholder="Search...">
          <button class="search-btn">🔍</button>
        </div>
        <div class="user-menu">
          <button class="notification-btn">
            <span class="notification-icon">🔔</span>
            <span class="notification-badge">3</span>
          </button>
          <div class="user-profile">
            <div class="user-avatar">👤</div>
            <span class="user-name">Admin User</span>
          </div>
        </div>
      </header>

      <div class="content">
        <div class="page-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your business today.</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-content">
              <h3>$45,231</h3>
              <p>Total Revenue</p>
              <span class="stat-change positive">+12.5%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-content">
              <h3>2,543</h3>
              <p>Total Users</p>
              <span class="stat-change positive">+8.2%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🛒</div>
            <div class="stat-content">
              <h3>1,234</h3>
              <p>Orders</p>
              <span class="stat-change positive">+15.3%</span>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-content">
              <h3>4.8</h3>
              <p>Average Rating</p>
              <span class="stat-change positive">+0.2</span>
            </div>
          </div>
        </div>

        <div class="charts-section">
          <div class="chart-card">
            <div class="chart-header">
              <h3>Revenue Overview</h3>
              <select>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div class="chart-placeholder">
              <div class="chart-bar" style="height: 40%"></div>
              <div class="chart-bar" style="height: 60%"></div>
              <div class="chart-bar" style="height: 80%"></div>
              <div class="chart-bar" style="height: 50%"></div>
              <div class="chart-bar" style="height: 70%"></div>
              <div class="chart-bar" style="height: 90%"></div>
              <div class="chart-bar" style="height: 65%"></div>
            </div>
          </div>
          <div class="chart-card">
            <div class="chart-header">
              <h3>Recent Activity</h3>
            </div>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">🛒</div>
                <div class="activity-content">
                  <p>New order from John Doe</p>
                  <span class="activity-time">2 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">👤</div>
                <div class="activity-content">
                  <p>New user registration</p>
                  <span class="activity-time">5 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">💬</div>
                <div class="activity-content">
                  <p>Support ticket resolved</p>
                  <span class="activity-time">10 minutes ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">📦</div>
                <div class="activity-content">
                  <p>Order #1234 shipped</p>
                  <span class="activity-time">15 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="recent-orders">
          <div class="section-header">
            <h3>Recent Orders</h3>
            <button class="view-all-btn">View All</button>
          </div>
          <div class="orders-table">
            <div class="table-header">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Product</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            <div class="table-row">
              <div>#12345</div>
              <div>John Doe</div>
              <div>Premium Plan</div>
              <div>$99.00</div>
              <div><span class="status completed">Completed</span></div>
            </div>
            <div class="table-row">
              <div>#12344</div>
              <div>Jane Smith</div>
              <div>Basic Plan</div>
              <div>$49.00</div>
              <div><span class="status pending">Pending</span></div>
            </div>
            <div class="table-row">
              <div>#12343</div>
              <div>Mike Johnson</div>
              <div>Pro Plan</div>
              <div>$149.00</div>
              <div><span class="status processing">Processing</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f8fafc;
  color: #1a1a1a;
  line-height: 1.6;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.sidebar-nav {
  flex: 1;
  padding: 2rem 0;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-section h3 {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 2rem;
  margin-bottom: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: #f3f4f6;
  color: #2563eb;
}

.nav-link.active {
  background: #eff6ff;
  color: #2563eb;
  border-right: 3px solid #2563eb;
}

.nav-icon {
  font-size: 1.125rem;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.top-bar {
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 400px;
}

.search-bar input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.search-bar input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.search-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #1d4ed8;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
}

.notification-btn:hover {
  background: #f3f4f6;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 600;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.user-name {
  font-weight: 500;
  color: #374151;
}

.content {
  padding: 2rem;
  flex: 1;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #6b7280;
  font-size: 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.stat-content h3 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.stat-content p {
  color: #6b7280;
  font-size: 0.875rem;
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.stat-change.positive {
  color: #10b981;
}

.charts-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.chart-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chart-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.chart-header select {
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #374151;
}

.chart-placeholder {
  height: 200px;
  padding: 1.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 0.5rem;
}

.chart-bar {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0.25rem 0.25rem 0 0;
  flex: 1;
  min-height: 20px;
  transition: height 0.3s ease;
}

.activity-list {
  padding: 1.5rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 32px;
  height: 32px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.activity-content p {
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.25rem;
}

.activity-time {
  font-size: 0.75rem;
  color: #9ca3af;
}

.recent-orders {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.section-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.view-all-btn {
  background: transparent;
  color: #2563eb;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
}

.orders-table {
  padding: 0;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
}

.table-row:last-child {
  border-bottom: none;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
}

.status.completed {
  background: #dcfce7;
  color: #166534;
}

.status.pending {
  background: #fef3c7;
  color: #92400e;
}

.status.processing {
  background: #dbeafe;
  color: #1e40af;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
  }

  .top-bar {
    padding: 1rem;
  }

  .search-bar {
    max-width: none;
  }

  .content {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .table-row {
    text-align: center;
  }
}`
    },
    'Blog Layouts': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Blog - Insights & Stories</title>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">✍️</span>
        Modern Blog
      </div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button class="subscribe-btn">Subscribe</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-meta">
          <span class="featured-badge">Featured</span>
          <span class="reading-time">5 min read</span>
        </div>
        <h1 class="hero-title">
          The Future of Web<br>
          <span class="highlight">Development</span>
        </h1>
        <p class="hero-subtitle">
          Exploring the latest trends, technologies, and best practices shaping the digital landscape. Join us on this journey of innovation and discovery.
        </p>
        <div class="hero-author">
          <div class="author-avatar">👨‍💻</div>
          <div class="author-info">
            <span class="author-name">Alex Chen</span>
            <span class="publish-date">December 15, 2024</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <span>💻</span>
        </div>
      </div>
    </div>
  </section>

  <section class="featured-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Latest Articles</h2>
        <p class="section-subtitle">Stay updated with our latest insights and stories</p>
      </div>
      <div class="posts-grid">
        <article class="post-card featured">
          <div class="post-image">
            <div class="image-placeholder">
              <span>🚀</span>
            </div>
            <div class="post-category">Technology</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">7 min read</span>
              <span class="publish-date">Dec 12, 2024</span>
            </div>
            <h3>Building Scalable React Applications</h3>
            <p>Learn how to structure your React applications for growth and maintainability with modern patterns and best practices.</p>
            <div class="post-author">
              <div class="author-avatar">👩‍💻</div>
              <span class="author-name">Sarah Johnson</span>
            </div>
          </div>
        </article>
        <article class="post-card">
          <div class="post-image">
            <div class="image-placeholder">
              <span>🎨</span>
            </div>
            <div class="post-category">Design</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">4 min read</span>
              <span class="publish-date">Dec 10, 2024</span>
            </div>
            <h3>The Art of Minimalist UI Design</h3>
            <p>Discover how less can be more in user interface design and how to create clean, effective designs.</p>
            <div class="post-author">
              <div class="author-avatar">🎨</div>
              <span class="author-name">Mike Davis</span>
            </div>
          </div>
        </article>
        <article class="post-card">
          <div class="post-image">
            <div class="image-placeholder">
              <span>📊</span>
            </div>
            <div class="post-category">Business</div>
          </div>
          <div class="post-content">
            <div class="post-meta">
              <span class="reading-time">6 min read</span>
              <span class="publish-date">Dec 8, 2024</span>
            </div>
            <h3>Digital Transformation Strategies</h3>
            <p>Navigate the complexities of digital transformation with proven strategies and real-world examples.</p>
            <div class="post-author">
              <div class="author-avatar">💼</div>
              <span class="author-name">Emma Wilson</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <h2>Stay in the Loop</h2>
        <p>Get the latest articles and insights delivered straight to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address">
          <button type="submit">Subscribe</button>
        </div>
        <p class="newsletter-note">No spam, unsubscribe at any time.</p>
      </div>
    </div>
  </section>

  <section class="categories">
    <div class="container">
      <h2 class="section-title">Explore Topics</h2>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-icon">💻</div>
          <h3>Technology</h3>
          <p>Latest in tech and development</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🎨</div>
          <h3>Design</h3>
          <p>UI/UX and creative insights</p>
        </div>
        <div class="category-card">
          <div class="category-icon">📈</div>
          <h3>Business</h3>
          <p>Strategy and growth tips</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🚀</div>
          <h3>Innovation</h3>
          <p>Cutting-edge trends and ideas</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-icon">✍️</span>
            Modern Blog
          </div>
          <p>Sharing insights, stories, and knowledge about the digital world.</p>
          <div class="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Content</h4>
            <a href="#">Articles</a>
            <a href="#">Guides</a>
            <a href="#">Tutorials</a>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <a href="#">Newsletter</a>
            <a href="#">RSS Feed</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Modern Blog. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #2563eb;
}

.subscribe-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #1d4ed8;
}

.hero {
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.featured-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.reading-time {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(45deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  backdrop-filter: blur(10px);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: white;
}

.publish-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.featured-posts {
  padding: 6rem 0;
  background: #f8fafc;
}

.posts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.post-card.featured {
  grid-column: span 2;
}

.post-image {
  position: relative;
  height: 200px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.post-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #2563eb;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.post-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.post-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.post-author .author-avatar {
  width: 32px;
  height: 32px;
  background: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.post-author .author-name {
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
}

.newsletter {
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.newsletter-form button {
  background: white;
  color: #2563eb;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.newsletter-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
}

.categories {
  padding: 6rem 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, background 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #6b7280;
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #2563eb;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.footer-column a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #2563eb;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .post-card.featured {
    grid-column: span 1;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .nav-links {
    display: none;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}`
    }
  };

  const categories = [
    { name: 'Portfolios', icon: '🧑‍🎨' },
    { name: 'SaaS Landing Pages', icon: '🚀' },
    { name: 'Restaurant Sites', icon: '🍽️' },
    { name: 'E-Commerce Stores', icon: '🛍️' },
    { name: 'Admin Dashboards', icon: '📊' },
    { name: 'Blog Layouts', icon: '✍️' },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [inputValue]);

  const handleSelectTemplate = (categoryName: string) => {
    const template = templates[categoryName as keyof typeof templates];
    if (template) {
      setSelectedTemplate({ html: template.html, css: template.css, js: '' });
      setActiveProject(categoryName);
    }
  };

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      role: 'user',
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages,
          currentTemplate: activeProject,
          currentCode: {
            html: editorCode.html,
            css: editorCode.css,
            js: editorCode.js,
          },
        }),
      });

      const data = await response.json();
      const assistantReply = response.ok && typeof data?.text === 'string'
        ? data.text
        : 'Sorry, I could not retrieve a response from the API.';

      // Extract code blocks from the AI reply and persist them
      const extractAndSaveCode = (replyText: string) => {
        const htmlRegex = /```html\s*([\s\S]*?)```/;
        const cssRegex = /```css\s*([\s\S]*?)```/;
        const jsRegex = /```javascript\s*([\s\S]*?)```/;

        const htmlMatch = htmlRegex.exec(replyText);
        const cssMatch = cssRegex.exec(replyText);
        const jsMatch = jsRegex.exec(replyText);

        if (htmlMatch) {
          localStorage.setItem('devstudio_html', htmlMatch[1].trim());
        }
        if (cssMatch) {
          localStorage.setItem('devstudio_css', cssMatch[1].trim());
        }
        if (jsMatch) {
          localStorage.setItem('devstudio_js', jsMatch[1].trim());
        }

        // Notify other components in the same tab about the update
        window.dispatchEvent(new CustomEvent('devstudio-sync', {
          detail: { html: htmlMatch?.[1]?.trim(), css: cssMatch?.[1]?.trim(), js: jsMatch?.[1]?.trim() }
        }));
      };
      extractAndSaveCode(assistantReply);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantReply,
        },
      ]);
    } catch (error) {
      console.error('Chat API error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I could not reach the chat service. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const [editorCode, setEditorCode] = useState({
    html: '',
    css: '',
    js: '',
  });
  const [codeTab, setCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [outputHtml, setOutputHtml] = useState('');
  const [autoRun, setAutoRun] = useState(false);
  const autoRunRef = useRef(false);
  const editorCodeRef = useRef(editorCode);
  const autoRunTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep refs in sync with state
  useEffect(() => { autoRunRef.current = autoRun; }, [autoRun]);
  useEffect(() => { editorCodeRef.current = editorCode; }, [editorCode]);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRun = (html?: string, css?: string, js?: string) => {
    const h = html ?? '';
    const c = css ?? '';
    const j = js ?? '';
    const combined = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${c}</style></head><body>${h}<script>${j}</script></body></html>`;
    setOutputHtml(combined);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = combined;
    }
  };

  // Auto-run with debounce when user types in the editor
  useEffect(() => {
    if (!autoRunRef.current) return;
    if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
    autoRunTimerRef.current = setTimeout(() => {
      handleRun(editorCode.html, editorCode.css, editorCode.js);
    }, 500);
    return () => {
      if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorCode]);

  // Load template code into editor when a project is selected
  useEffect(() => {
    if (activeProject) {
      const template = templates[activeProject as keyof typeof templates];
      if (template) {
        setEditorCode({ html: template.html, css: template.css, js: '' });
        handleRun(template.html, template.css, '');
      }
    }
  }, [activeProject]);

  // Listen for AI synced code and auto-run if enabled
  useEffect(() => {
    const handleSyncEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      const detailHtml = customEvent.detail?.html;
      const detailCss = customEvent.detail?.css;
      const detailJs = customEvent.detail?.js;

      setEditorCode((prev) => ({
        html: detailHtml ?? prev.html,
        css: detailCss ?? prev.css,
        js: detailJs ?? prev.js,
      }));

      // Use refs to avoid stale closures
      if (autoRunRef.current) {
        const curHtml = detailHtml ?? editorCodeRef.current.html;
        const curCss = detailCss ?? editorCodeRef.current.css;
        const curJs = detailJs ?? editorCodeRef.current.js;
        handleRun(curHtml, curCss, curJs);
      }
    };

    window.addEventListener('devstudio-sync', handleSyncEvent);
    return () => window.removeEventListener('devstudio-sync', handleSyncEvent);
  }, []);

  const handleExport = async () => {
    const ZipModule = await import('jszip');
    const JSZip = ZipModule.default;
    const zip = new JSZip();

    const htmlContent = editorCode.html || '';
    const cssContent = editorCode.css || '';
    const jsContent = editorCode.js || '';

    let indexHtml: string;

    // Detect if htmlContent is already a full document (from templates) or just a body snippet
    if (/^<!DOCTYPE/i.test(htmlContent.trim()) || /^<html/i.test(htmlContent.trim())) {
      // Already a full document — ensure it has proper external file links
      indexHtml = htmlContent;
      
      // Ensure CSS link is present if we have CSS content
      if (cssContent && !/<link[^>]*href\s*=\s*["']styles\.css["'][^>]*>/i.test(indexHtml)) {
        indexHtml = indexHtml.replace(
          /<\/head>/i,
          '  <link rel="stylesheet" href="styles.css">\n</head>'
        );
      }
      
      // Ensure JS script tag is present if we have JS content
      if (jsContent && !/<script[^>]*src\s*=\s*["']script\.js["'][^>]*>/i.test(indexHtml)) {
        indexHtml = indexHtml.replace(
          /<\/body>/i,
          '<script src="script.js" defer></script>\n</body>'
        );
      }
    } else {
      // Body-only snippet — wrap in proper boilerplate with external file links
      indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${activeProject || 'DevStudio Project'}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
${htmlContent}
<script src="script.js" defer></script>
</body>
</html>`;
    }

    console.log('🔧 DevStudio Export - Final HTML:', indexHtml);

    zip.file('index.html', indexHtml);
    zip.file('styles.css', cssContent);
    zip.file('script.js', jsContent);

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'devstudio-project.zip');
  };

  const handleReset = () => {
    const confirmed = window.confirm('Are you sure? This will wipe your current progress.');
    if (!confirmed) return;

    // Clear state
    setActiveProject(null);
    setEditorCode({ html: '', css: '', js: '' });
    setMessages([...INITIAL_MESSAGES]);
    setInputValue('');

    // Clear localStorage
    localStorage.removeItem('devstudio_html');
    localStorage.removeItem('devstudio_css');
    localStorage.removeItem('devstudio_js');
  };

  const headerIcons = ['🔔', '👤', '⚙️'];

  const renderChatPanel = () => (
    <div className="h-full flex flex-col bg-slate-900/50 chat-panel">
      <style>{`
        .chat-panel .chat-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #334155 transparent;
        }
        .chat-panel .chat-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .chat-panel .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-panel .chat-scrollbar::-webkit-scrollbar-thumb {
          background-color: #334155;
          border-radius: 3px;
        }
      `}</style>
      <div className="px-5 py-4 border-b border-slate-800 flex-shrink-0">
        <h2 className="text-lg font-semibold text-white">Web Maker AI</h2>
        <p className="text-sm text-slate-400 mt-0.5">Chat with our assistant</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 space-y-4 chat-scrollbar" style={{ paddingTop: '1rem', paddingBottom: 0 }}>
        {messages.map((message, index) => {
          const isUser = message.role === 'user';
          // Strip code blocks from display text so the chat bubble stays clean
          const displayContent = message.content
            .replace(/```html[\s\S]*?```/g, '')
            .replace(/```css[\s\S]*?```/g, '')
            .replace(/```javascript[\s\S]*?```/g, '')
            .replace(/```[\s\S]*?```/g, '')
            .trim();
          return (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-br-[6px] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl'
                    : 'bg-slate-800 text-slate-200 rounded-bl-[6px] rounded-br-3xl rounded-tr-3xl rounded-tl-3xl border border-slate-700'
                }`}
              >
                <div className={isUser ? 'text-white' : 'text-slate-200'}>
                  <ReactMarkdown>{displayContent || '*(Code update — check the editor)*'}</ReactMarkdown>
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-3xl bg-slate-800 text-slate-200 border border-slate-700 px-4 py-3 text-sm leading-6 animate-pulse">
              DevStudio is thinking...
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <form className="px-5 py-4 border-t border-slate-800 flex-shrink-0" onSubmit={handleSendMessage}>
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(event) => {
              const textarea = event.currentTarget;
              setInputValue(textarea.value);
              textarea.style.height = 'auto';
              textarea.style.height = `${textarea.scrollHeight}px`;
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="Describe a website to build..."
            disabled={isLoading}
            className="flex-1 bg-slate-800 text-white placeholder:text-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-70 resize-none max-h-[200px] overflow-y-auto"
            rows={1}
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-300 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 font-semibold text-sm transition"
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderCodePanel = () => {
    const tabs: { id: 'html' | 'css' | 'js'; label: string; monacoLang: string }[] = [
      { id: 'html', label: 'index.html', monacoLang: 'html' },
      { id: 'css', label: 'styles.css', monacoLang: 'css' },
      { id: 'js', label: 'script.js', monacoLang: 'javascript' },
    ];
    const activeTab = tabs.find((t) => t.id === codeTab)!;
    return (
      <div className="h-full flex flex-col">
        <div className="flex w-full items-center border-b border-slate-800 bg-slate-900/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCodeTab(tab.id)}
              className={`flex-1 py-2 text-center text-xs font-medium transition-colors border-r border-slate-800 last:border-r-0 ${
                codeTab === tab.id
                  ? 'text-blue-400 bg-slate-800/70 border-b-2 border-b-blue-500'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-hidden">
          <Editor
            language={activeTab.monacoLang}
            value={editorCode[codeTab]}
            onChange={(value) => {
              if (value !== undefined) {
                setEditorCode((prev) => ({ ...prev, [codeTab]: value }));
              }
            }}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'Fira Code, Menlo, Monaco, monospace',
              tabSize: 2,
              wordWrap: 'on',
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
    );
  };

  const renderOutputPanel = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center px-4 py-2 border-b border-slate-800 bg-slate-900/50">
        <span className="text-sm font-medium text-slate-300">Output</span>
      </div>
      <div className="flex-1 bg-[#1e1e1e]">
        <iframe
          ref={iframeRef}
          srcDoc={outputHtml || '<html><body><div style="color:#64748b;padding:20px;font-family:monospace;">// Click Run to preview...</div></body></html>'}
          className="w-full h-full border-0"
          title="Preview"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-3 flex items-center justify-between gap-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <img src="/DevStudio-Logo.png" alt="DevStudio" className="w-8 h-8 object-contain object-center" />
          <span className="font-semibold text-white text-lg">DevStudio</span>
        </button>

        {activeProject ? (
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoRun}
                onChange={(e) => setAutoRun(e.target.checked)}
                className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
              />
              Auto-run
            </label>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-red-700/30 text-slate-300 hover:text-red-400 text-sm transition border border-slate-700/50 hover:border-red-700/50"
              title="Reset project and clear progress"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-xs">Reset</span>
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition border border-slate-700/50"
              title="Export project as ZIP"
            >
              <Download className="w-4 h-4" />
              <span className="text-xs">Export</span>
            </button>
            <button
              onClick={() => handleRun(editorCode.html, editorCode.css, editorCode.js)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition shadow-lg"
            >
              <Play className="w-4 h-4" />
              Run
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {headerIcons.map((icon, index) => (
              <button
                key={index}
                type="button"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 transition border border-slate-700/50 flex items-center justify-center text-base"
              >
                {icon}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Resizable Panel Layout */}
      {activeProject ? (
        <PanelGroup direction="horizontal" className="flex-1 overflow-hidden">
          {/* Panel 1: Chat (25%, collapsible) */}
          <Panel defaultSize={25} minSize={5} collapsible>
            {renderChatPanel()}
          </Panel>
          <PanelResizeHandle className="w-1.5 bg-slate-800 hover:bg-blue-500 transition-colors duration-150 cursor-col-resize" />

          {/* Panel 2: Code Editor (35%) */}
          <Panel defaultSize={35} minSize={10}>
            {renderCodePanel()}
          </Panel>
          <PanelResizeHandle className="w-1.5 bg-slate-800 hover:bg-blue-500 transition-colors duration-150 cursor-col-resize" />

          {/* Panel 3: Output Preview (40%) */}
          <Panel defaultSize={40} minSize={10}>
            {renderOutputPanel()}
          </Panel>
        </PanelGroup>
      ) : (
        <div className="flex-1 overflow-y-auto py-10 px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">AI Web Maker</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Build your next website concept in seconds.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg">
              Pick a starting point and let our AI builder help you imagine the perfect layout.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => handleSelectTemplate(category.name)}
                className="group text-left rounded-3xl border border-slate-800 bg-slate-900/90 p-4 transition duration-200 hover:border-blue-500/60 hover:bg-slate-800 shadow-sm shadow-black/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{category.icon}</span>
                  <h2 className="text-lg font-semibold text-white">{category.name}</h2>
                </div>
                <p className="text-slate-400">
                  Start with a polished, modern base that matches the needs of your next web project.
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}