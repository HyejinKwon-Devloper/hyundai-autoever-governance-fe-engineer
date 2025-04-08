import PageDescription from '@/app/component/PageDescription';
import Tab from '@/app/component/tab/Tab';
import styles from '@/app/FAQ/page.module.css';
import Search from '@/app/component/search/Search';
import Filter from '@/app/component/filter/Filter';
import List from '@/app/component/list/List';
import InquiryInfo from '@/app/component/bottom/inquiry-info';
import { searchFAQ } from '@/app/api/faq/route';

async function FAQList() {
  const data = await searchFAQ('');
  return data.items;
}
export default async function FAQ() {
  const faqList = await FAQList();
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <div>
          <Tab>
            <Search />
            <Filter category={'CONSULT'} />
            <List list={faqList} />
          </Tab>
        </div>
        <InquiryInfo />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
