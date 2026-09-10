export  function Marquee() {
  const items = [
    'Full Stack Engineer',
    'React · Next.js',
    'React Native · Expo',
    'Laravel · PHP',
    'TypeScript',
    'SaaS Architecture',
    'Technical Writing',
    'Remote · Worldwide',
    'Available for Work',
  ];

  return (
    <div className="overflow-hidden border-y border-ink-900/10 bg-ink-900 py-4">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl italic text-cream-50">{item}</span>
            <span className="text-brand-400 text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
