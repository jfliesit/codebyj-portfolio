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
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #fff; color: #1a1a1a; }
    @media (prefers-color-scheme: dark) { body { background: #1a1a1a; color: #fff; } }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    h2 { font-size: 2rem; font-weight: 500; margin-bottom: 3rem; }
    h3 { font-size: 1.75rem; font-weight: 500; }
    h4 { font-size: 1.1rem; font-weight: 500; margin-bottom: 1rem; }
    header { padding: 4rem 1.5rem; text-align: center; border-bottom: 1px solid #e0e0e0; }
    @media (prefers-color-scheme: dark) { header { border-color: #333; } }
    .logo { max-width: 400px; margin: 0 auto 2rem; display: block; }
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
    .status-badge { display: inline-block; p
