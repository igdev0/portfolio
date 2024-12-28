import styles from './not-found.module.scss';
import Button from '@/app/components/button/button';

export default function NotFound() {
  return (
      <div className={styles.notFound}>
        <h1>404 Page not found</h1>
        <Button asLink={true} href="/">
          Back to root
        </Button>
      </div>
  )
}