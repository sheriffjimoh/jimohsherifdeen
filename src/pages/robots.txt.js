export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(`User-agent: *
  Allow: /
  
  User-agent: GPTBot
  Allow: /
  
  User-agent: Claude-Web
  Allow: /
  
  Sitemap: https://jimohsherifdeen.vercel.app/sitemap.xml`)
    res.end()
  }