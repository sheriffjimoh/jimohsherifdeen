import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/content/portfolio';
import { getIcon } from '@/lib/icons';

export  function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className=" flex items-center gap-3 mb-6 justify-center">
          <span className="font-mono text-sm text-brand-500">04</span>
          <div className="h-px w-12 bg-brand-500/40" />
          <span className="text-sm uppercase tracking-widest text-ink-400">Contact</span>
        </div>

        <div className=" text-center">
          <h2 className="text-4xl font-bold leading-tight text-ink-900 sm:text-6xl">
            Let's build{' '}
            <span className="font-display italic font-normal text-brand-500">something</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            I'm currently working across all stacks in software development.
            Feel free to get in touch and talk more about your projects.
          </p>
        </div>

        <div className=" mt-12 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 rounded-full bg-ink-900 px-8 py-4 text-base font-semibold text-cream-50 transition-all hover:bg-brand-500 hover:text-ink-900"
          >
            <Mail className="h-5 w-5" />
            {profile.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {profile.social.map((link) => {
              const Icon = getIcon(link.icon);
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50 px-5 py-2.5 text-sm font-medium text-ink-600 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
                >
                  <Icon className="h-4 w-4 text-ink-400 transition-colors group-hover:text-cream-50" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className=" mt-12 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-ink-900/10 bg-cream-100 px-5 py-2.5 text-sm text-ink-600">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage-500" />
            </span>
            Available for new opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
