export default {
  async fetch(request, env) {
    const html = `
<!DOCTYPE html>
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
    @media (prefers-color-scheme: dark) { .app-header { backg
