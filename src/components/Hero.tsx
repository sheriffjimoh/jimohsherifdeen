// import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { profile } from '@/content/portfolio';
import { getIcon } from '@/lib/icons';

export  function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-16">
      {/* Decorative shapes */}
      <div className="absolute right-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute left-[-5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-sage-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
       

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-ink-900 animate-fade-up sm:text-6xl lg:text-8xl" style={{ animationDelay: '0.1s' }}>
              Building
              <br />
              <span className="font-display italic font-normal text-brand-500">software</span>
              <br />
              that ships.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-500 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              I'm {profile.name}, a {profile.tagline.toLowerCase()} who turns
              concepts into functional products across web, mobile, and backend.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href="/blog"
                className="group flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-all hover:bg-brand-500 hover:text-ink-900"
              >
                <Sparkles className="h-4 w-4" />
                Read my writing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full border border-ink-900/15 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:bg-ink-900/5"
              >
                View selected work
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-cream-50 p-6">
                <div className="text-4xl font-bold text-ink-900">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-3 text-ink-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
