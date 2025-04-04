import PageDescription from '@/app/component/PageDescription';
import Tab from '@/app/component/tab/Tab';
import styles from '@/app/FAQ/page.module.css';

export default function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <div>
          <Tab>
            {/* <input>
            </input> */}
            {/* <Filter /> */}
            {/* <List /> */}
          </Tab>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
