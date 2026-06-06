import {useTranslations} from 'next-intl';
import NavLink from '@repo/ui/index';
import Container from '@repo/ui/container/index';

export default function Page() {
  const t = useTranslations();

  return (
      <main className="min-h-screen w-full bg-default">
        <NavLink href="/">Hello</NavLink>
        <Container>
          <h1>{t('about.name')}</h1>
        </Container>
      </main>
  );
}
