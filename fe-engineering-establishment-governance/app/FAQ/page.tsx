import PageDescription from '@/app/component/PageDescription';
import Tab from '@/app/component/tab/Tab';
import styles from '@/app/FAQ/page.module.css';
import Search from '@/app/component/search/Search';

export default function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <div>
          <Tab>
            <Search />
            {/* <Filter /> */}
            {/* <List /> */}
          </Tab>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
