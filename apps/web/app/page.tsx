import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations();

  return (
    <main className="min-h-screen w-full bg-default">
      <h1>{t('about.name')}</h1>
    </main>
  );
}
