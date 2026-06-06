import {useTranslations} from 'next-intl';
import NavLink from '@repo/ui/index';

export default function Page() {
  const t = useTranslations();

  return (
    <main className="min-h-screen w-full bg-default">
      <NavLink href="/">Hello</NavLink>
      <h1>{t('about.name')}</h1>
    </main>
  );
}
