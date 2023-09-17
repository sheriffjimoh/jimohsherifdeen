import Image from "next/image";
import { useState } from "react";
import { classNames } from "@/hooks";


export function LazyImage({ src, alt, className, ...props }: React.ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <picture className={classNames(className?.includes('absolute') ? 'absolute' : 'relative', 'flex w-full h-full overflow-hidden', isLoading && 'bg-gray-700 scale-110 blur-2xl grayscale')}>
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        className={classNames('duration-700 ease-in-out', isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0', className)}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </picture>
  )
}