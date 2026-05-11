import { FormEvent, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function AIWebMaker() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Welcome to Web Maker! Describe the website you want to build, or pick a starting point from the templates.',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasLastProject, setHasLastProject] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  
  const templates = {
    'Portfolios': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Welcome to my portfolio!</p>
    </section>
    <section id="projects">
      <h2>My Projects</h2>
      <p>Check out my recent work.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

section {
  margin: 3rem 0;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
}`
    },
    'SaaS Landing Pages': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS Landing Page</title>
</head>
<body>
  <header>
    <nav>
      <div class="logo">MyApp</div>
      <button>Sign In</button>
    </nav>
  </header>
  <section class="hero">
    <h1>The Future of Productivity</h1>
    <p>Streamline your workflow with our powerful SaaS platform.</p>
    <button class="cta">Start Free Trial</button>
  </section>
  <section class="features">
    <h2>Features</h2>
    <div class="feature-grid">
      <div class="feature">
        <h3>Fast</h3>
        <p>Lightning-quick performance</p>
      </div>
      <div class="feature">
        <h3>Secure</h3>
        <p>Enterprise-grade security</p>
      </div>
      <div class="feature">
        <h3>Scalable</h3>
        <p>Grows with your business</p>
      </div>
    </div>
  </section>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

header {
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta {
  background: white;
  color: #667eea;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
}

.features {
  padding: 3rem 2rem;
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}`
    },
    'Restaurant Sites': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurant</title>
</head>
<body>
  <header>
    <h1>🍽️ The Gourmet Table</h1>
  </header>
  <nav>
    <a href="#menu">Menu</a>
    <a href="#reservations">Reservations</a>
    <a href="#contact">Contact</a>
  </nav>
  <section class="hero">
    <h2>Welcome to Fine Dining</h2>
  </section>
  <section id="menu">
    <h2>Our Menu</h2>
    <div class="menu-item">
      <h3>Signature Dish</h3>
      <p>Our most popular creation</p>
      <span>$28</span>
    </div>
  </section>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', serif;
  color: #2c2c2c;
  background: #faf8f3;
}

header {
  background: #8b4513;
  color: white;
  text-align: center;
  padding: 2rem;
}

nav {
  background: #d4a574;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect fill="%238b4513" width="1200" height="400"/></svg>');
  color: white;
  text-align: center;
  padding: 5rem 2rem;
}

.menu-item {
  background: white;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.menu-item span {
  color: #8b4513;
  font-weight: bold;
}`
    },
    'E-Commerce Stores': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop</title>
</head>
<body>
  <header>
    <h1>MyStore</h1>
    <div class="cart-icon">🛒</div>
  </header>
  <nav>
    <a href="#products">Products</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
  <section id="products">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <div class="product">
        <img src="#" alt="Product">
        <h3>Product 1</h3>
        <p class="price">$19.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: white;
}

header {
  background: #222;
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  background: #333;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
}

.product button {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}`
    },
    'Admin Dashboards': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
</head>
<body>
  <div class="container">
    <aside>
      <h2>Admin</h2>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </aside>
    <main>
      <header>
        <h1>Dashboard</h1>
        <div class="user-menu">👤</div>
      </header>
      <section class="content">
        <div class="card">
          <h3>Total Users</h3>
          <p class="stat">1,234</p>
        </div>
      </section>
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
}

.container {
  display: flex;
  height: 100vh;
}

aside {
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 2rem;
}

aside ul {
  list-style: none;
  margin-top: 2rem;
}

aside li {
  margin: 1rem 0;
}

aside a {
  color: white;
  text-decoration: none;
}

main {
  flex: 1;
  overflow-y: auto;
}

header {
  background: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card {
  background: white;
  padding: 2rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat {
  font-size: 2rem;
  color: #3498db;
  margin-top: 1rem;
}`
    },
    'Blog Layouts': {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog</title>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <p>Thoughts and stories</p>
  </header>
  <main>
    <article class="post">
      <h2>First Post</h2>
      <p class="meta">Published on January 1, 2024</p>
      <p>Welcome to my blog! Here I share my thoughts on web development and design.</p>
      <a href="#" class="read-more">Read More</a>
    </article>
  </main>
  <footer>
    <p>&copy; 2024 My Blog</p>
  </footer>
</body>
</html>`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', serif;
  background: white;
  color: #333;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 3rem 2rem;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.post {
  background: #f9f9f9;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.meta {
  color: #999;
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
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
    const savedHtml = localStorage.getItem('devstudio_html');
    setHasLastProject(!!savedHtml);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSelectTemplate = (categoryName: string) => {
    const template = templates[categoryName as keyof typeof templates];
    if (template) {
      localStorage.setItem('devstudio_html', template.html);
      localStorage.setItem('devstudio_css', template.css);
      navigate('/compiler');
    }
  };

  const handleContinueProject = () => {
    navigate('/compiler');
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
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();
      const assistantReply = response.ok && typeof data?.text === 'string'
        ? data.text
        : 'Sorry, I could not retrieve a response from the API.';

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


  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-3 flex items-center justify-between gap-6">
        {/* Left Side: Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <img src="/DevStudio-Logo.png" alt="DevStudio" className="w-8 h-8 object-contain object-center" />
          <span className="font-semibold text-white text-lg">DevStudio</span>
        </button>

        {/* Right Side: Icons and Publish Button */}
        <div className="flex items-center gap-4">
          {['🔔', '👤', '⚙️'].map((icon, index) => (
            <button
              key={index}
              type="button"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 transition border border-slate-700/50 flex items-center justify-center text-base"
            >
              {icon}
            </button>
          ))}

          <button className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold text-white transition shadow-lg shadow-blue-500/20">
            Publish
          </button>
        </div>
      </header>

      {/* Main Content Area: Two-Column Layout */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Chat Sidebar */}
        <div className="w-full lg:w-80 min-h-0 max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-4rem)] border-b border-slate-800 lg:border-b-0 lg:border-r bg-slate-900/50 flex flex-col order-2 lg:order-1 overflow-hidden">
          <div className="px-5 py-5 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-white">Web Maker AI</h2>
            <p className="text-sm text-slate-400 mt-1">Chat with our assistant</p>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-4">
            {messages.map((message, index) => {
              const isUser = message.role === 'user';
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
                      <ReactMarkdown>{message.content}</ReactMarkdown>
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

          <form className="px-5 py-5 border-t border-slate-800" onSubmit={handleSendMessage}>
            <div className="flex gap-2 items-center">
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                type="text"
                placeholder="Describe a website to build..."
                disabled={isLoading}
                className="flex-1 bg-slate-800 text-white placeholder:text-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
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

        {/* Right Column: Main Content */}
        <div className="flex-1 min-h-0 py-8 px-4 md:overflow-auto order-1 lg:order-2">
          <div className="max-w-4xl mx-auto text-center lg:h-full flex flex-col items-center lg:justify-center gap-4">
            <div className="mb-4 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">AI Web Maker</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Build your next website concept in seconds.
              </h1>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                Pick a starting point and let our future UI builder help you imagine the perfect layout.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 max-w-4xl w-full">
              {hasLastProject && (
                <div className="sm:col-span-2 xl:col-span-3 bg-blue-600 text-white p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">You have a saved project!</p>
                    <p className="text-sm">Continue working on your last design.</p>
                  </div>
                  <button
                    onClick={handleContinueProject}
                    className="bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-blue-50 transition"
                  >
                    Continue
                  </button>
                </div>
              )}
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
        </div>
      </div>
    </div>
  );
}
