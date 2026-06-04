import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>{t('some-kind-of-text')}</h1>
      {t('error')}
    </main>
  );
}
