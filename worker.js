export default {
  async fetch(request, env) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeByJ - App Portfolio</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff; color: #1a1a1a; }
    @media (prefers-color-scheme: dark) { body { background: #1a1a1a; color: #ffffff; } }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    h1 { font-size: 3.5rem; font-weight: 500; margin-bottom: 1rem; }
    h2 { font-size: 2rem; font-weight: 500; margin-bottom: 3rem; }
    h3 { font-size: 1.75rem; font-weight: 500; }
    h4 { font-size: 1.1rem; font-weight: 500; margin-bottom: 1rem; }
    header { padding: 4rem 1.5rem; text-align: center; border-bottom: 1px solid #e0e0e0; }
    @media (prefers-color-scheme: dark) { header { border-color: #333; } }
    .logo { max-width: 300px; margin-bottom: 2rem; }
    .subtitle { font-size: 1.25rem; color: #666; margin-bottom: 2rem; }
    @media (prefers-color-scheme: dark) { .subtitle { color: #aaa; } }
    .cta-button { display: inline-block; padding: 0.75rem 1.5rem; background: #FF6B35; color: #fff; border-radius: 12px; text-decoration: none; font-weight: 500; border: none; cursor: pointer; }
    .cta-button:hover { background: #e55a2a; }
    #apps { padding: 4rem 1.5rem; }
    .app-card { border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; margin-bottom: 2rem; }
    @media (prefers-color-scheme: dark) { .app-card { border-color: #333; } }
    .app-header { padding: 2rem 1.5rem; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; display: flex; gap: 2rem; align-items: flex-start; }
    @media (prefers-color-scheme: dark) { .app-header { background: #222; border-color: #333; } }
    .app-icon { flex-shrink: 0; width: 120px; height: 120px; border-radius: 24px; overflow: hidden; border: 2px solid #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .app-icon img { width: 100%; height: 100%; object-fit: cover; }
    .app-info { flex: 1; }
    .app-header p { color: #666; margin-bottom: 1rem; }
    @media (prefers-color-scheme: dark) { .app-header p { color: #aaa; } }
    .screenshots { padding: 1.5rem; background: #fafafa; border-bottom: 1px solid #e0e0e0; }
    @media (prefers-color-scheme: dark) { .screenshots { background: #1a1a1a; border-color: #333; } }
    .screenshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
    .screenshot { background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0; height: 200px; }
    @media (prefers-color-scheme: dark) { .screenshot { background: #222; border-color: #333; } }
    .screenshot img { width: 100%; height: 100%; object-fit: cover; }
    .features { padding: 2rem 1.5rem; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
    .feature { display: flex; gap: 0.75rem; padding: 0.75rem; background: #fafafa; border-radius: 8px; }
    @media (prefers-color-scheme: dark) { .feature { background: #222; } }
    .feature-check { font-size: 1.2rem; flex-shrink: 0; color: #FF6B35; }
    .feature span { font-size: 0.95rem; }
    .cta-section { padding: 2rem 1.5rem; border-top: 1px solid #e0e0e0; display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    @media (prefers-color-scheme: dark) { .cta-section { border-color: #333; } }
    .status-badge { display: inline-block; padding: 0.5rem 1rem; background: #fafafa; border-radius: 8px; font-size: 0.9rem; color: #666; }
    @media (prefers-color-scheme: dark) { .status-badge { background: #222; color: #aaa; } }
    footer { padding: 3rem 1.5rem; border-top: 1px solid #e0e0e0; text-align: center; background: #fafafa; }
    @media (prefers-color-scheme: dark) { footer { border-color: #333; background: #1a1a1a; } }
    footer p { color: #666; margin-bottom: 1.5rem; }
    @media (prefers-color-scheme: dark) { footer p { color: #aaa; } }
    .footer-links { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; font-size: 0.95rem; }
    .footer-links a { color: #666; text-decoration: none; }
    @media (prefers-color-scheme: dark) { .footer-links a { color: #aaa; } }
    .footer-links a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/codebyj_logo.png" alt="CodeByJ" class="logo">
      <h1>CodeByJ</h1>
      <p class="subtitle">Innovative health tech apps designed to empower your wellness journey</p>
      <a href="#apps" class="cta-button">Explore Apps</a>
    </div>
  </header>

  <section id="apps" class="container">
    <h2>Featured Apps</h2>

    <div class="app-card">
      <div class="app-header">
        <div class="app-icon">
          <img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/AppIcon.png" alt="MyPepDoc">
        </div>
        <div class="app-info">
          <h3>MyPepDoc</h3>
          <p><strong>Your personal peptide tracking app with AI doctors</strong></p>
          <p>Choose Dr. Lexi or Dr. Rax as your guide. They know your peptide, your dose, your schedule, and your cycle day.</p>
        </div>
      </div>

      <div class="screenshots">
        <div class="screenshot-grid">
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/MeetDoc.png" alt="MyPepDoc - Meet your doctor"></div>
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/Setup.png" alt="MyPepDoc - Smart setup"></div>
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/Track.png" alt="MyPepDoc - Track doses"></div>
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/Library.png" alt="MyPepDoc - Peptide library"></div>
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/AskDoc.png" alt="MyPepDoc - Ask doctor"></div>
          <div class="screenshot"><img src="https://raw.githubusercontent.com/jfliesit/codebyj-portfolio/main/Calendar.png" alt="MyPepDoc - Calendar"></div>
        </div>
      </div>

      <div class="features">
        <h4>Key Features</h4>
        <ul class="feature-grid" style="list-style: none;">
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>AI Doctor Chat</strong> - Protocol-aware answers about dosing, timing, side effects</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Smart Dose Calculator</strong> - Auto-calculates concentration and injection volume</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Blend Support</strong> - Handles multi-peptide combinations with anchor-based dosing</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>40+ Peptide Database</strong> - Detailed research on every peptide</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Protocol Tracking</strong> - Track adherence, streaks, and weekly summaries</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Calendar View</strong> - Color-coded monthly schedule at a glance</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Flexible Scheduling</strong> - Adapt to any protocol structure</span>
          </li>
          <li class="feature">
            <span class="feature-check">✓</span>
            <span><strong>Guided Setup</strong> - Conversational onboarding, not forms</span>
          </li>
        </ul>
      </div>

      <div class="cta-section">
        <span class="status-badge">Status: In Review</span>
        <button class="cta-button" onclick="window.open('https://apps.apple.com', '_blank')">Download on App Store</button>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2026 CodeByJ. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=0' } });
  }
};
