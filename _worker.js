// _worker.js - handles /images/* from R2
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/images/')) {
      const key = url.pathname.replace('/images/', '');
      const object = await env.IMAGES.get(key);
      if (!object) return new Response('Not found', { status: 404 });
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return new Response(object.body, { headers });
    }
    // All other requests served as static files by Pages
    return env.ASSETS.fetch(request);
  }
};
