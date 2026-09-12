import { useEffect, useState } from 'react';
import {  Menu, X } from 'lucide-react';
import { profile } from '@/content/portfolio';
import Link from 'next/link';

const navLinks = [
  { to: '/#works', label: 'Work', section: 'home' },
  { to: '/blog', label: 'Writing' },
  { to: '/#about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
];

export  function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-xl border-b border-ink-900/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 font-mono text-sm text-cream-50 transition-all group-hover:bg-brand-500 group-hover:text-ink-900">
            {profile.shortName}
          </span>
          <span className="hidden text-ink-900 sm:block">
            {profile.firstName}
            <span className="text-brand-500">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.to}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`mailto:${profile.email}`}
            className="ml-2 rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-cream-50 transition-all hover:bg-brand-500 hover:text-ink-900"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 text-ink-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-ink-900/8 bg-cream-50 p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-900/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`mailto:${profile.email}`}
              className="mt-2 rounded-xl bg-ink-900 px-4 py-3 text-center text-sm font-semibold text-cream-50"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
