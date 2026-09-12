import { profile, skills } from '@/content/portfolio';
import { getIcon } from '@/lib/icons';
import { useEffect } from 'react';
import Image from 'next/image';

export  function About() {



     useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


  return (
    <section id="about" className="relative py-28 lg:py-36 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: portrait */}
          <div className="reveal space-y-6">
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
               width={1200}
               height={800}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent p-6">
                <div className="flex items-center gap-2 text-sm text-cream-200">
                  <span className="h-2 w-2 rounded-full bg-sage-400 animate-pulse" />
                  {profile.location}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-cream-50">{profile.name}</h3>
                <p className="text-sm text-cream-200/80">{profile.role}</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50 p-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">Quick Facts</h4>
              <dl className="space-y-3 text-sm">
                {[
                  ['Experience', '7+ years'],
                  ['Education', 'B.Sc Computer Science'],
                  ['Methodology', 'Agile / Remote'],
                  ['Focus', 'Full Stack · Mobile'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-ink-900/5 pb-2 last:border-0">
                    <dt className="text-ink-500">{k}</dt>
                    <dd className="font-medium text-ink-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: bio + services + skills */}
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-500/40" />
              <span className="text-sm uppercase tracking-widest text-ink-400">About</span>
            </div>

            <h2 className="reveal text-3xl font-bold leading-tight text-ink-900 sm:text-5xl">
              Turning concepts into{' '}
              <span className="font-display italic font-normal text-brand-500">functional products</span>.
            </h2>

            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-ink-600">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Services */}
            <div className="reveal mt-12">
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">What I Do</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.services.map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <div
                      key={service.title}
                      className="card-lift rounded-2xl border border-ink-900/10 bg-cream-50 p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-semibold text-ink-900 text-sm">{service.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink-500">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="reveal mt-10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-full border border-ink-900/10 bg-cream-50 px-4 py-2 text-sm text-ink-600 transition-all hover:border-brand-500/40 hover:bg-brand-500/5 hover:text-brand-600"
                    >
                      <Icon className="h-3.5 w-3.5 text-ink-400 transition-colors group-hover:text-brand-500" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
