import {assets, fonts} from '@/components/resume/assets';
import path from 'path';
import {Font} from '@react-pdf/renderer';

export default function useAssets() {
  const resolvedAssets = Object.fromEntries(
      Object.entries(assets).map(([key, value]) => [
        key,
        typeof window === 'undefined'
            ? path.join(process.cwd(), 'public', value)
            : value,
      ])
  );

  fonts.forEach(font => {
    Font.register({
      ...font,
      fonts: font.fonts.map(data => ({
        ...data,
        src:
            typeof window === 'undefined'
                ? path.join(process.cwd(), 'public', data.src)
                : data.src,
      })),
    } as keyof object);
  });

  return resolvedAssets;
}