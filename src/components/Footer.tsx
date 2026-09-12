import { ArrowUp, Link } from 'lucide-react';
import { profile } from '@/content/portfolio';
import { getIcon } from '@/lib/icons';

export  function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-900/10 bg-cream-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 font-mono text-sm text-cream-50">
                {profile.shortName}
              </span>
              {profile.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              {profile.role} turning concepts into functional products across
              web, mobile, and backend.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {profile.social.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 text-ink-500 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-ink-600 underline-link hover:text-ink-900">Home</Link></li>
              <li><Link href="/blog" className="text-ink-600 underline-link hover:text-ink-900">Blog</Link></li>
              <li><Link href="/#about" className="text-ink-600 underline-link hover:text-ink-900">About</Link></li>
              <li><Link href="/#contact" className="text-ink-600 underline-link hover:text-ink-900">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">Get in touch</h4>
            <Link
              href={`mailto:${profile.email}`}
              className="text-sm text-ink-600 underline-link hover:text-ink-900"
            >
              {profile.email}
            </Link>
            <p className="mt-3 text-sm text-ink-500">{profile.location}</p>
            <p className="mt-3 text-sm text-brand-600 font-medium">{profile.status}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-900/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">© {year} {profile.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-xs text-ink-500 transition-colors hover:text-ink-900"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-900/10 transition-all group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-cream-50">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
