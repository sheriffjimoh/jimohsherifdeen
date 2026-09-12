import { useState, useMemo } from 'react';
import { ArrowUpRight, Globe, Smartphone, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'saas', label: 'SaaS', icon: Globe },
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'extension', label: 'Extension', icon: Globe },
] as const;


type ProjectFields = {
  imgUrl: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink: string;
  tags: string[];
};

export interface projectProps {
    items: {
      fields: ProjectFields;
    }[];

}

function BentoCard({ project, size }: { project: ProjectFields; size: 'large' | 'medium' | 'small' }) {
  const isLarge = size === 'large';
  const isMedium = size === 'medium';

  return (
    <article
      className={`card-lift group relative overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50 ${
        isLarge ? 'lg:col-span-2 lg:row-span-2' : isMedium ? 'lg:col-span-2' : ''
      }`}
    >
    <div
  className={`relative w-full h-[170px] overflow-hidden bg-ink-900/5 ${
    isLarge ? 'aspect-[16/12] lg:aspect-[16/14]' : 'aspect-[16/10]'
  }`}
>
  <Image
    src={project.imgUrl}
    alt={project.title}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-center transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
  />
</div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-bold text-ink-900 transition-colors group-hover:text-brand-600 ${isLarge ? 'text-xl' : 'text-base'}`}>
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition-all group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className={`mt-2 text-sm leading-relaxed text-ink-500 ${isLarge ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-ink-900/5 px-2.5 py-1 font-mono text-xs text-ink-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export  function Projects({ projects }: { projects: projectProps }) {
 const items = projects?.items ?? [];
    const [filter, setFilter] = useState('all');

    const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return items;
    }

    return items.filter((project) =>
      project.fields.tags?.some(
        (tag) => tag.toLowerCase().trim() === filter.toLowerCase()
      )
    );
  }, [filter]);


  return (
    <section id="works" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-brand-500/40" />
          <span className="text-sm uppercase tracking-widest text-ink-400">Selected Work</span>
        </div>

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-bold leading-tight text-ink-900 sm:text-5xl">
            Things I&lsquo;ve{' '}
            <span className="font-display italic font-normal text-brand-500">built</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-500">
            A selection of projects across SaaS platforms, web apps, mobile apps,
            and browser extensions.
          </p>
        </div>

        {/* Filters */}
        <div className=" mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'border-ink-900 bg-ink-900 text-cream-50'
                  : 'border-ink-900/10 bg-cream-50 text-ink-500 hover:border-ink-900/30 hover:text-ink-900'
              }`}
            >
              <cat.icon className="h-3.5 w-3.5" />
              {cat.label}
            </button>
          ))}
        </div>

        <div
  key={filter}
  className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
>
  {filteredItems.length > 0 ? (
    filteredItems.map((project, index) => (
      <div
        key={`${filter}-${project.fields.title}-${index}`}
        className=" visible"
      >
        <BentoCard
          project={project.fields}
          size={index === 0 ? 'large' : index < 3 ? 'medium' : 'small'}
        />
      </div>
    ))
  ) : (
    <p className="col-span-full text-ink-500">
      No projects found for this category.
    </p>
  )}
</div>
      </div>
    </section>
  );
}
