import styles from '@/app/FAQ/page.module.css';

export default function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <h1>
          자주 묻는 질문
          <em>궁금하신 내용을 빠르게 찾아보세요.</em>
        </h1>
        <div></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
