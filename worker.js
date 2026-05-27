// worker.js - CodeByJ Portfolio with SVG Logo
export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeByJ - Creating Functional Apps, Fast</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fff;
    }
    body.dark-mode {
      background: #0a0a0a;
      color: #f0f0f0;
    }
    
    header {
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
      padding: 2rem 1.5rem;
      text-align: center;
    }
    body.dark-mode header {
      background: #1a1a1a;
      border-bottom-color: #333;
    }
    
    header svg {
      max-width: 300px;
      height: auto;
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 1.5rem;
    }
    body.dark-mode .subtitle {
      color: #aaa;
    }
    
    .cta-button {
      display: inline-block;
      background: #FF6B35;
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }
    .cta-button:hover {
      background: #e55a2b;
    }
    
    main {
      max-width: 900px;
      margin: 3rem auto;
      padding: 0 1.5rem;
    }
    
    .app-card {
      background: #f9f9f9;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
    }
    body.dark-mode .app-card {
      background: #1a1a1a;
    }
    
    .app-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .app-icon {
      width: 80px;
      height: 80px;
      border-radius: 12px;
      flex-shrink: 0;
    }
    
    .app-info h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .app-tagline {
      color: #666;
      margin-bottom: 0.5rem;
    }
    body.dark-mode .app-tagline {
      color: #aaa;
    }
    
    .status-badge {
      display: inline-block;
      background: #FF6B35;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .screenshots {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .screenshot {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    body.dark-mode .screenshot {
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    
    .screenshot img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .feature {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }
    body.dark-mode .feature {
      background: #0a0a0a;
    }
    
    .feature-check {
      color: #FF6B35;
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .feature-title {
      font-size: 0.9rem;
      font-weight: 600;
    }
    
    .app-store-button {
      display: inline-block;
      background: #000;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 1.5rem;
      transition: background 0.3s;
    }
    .app-store-button:hover {
      background: #333;
    }
    
    footer {
      text-align: center;
      padding: 2rem;
      color: #999;
      border-top: 1px solid #e0e0e0;
      margin-top: 3rem;
    }
    body.dark-mode footer {
      border-top-color: #333;
      color: #666;
    }
    
    h1 { display: none; }
  </style>
</head>
<body>
  <header>
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Code brackets -->
      <path d="M28 39 L18 49 L28 59" fill="none" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M56 39 L66 49 L56 59" fill="none" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M47 36 L38 62" fill="none" stroke="#2c3e50" stroke-width="5" stroke-linecap="round"/>
      <!-- Text -->
      <text x="85" y="55" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#2c3e50">Codeby</text>
      <text x="235" y="55" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#FF6B35">J</text>
      <!-- Underline swoosh -->
      <path d="M85 68 Q185 70 270 65" fill="none" stroke="#FF6B35" stroke-width="3" stroke-linecap="round"/>
    </svg>
    <p class="subtitle">Creating functional apps, fast</p>
    <a href="#apps" class="cta-button">Explore Apps</a>
  </header>

  <main>
    <section class="app-card">
      <div class="app-header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="MyPepDoc Icon" class="app-icon">
        <div class="app-info">
          <h2>MyPepDoc</h2>
          <p class="app-tagline">Your personal peptide tracking app with AI doctors</p>
          <span class="status-badge">In Review</span>
        </div>
      </div>

      <p><strong>AI Doctors:</strong> Dr. Lexi (Sports Medicine) & Dr. Rax (Performance Medicine)</p>

      <div class="screenshots">
        <div class="screenshot"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Setup"></div>
        <div class="screenshot"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Track"></div>
        <div class="screenshot"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Library"></div>
        <div class="screenshot"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Chat"></div>
        <div class="screenshot"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="Calendar"></div>
      </div>

      <div class="features">
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">AI Doctor Chat</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Smart Dose Calculator</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Blend Support</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">40+ Peptide Database</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Protocol Tracking</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Calendar View</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Flexible Scheduling</span></div>
        <div class="feature"><span class="feature-check">✓</span><span class="feature-title">Guided Setup</span></div>
      </div>

      <div>
        <a href="https://apps.apple.com/us/app/mypepdoc/id6738392847" class="app-store-button">View on App Store</a>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2026 CodeByJ. All rights reserved.</p>
  </footer>

  <script>
    // Dark mode detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }
};
