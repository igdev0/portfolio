import {assets, fonts} from '@/components/resume/assets';
import path from 'path';
import {Font} from '@react-pdf/renderer';

export default function useAssets() {
  const _assets = assets;

  if (typeof window === 'undefined') {
    for (const key in assets) {
      const value = assets[key as keyof object];
      // @ts-ignore
      _assets[key as keyof object] = path.join(process.cwd(), 'public', value);
    }
  }

  fonts.forEach(font => {
    font.fonts = font.fonts.map(data => ({
      ...data,
      src: typeof window === 'undefined' ? path.join(process.cwd(), 'public', data.src) : data.src,
    })) as keyof object;
    Font.register(font as keyof object);
  });
  return assets;
}