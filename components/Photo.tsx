import Image from 'next/image';

const dims: Record<string, [number, number]> = {
  '/images/routine-complete': [915, 740],
  '/images/gel-nettoyant-visage': [1200, 900],
  '/images/ecran-solaire-mineral-spf50': [900, 1200],
  '/images/creme-de-nuit': [900, 1200],
};

export function Photo({ src, alt, sizes, priority, className }: { src: string; alt: string; sizes: string; priority?: boolean; className?: string }) {
  const [w, h] = dims[src] ?? [900, 1200];
  return <Image src={`${src}.webp`} alt={alt} width={w} height={h} sizes={sizes} priority={priority} className={className} />;
}
