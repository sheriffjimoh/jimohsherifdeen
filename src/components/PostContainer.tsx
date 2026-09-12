import { ReactNode } from 'react';

interface PostContainerProps {
  children: ReactNode;
  className?: string;
}

export function PostContainer({
  children,
  className = '',
}: PostContainerProps) {
  return (
    <div
      className={` text-base leading-8 text-ink-700
        [&>*+*]:mt-5
        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-ink-900
        [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-ink-900
        [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-ink-900
        [&_p]:leading-8
        [&_ul]:list-disc [&_ul]:pl-6
        [&_ol]:list-decimal [&_ol]:pl-6
        [&_li]:mt-2
        [&_blockquote]:border-l-4 [&_blockquote]:border-brand-500
        [&_blockquote]:bg-cream-200 [&_blockquote]:p-5 [&_blockquote]:italic
        [&_a]:text-brand-600 [&_a]:underline
        [&_a:hover]:text-brand-800
        [&_img]:mx-auto [&_img]:max-w-full
         [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl
        [&_pre]:bg-[#080808] [&_pre]:p-5 [&_pre]:shadow-lg
        [&_pre_code]:whitespace-pre [&_pre_code]:bg-transparent
        [&_pre_code]:p-0 [&_pre_code]:font-mono
        [&_pre_code]:text-sm [&_pre_code]:leading-7
        [&_pre_code]:text-brand-300
        ${className}`}
    >
      {children}
    </div>
  );
}