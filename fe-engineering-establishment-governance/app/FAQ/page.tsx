import PageDescription from '@/app/component/PageDescription';

import styles from '@/app/FAQ/page.module.css';

export default function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <div></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
