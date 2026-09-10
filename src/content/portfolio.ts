/**
 * Content data layer — mirrors what would come from Contentful.
 * Each interface matches a Contentful content type so swapping the
 * source later is a matter of replacing this file's implementation.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  shortName: string;
  firstName: string;
  tagline: string;
  role: string;
  summary: string;
  about: string[];
  avatarUrl: string;
  location: string;
  email: string;
  social: SocialLink[];
  status: string;
  stats: { label: string; value: string }[];
  services: { title: string; description: string; icon: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'extension' | 'saas';
  featured?: boolean;
  year?: string;
  link?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  slug: string;
  category: string;
  featured?: boolean;
  body: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export const profile: Profile = {
  name: 'Jimoh Sherifdeen',
  shortName: 'JS',
  firstName: 'Sherifdeen',
  tagline: 'Full Stack Software Engineer',
  role: 'Full Stack Software Engineer',
  summary:
    'I am a passionate professional skilled in turning concepts into functional products and dedicated to continuous learning and problem-solving in the tech industry.',
  about: [
    "Hi, I am Jimoh Sherifdeen. I embarked on my coding journey in 2018, in school, inspired by the idea that with web development skills, I could create a platform like Facebook. We began with HTML, and the journey has led me to here today.",
    "Over the years, I've crafted numerous web and mobile apps, working as a freelancer, a full-time professional, and a part-time engineer. Remote work has been my forte, and I'm well-versed in Agile methodology.",
    "Continuous learning has been a vital part of my path, starting from web design and progressing to full-stack web development, eventually expanding into full-stack web and mobile development. As a computer science graduate, grasping new programming languages has always been second nature, thanks to my solid foundation in control structures.",
  ],
  avatarUrl:
    'https://res.cloudinary.com/dy9yoeiq2/image/upload/v1757781139/1707894377337_ccmxx2.jpg',
  location: 'Remote — Worldwide',
  email: 'jimohsherifdeen@gmail.com',
  status: 'Available for new opportunities',
  social: [
    { label: 'GitHub', url: 'https://github.com/jimohsherifdeen', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/jimohsherifdeen', icon: 'linkedin' },
    { label: 'Twitter', url: 'https://twitter.com/jimohsherifdeen', icon: 'twitter' },
    { label: 'Email', url: 'mailto:jimohsherifdeen@gmail.com', icon: 'mail' },
  ],
  stats: [
    { label: 'Years Coding', value: '7+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'Articles Written', value: '12' },
    { label: 'Clients Served', value: '15+' },
  ],
  services: [
    {
      title: 'Web Development',
      description:
        'Full-stack web apps with React, Next.js, Laravel, and Node.js — from design to deployment.',
      icon: 'globe',
    },
    {
      title: 'Mobile Development',
      description:
        'Cross-platform mobile apps with React Native and Expo, deployed to App Store and Play Store.',
      icon: 'smartphone',
    },
    {
      title: 'SaaS Architecture',
      description:
        'End-to-end SaaS platforms with billing, auth, multi-tenant architecture, and third-party integrations.',
      icon: 'layers',
    },
    {
      title: 'Technical Writing',
      description:
        'In-depth articles on engineering, frameworks, and real-world problem solving — 12+ published.',
      icon: 'pen',
    },
  ],
};

export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'code' },
  { name: 'JavaScript', icon: 'braces' },
  { name: 'React', icon: 'atom' },
  { name: 'Next.js', icon: 'triangle' },
  { name: 'React Native', icon: 'smartphone' },
  { name: 'Node.js', icon: 'server' },
  { name: 'Laravel', icon: 'layers' },
  { name: 'PHP', icon: 'file-code' },
  { name: 'GraphQL', icon: 'git-branch' },
  { name: 'Supabase', icon: 'database' },
  { name: 'MySQL', icon: 'database' },
  { name: 'Tailwind CSS', icon: 'wind' },
  { name: 'Vue.js', icon: 'eye' },
  { name: 'Expo', icon: 'rocket' },
  { name: 'Redux', icon: 'refresh-cw' },
  { name: 'Stripe', icon: 'credit-card' },
  { name: 'Hasura', icon: 'zap' },
  { name: 'Inertia.js', icon: 'link' },
];

export const projects: Project[] = [
  {
    id: 'crawlguard',
    title: 'CrawlGuard',
    description:
      'AI crawler monitoring tool. Add one script tag, see every AI bot that visits your site in real-time.',
    image:
      'https://res.cloudinary.com/dy9yoeiq2/image/upload/v1788047471/Screenshot_2026-08-30_at_12.02.52_AM_nmh4w2.png',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'AI'],
    category: 'saas',
    featured: true,
    year: '2026',
  },
  {
    id: 'ai-crawler-checker',
    title: 'AI Crawler Checker',
    description:
      'Chrome extension to see which AI bots like GPTBot, ClaudeBot and CCBot are allowed to crawl any website you visit.',
    image:
      'https://res.cloudinary.com/dy9yoeiq2/image/upload/v1788047499/screenshot-store_am78rl.png',
    tags: ['JavaScript', 'Chrome Extension', 'AI'],
    category: 'extension',
    featured: true,
    year: '2026',
  },
  {
    id: 'curnectintel',
    title: 'CurnectIntel',
    description:
      'B2B KYC/KYB verification SaaS with pay-as-you-go identity verification, wallet funding, API keys, and Smile ID integration.',
    image:
      'https://res.cloudinary.com/dy9yoeiq2/image/upload/v1751222821/Screenshot_2025-06-29_at_5.11.02_PM_orv09c.png',
    tags: ['Laravel', 'React', 'TypeScript', 'Inertia.js'],
    category: 'saas',
    featured: true,
    year: '2025',
  },
  {
    id: 'masterbots',
    title: 'Masterbots.ai',
    description:
      'AI-powered social platform with user profiles, follow system, Stripe subscriptions, and multi-model AI integration.',
    image:
      'https://res.cloudinary.com/dy9yoeiq2/image/upload/v1751223143/Screenshot_2025-06-29_at_10.40.11_AM_gonx1g.png',
    tags: ['Next.js', 'TypeScript', 'Hasura', 'GraphQL', 'Stripe'],
    category: 'web',
    featured: true,
    year: '2025',
  },
  {
    id: 'bitcash',
    title: 'Bitcash Blog',
    description:
      'Cryptocurrency blog platform for a fintech startup. Pixel-perfect Next.js app with GraphQL.',
    image: 'https://imagizer.imageshack.com/img923/548/bJoFs3.png',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'GraphQL'],
    category: 'web',
    year: '2024',
  },
  {
    id: 'dinesurf',
    title: 'Dinesurf',
    description:
      'Restaurant web app with reservation, menu, and event management. Laravel + Vue.js + MySQL.',
    image: 'https://imagizer.imageshack.com/img923/9743/0g6drL.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind'],
    category: 'web',
    year: '2023',
  },
  {
    id: 'viralget',
    title: 'Viralget',
    description:
      'Influencer marketing marketplace where influencers secure gigs and businesses discover collaborators.',
    image: 'https://imagizer.imageshack.com/img923/1918/cwFwMG.png',
    tags: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
    category: 'web',
    year: '2023',
  },
  {
    id: 'onekart',
    title: 'OneKart',
    description:
      'Ecommerce mobile app — overhauled UI, enhanced performance, deployed to App Store and Play Store.',
    image: 'https://imagizer.imageshack.com/img924/5529/Zh5xlj.png',
    tags: ['React Native', 'TypeScript', 'Expo', 'Redux'],
    category: 'mobile',
    year: '2023',
  },
  {
    id: 'turbocart',
    title: 'Turbocart',
    description:
      'Full ecommerce mobile app with product listings, payment integration, POS, and Google Maps.',
    image: 'https://imagizer.imageshack.com/img922/7073/oD09js.png',
    tags: ['React Native', 'Expo', 'Redux', 'POS'],
    category: 'mobile',
    year: '2022',
  },
  {
    id: 'afrox',
    title: 'Afro x Digital',
    description:
      'CMS for news, awards, talent voting, and music charts with social authentication.',
    image: 'https://imagizer.imageshack.com/img922/4812/XUleUV.png',
    tags: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    category: 'web',
    year: '2022',
  },
  {
    id: 'innomas',
    title: 'Innomas',
    description:
      'Clinical research CMS built from scratch with PHP OOP, transformed from PSD to pixel-perfect.',
    image: 'https://imagizer.imageshack.com/img923/118/eVapyG.png',
    tags: ['PHP OOP', 'MySQL', 'jQuery', 'Bootstrap'],
    category: 'web',
    year: '2021',
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Tracker',
    description:
      'Mobile app for real-time cryptocurrency tracking — coin details, prices, and community engagement.',
    image: 'https://imagizer.imageshack.com/img924/5396/cpAFHk.png',
    tags: ['React Native', 'Expo'],
    category: 'mobile',
    year: '2021',
  },
];

export const articles: Article[] = [
  {
    id: 'crawlguard-blog',
    title: 'I Built CrawlGuard — A Real-Time AI Crawler Monitor for Your Website',
    excerpt:
      "I built CrawlGuard to find out if AI bots actually visit your site. One script tag. Real-time dashboard. Here's what I learned building it.",
    date: 'August 29, 2026',
    dateISO: '2026-08-29',
    readTime: '6 min read',
    slug: 'i-built-crawlguard',
    category: 'Project Story',
    featured: true,
    body: `
## The Problem

I kept hearing about AI bots crawling websites — GPTBot, ClaudeBot, CCBot, PerplexityBot — but I had no idea if they were visiting mine. There was no simple way to know. You could dig through server logs, but who wants to do that?

I wanted something dead simple: **one script tag, and a dashboard showing every AI bot that visits your site in real-time.**

## Building It

CrawlGuard is built with Next.js, TypeScript, Supabase, and Vercel. The architecture is straightforward:

- A lightweight tracking script that sites embed
- An edge function that receives and logs bot visits
- A real-time dashboard powered by Supabase realtime subscriptions
- Email alerts via Resend when new bot types are detected

The tracking script detects the User-Agent on every page load and sends it to the edge function. The edge function checks against a known list of AI crawlers and stores the visit in Supabase.

\`\`\`typescript
const AI_BOTS = [
  { name: 'GPTBot', pattern: 'GPTBot/1.0' },
  { name: 'ClaudeBot', pattern: 'ClaudeBot' },
  { name: 'CCBot', pattern: 'CCBot/2.0' },
  { name: 'PerplexityBot', pattern: 'PerplexityBot' },
];

function detectBot(userAgent: string) {
  return AI_BOTS.find(bot => userAgent.includes(bot.pattern));
}
\`\`\`

## What I Learned

The biggest surprise was **how many AI bots actually visit**. Within 24 hours of deploying on my own site, I saw visits from GPTBot, ClaudeBot, CCBot, and Bytespider. Some of these I'd never even heard of.

### Key Takeaways

- AI crawlers are far more active than most people realize
- Different bots have different crawl patterns — some are aggressive, some are polite
- Real-time monitoring gives you a sense of control that logs never do
- The "one script tag" simplicity was the hardest part to achieve

## What's Next

I'm planning to add historical charts, bot blocking recommendations, and a public leaderboard of the most-crawled sites. The goal is to make AI crawler monitoring as easy as installing Google Analytics.
    `.trim(),
  },
  {
    id: 'chrome-extension-blog',
    title: "I Built My First Chrome Extension, Here's Everything I Learned",
    excerpt:
      'I had never built a Chrome extension before. A week later I had one live on the Chrome Web Store. This is what I learned about how extensions are structured, why permissions matter, and why building for Chrome means building for most browsers.',
    date: 'August 29, 2026',
    dateISO: '2026-08-29',
    readTime: '5 min read',
    slug: 'first-chrome-extension',
    category: 'Tutorial',
    featured: true,
    body: `
## Starting From Zero

I had never built a Chrome extension before. I'd built web apps, mobile apps, and backend systems — but never a browser extension. When I built CrawlGuard, I realized it would be perfect as an extension: visit any site, instantly see which AI bots are allowed to crawl it.

A week later, I had one live on the Chrome Web Store.

## How Extensions Are Structured

A Chrome extension is essentially a small web app with three parts:

- **Manifest** — a JSON file that declares permissions, scripts, and UI
- **Background scripts** — run in the background, respond to browser events
- **Content scripts** — injected into web pages, can read and modify the DOM

\`\`\`json
{
  "manifest_version": 3,
  "name": "AI Crawler Checker",
  "version": "1.0.0",
  "action": {
    "default_popup": "popup.html"
  },
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["<all_urls>"]
}
\`\`\`

## Why Permissions Matter

Chrome's permission system is strict for good reason. Every permission you request shows up in the install dialog, and users are (rightfully) suspicious of extensions that ask for too much.

I learned to request the minimum permissions possible. Instead of asking for \`<all_urls>\` from the start, I could have used \`activeTab\` — which only grants access to the current tab when the user clicks the extension icon.

## Why Building for Chrome Means Building for Most Browsers

Chrome extensions use the WebExtensions API, which is supported by Chrome, Edge, Brave, Opera, and (increasingly) Firefox. Build for Chrome, and you've built for the majority of desktop browsers.

### Key Takeaways

- Manifest V3 is the current standard — V2 is being phased out
- Content scripts run in an isolated world — they can't directly access page JavaScript
- The popup is just a regular HTML page with its own CSS and JS
- Publishing to the Chrome Web Store takes a one-time $5 fee and a review process
- Testing locally is easy with "Load unpacked" in chrome://extensions

## Shipping It

The review process took about 3 days. The most important thing was having a clear description, screenshots, and a privacy policy. Once approved, it was live and installable by anyone.
    `.trim(),
  },
  {
    id: 'git-large-files',
    title: 'How to Remove Large Files from Git History Without Breaking Your Branches',
    excerpt:
      "Accidentally committed a large file and broke your GitHub PR? This guide shows how to clean history with git filter-repo, fix the \"There isn't anything to compare\" issue, and rebase your branch back to normal.",
    date: 'September 14, 2025',
    dateISO: '2025-09-14',
    readTime: '3 min read',
    slug: 'remove-large-files-git',
    category: 'Git',
    body: `
## The Problem

You accidentally committed a large file. GitHub rejected the push. Now your PR says "There isn't anything to compare" because your branch history is broken. Sound familiar?

## The Solution: git filter-repo

Don't use \`git filter-branch\` — it's slow and deprecated. Use \`git filter-repo\` instead.

### Step 1: Install git filter-repo

\`\`\`bash
pip install git-filter-repo
\`\`\`

### Step 2: Remove the large file from history

\`\`\`bash
git filter-repo --invert-paths --path path/to/large-file.zip
\`\`\`

This rewrites every commit in your history, removing the file entirely.

### Step 3: Force push

\`\`\`bash
git push origin --force --all
\`\`\`

### Step 4: Fix the broken PR

If your PR now says "There isn't anything to compare," it's because the branch histories diverged. Fix it by rebasing:

\`\`\`bash
git checkout your-branch
git fetch origin main
git rebase origin/main
git push origin --force your-branch
\`\`\`

### Key Takeaways

- Always add large files to \`.gitignore\` before committing
- Use \`git filter-repo\`, not \`git filter-branch\`
- Force push after rewriting history — there's no way around it
- Rebase onto main to fix diverged branch histories
    `.trim(),
  },
  {
    id: 'seo-900',
    title: 'How I Increased Website Traffic by 900%: A Technical SEO Case Study',
    excerpt:
      'From 3k monthly visitors to 50k+ in 6 months through strategic technical SEO implementation.',
    date: 'September 13, 2025',
    dateISO: '2025-09-13',
    readTime: '14 min read',
    slug: 'increase-traffic-900-percent',
    category: 'SEO',
    body: `
## The Starting Point

3,000 monthly visitors. That was the baseline. The site was functional, but it was invisible to search engines. Not because the content was bad — but because the technical foundation was broken.

6 months later: 50,000+ monthly visitors. A 900% increase. No paid ads. No viral posts. Just technical SEO done right.

## What I Fixed

### 1. Core Web Vitals

Google's Core Web Vitals directly impact rankings. I focused on three metrics:

- **LCP (Largest Contentful Paint)** — reduced from 4.2s to 1.8s by optimizing images and lazy-loading below-the-fold content
- **FID (First Input Delay)** — reduced from 300ms to 50ms by code-splitting and deferring non-critical JS
- **CLS (Cumulative Layout Shift)** — reduced from 0.25 to 0.02 by setting explicit dimensions on images and ads

### 2. Structured Data

I implemented JSON-LD structured data across every page type:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": { "@type": "Person", "name": "Jimoh Sherifdeen" },
  "datePublished": "2025-09-13"
}
\`\`\`

This gave Google rich snippets in search results, which dramatically increased click-through rates.

### 3. Sitemap and Crawl Budget

- Generated a dynamic XML sitemap that updated automatically with new content
- Submitted it to Google Search Console
- Fixed crawl budget issues by blocking low-value pages in robots.txt

### 4. Internal Linking

I created a deliberate internal linking structure. Every article linked to at least 2 other relevant articles. This spread page authority and helped Google discover deep content.

### 5. Page Speed

Beyond Core Web Vitals, I optimized overall page load:

- Implemented edge caching with a CDN
- Used next/image for automatic format conversion (WebP)
- Minified and bundled CSS/JS
- Enabled HTTP/2 and Brotli compression

## The Results

| Month | Monthly Visitors |
|-------|-----------------|
| 0     | 3,000           |
| 1     | 5,200           |
| 2     | 8,100           |
| 3     | 15,400          |
| 4     | 24,800          |
| 5     | 38,200          |
| 6     | 52,000          |

### Key Takeaways

- Technical SEO is the foundation — without it, great content won't rank
- Core Web Vitals matter more than most people think
- Structured data gives you rich snippets, which give you higher CTR
- Internal linking is the most underused SEO tactic
- Results compound — the first 3 months are slow, then it accelerates
    `.trim(),
  },
  {
    id: 'google-translate',
    title: 'How to Add Google Translate to Your Next.js/React App (The Right Way)',
    excerpt:
      'Building a custom, beautiful translation component that actually works with modern React frameworks.',
    date: 'September 10, 2025',
    dateISO: '2025-09-10',
    readTime: '12 min read',
    slug: 'google-translate-nextjs',
    category: 'Tutorial',
    body: `
## The Problem with Google Translate

The default Google Translate widget is ugly. It injects an iframe, a banner at the top of your page, and it clashes with every modern design system.

But the underlying API is powerful. The trick is to use it without the widget.

## The Approach

Instead of the widget, we'll:

1. Load the Google Translate script dynamically
2. Create a custom dropdown that triggers translation
3. Style everything to match our design

### Step 1: Load the Script

\`\`\`typescript
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js';
  script.async = true;
  document.body.appendChild(script);
}, []);
\`\`\`

### Step 2: Create a Hidden Translate Element

\`\`\`html
<div id="google_translate_element" style="display:none"></div>
\`\`\`

### Step 3: Build a Custom Language Picker

Build your own dropdown that calls the Google Translate API under the hood, but looks like part of your design system.

### Key Takeaways

- Hide the default widget and build your own UI
- Use a cookie to persist the user's language choice across sessions
- Test with right-to-left languages like Arabic
- The translation takes a moment — show a loading state
    `.trim(),
  },
  {
    id: 'expo-sdk53',
    title: 'Fixing "App Not Loading on Web" in Expo SDK 53',
    excerpt:
      'Fixing a Metro bundler crash in Expo SDK 53 caused by tslib and .mjs conflicts—this guide shows how to update Metro config and alias tslib for smooth React Native Web support.',
    date: 'July 7, 2025',
    dateISO: '2025-07-07',
    readTime: '2 min read',
    slug: 'fixing-expo-sdk53',
    category: 'React Native',
    body: `
## The Error

After upgrading to Expo SDK 53, my app stopped loading on web. Metro would crash with an error about tslib and .mjs file conflicts.

## The Fix

Update your \`metro.config.js\` to handle .mjs files and alias tslib:

\`\`\`javascript
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];

config.resolver.alias = {
  ...config.resolver.alias,
  tslib: require.resolve('tslib/tslib.js'),
};

module.exports = config;
\`\`\`

### Why This Happens

Expo SDK 53 updated Metro, which changed how it handles .mjs files. tslib ships as .mjs, and without the explicit alias, Metro can't resolve it correctly for web.

### Key Takeaways

- Add 'mjs' to sourceExts in Metro config
- Alias tslib to its CommonJS entry point
- This only affects web — iOS and Android work fine without the fix
    `.trim(),
  },
  {
    id: 'build-provider-tree',
    title: 'Simplifying React Context Management with BuildProviderTree',
    excerpt:
      'The BuildProviderTree function recursively combines multiple context providers into one nested component, simplifying their management in React applications and ensuring clean, maintainable code.',
    date: 'June 1, 2024',
    dateISO: '2024-06-01',
    readTime: '5 min read',
    slug: 'build-provider-tree',
    category: 'React',
    body: `
## The Problem

As your React app grows, you end up with a deeply nested tree of context providers:

\`\`\`tsx
<ThemeProvider>
  <AuthProvider>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </AuthProvider>
</ThemeProvider>
\`\`\`

This is hard to read and maintain. Every time you add a new provider, you have to manually nest it.

## The Solution: BuildProviderTree

\`\`\`typescript
function BuildProviderTree(providers: React.ComponentType[]) {
  return function CombinedProvider({ children }: { children: React.ReactNode }) {
    return providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
  };
}
\`\`\`

Now you can combine all your providers into a single component:

\`\`\`tsx
const AppProviders = BuildProviderTree([
  ThemeProvider,
  AuthProvider,
  UserProvider,
  CartProvider,
]);

// Usage
<AppProviders>
  <App />
</AppProviders>
\`\`\`

### Key Takeaways

- Use reduceRight to nest providers in the correct order
- The combined provider is a regular component — you can pass props if needed
- This pattern keeps your app entry point clean and readable
- Adding a new provider is a one-line change
    `.trim(),
  },
  {
    id: 'custom-hooks',
    title: 'Streamlining Your React App with Custom Hooks',
    excerpt:
      'Custom hooks in React improve clarity, reusability, testability, and maintenance. Encapsulating logic, like data fetching with useFetch, keeps components focused on rendering.',
    date: 'May 30, 2024',
    dateISO: '2024-05-30',
    readTime: '7 min read',
    slug: 'custom-hooks-react',
    category: 'React',
    body: `
## Why Custom Hooks?

Components should focus on rendering. When they're also responsible for data fetching, state management, and side effects, they become hard to read and harder to test.

Custom hooks solve this by extracting logic into reusable functions.

## Example: useFetch

\`\`\`typescript
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### Key Takeaways

- Custom hooks make components cleaner and more focused
- They're reusable — write once, use everywhere
- They're testable in isolation
- Always prefix custom hooks with "use" — React's linter relies on this convention
    `.trim(),
  },
  {
    id: 'react-to-mobile',
    title: 'Convert Your React Web App to Mobile in Minutes with Ionic Capacitor',
    excerpt:
      "We'll explore how you can effortlessly transform your React web app into a mobile app and get it ready for deployment on both the App Store and Play Store.",
    date: 'September 7, 2023',
    dateISO: '2023-09-07',
    readTime: '2 min read',
    slug: 'react-to-mobile-capacitor',
    category: 'Mobile',
    body: `
## The Idea

You already have a React web app. You want it on the App Store and Play Store. You don't want to rewrite it in React Native or Swift.

Ionic Capacitor lets you wrap your existing web app in a native shell.

## The Steps

\`\`\`bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add ios
npx cap add android
\`\`\`

Then build your web app and copy the output:

\`\`\`bash
npm run build
npx cap copy
npx cap open ios   # opens Xcode
npx cap open android  # opens Android Studio
\`\`\`

### Key Takeaways

- Capacitor wraps your web app — no rewrite needed
- You get access to native APIs (camera, geolocation, push notifications)
- Deploy to stores from Xcode and Android Studio
- It's not as smooth as a true native app, but for many use cases it's more than enough
    `.trim(),
  },
  {
    id: 'laravel-crud',
    title: 'A Step-by-Step Guide to Building a CRUD API in Laravel',
    excerpt:
      'Creating a CRUD (Create, Read, Update, Delete) API is a fundamental task in modern web development. Laravel simplifies this process by providing a powerful set of tools to build efficient APIs.',
    date: 'September 7, 2023',
    dateISO: '2023-09-07',
    readTime: '2 min read',
    slug: 'laravel-crud-api',
    category: 'Backend',
    body: `
## Why Laravel?

Laravel makes API development fast and enjoyable. Eloquent ORM, migrations, and resource classes handle the heavy lifting.

## Building a CRUD API

### 1. Create the model and migration

\`\`\`bash
php artisan make:model Post -m
\`\`\`

### 2. Define the schema

\`\`\`php
Schema::create('posts', function (Blueprint $table) {
  $table->id();
  $table->string('title');
  $table->text('body');
  $table->timestamps();
});
\`\`\`

### 3. Create the controller

\`\`\`bash
php artisan make:controller PostController --api
\`\`\`

### 4. Define routes

\`\`\`php
Route::apiResource('posts', PostController::class);
\`\`\`

### Key Takeaways

- \`--api\` flag generates the 5 RESTful methods automatically
- Use Form Requests for validation
- Use API Resources to transform your responses
- Laravel's routing is expressive and clean
    `.trim(),
  },
  {
    id: 'js-array-methods',
    title: 'Unlocking the Power of JavaScript Array Methods',
    excerpt:
      "We'll explore JavaScript array methods in detail, providing clear explanations, relevant examples, and practical use cases to help you leverage them in real-world scenarios.",
    date: 'September 7, 2023',
    dateISO: '2023-09-07',
    readTime: '3 min read',
    slug: 'js-array-methods',
    category: 'JavaScript',
    body: `
## The Power of Array Methods

JavaScript array methods are the difference between writing code that's readable and code that's not. Here are the ones that matter most.

## .some()

Returns true if at least one element passes the test.

\`\`\`javascript
const hasEven = [1, 3, 5, 8].some(n => n % 2 === 0); // true
\`\`\`

## .includes()

Returns true if the array contains the value.

\`\`\`javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.includes('banana'); // true
\`\`\`

## .every()

Returns true if all elements pass the test.

\`\`\`javascript
const allPositive = [1, 2, 3].every(n => n > 0); // true
\`\`\`

## .find()

Returns the first element that passes the test.

\`\`\`javascript
const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2); // { id: 2 }
\`\`\`

### Key Takeaways

- Use .some() when you need "at least one"
- Use .every() when you need "all"
- Use .includes() for simple membership checks
- Use .find() when you need the actual element, not just a boolean
    `.trim(),
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return articles.slice(0, count);
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aSame = a.category === current.category ? 1 : 0;
      const bSame = b.category === current.category ? 1 : 0;
      return bSame - aSame;
    })
    .slice(0, count);
}
