javascript
import React from 'react';
import { renderToString } from 'react-dom/server';
import Portfolio from './index.jsx';

export default {
  async fetch(request, env, ctx) {
    try {
      const html = renderToString(<Portfolio />);
      
      const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeByJ - App Portfolio</title>
  <meta name="description" content="CodeByJ portfolio showcasing innovative health tech apps, including MyPepDoc">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; }
  </style>
</head>
<body>
  <div id="root">\${html}</div>
</body>
</html>
      `;

      return new Response(fullHTML, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    } catch (err) {
      return new Response(\`Error: \${err.message}\`, { status: 500 });
    }
  }
};
