import styles from './error.module.scss';
import Button from '@/app/components/button/button';

export default function ServerError() {
  return (
      <div className={styles.notFound}>
        <h1>500 Internal server error</h1>
        <Button asLink={true} href="/">
          Back to root
        </Button>
      </div>
  )
}