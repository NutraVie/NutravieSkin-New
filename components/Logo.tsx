import Image from 'next/image';

export function Logo({ light = false, height = 24 }: { light?: boolean; height?: number }) {
  const markH = Math.round(height * 1.6);
  return (
    <span className="logo">
      <Image src="/images/logo-mark.png" alt="" width={225} height={192} style={{ height: markH, width: 'auto' }} priority />
      <Image src={light ? '/images/logo-word-light.png' : '/images/logo-word.png'} alt="NutraVie" width={528} height={96} style={{ height, width: 'auto' }} priority />
    </span>
  );
}
