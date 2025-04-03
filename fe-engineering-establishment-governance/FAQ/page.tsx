import styles from '@/app/page.module.css';

export default function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
