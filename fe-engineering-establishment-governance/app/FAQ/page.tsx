import PageDescription from '@/app/component/PageDescription';
import Tab from '@/app/component/tab/Tab';

import Search from '@/app/component/search/Search';
import Filter from '@/app/component/filter/Filter';
import List from '@/app/component/list/List';
import InquiryInfo from '@/app/component/bottom/inquiry-info';
import ProcessInfo from '@/app/component/bottom/process-info';
import AppInfo from '@/app/component/bottom/app-info';

import { searchFAQ } from '@/app/api/faq/route';

import styles from '@/app/FAQ/page.module.css';

async function FAQList() {
  const data = await searchFAQ('');
  return data.items;
}
export default async function FAQ() {
  const faqList = await FAQList();
  
  const tabList = [
    { id: 'using', name: '서비스 이용' },
    { id: 'introduce', name: '서비스 도입' },
  ];
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <div>
          <Tab tabList={tabList}>
            <Search />
            <Filter category={'CONSULT'} />
            <List list={faqList} />
          </Tab>
        </div>
        <InquiryInfo />
        <ProcessInfo />
        <AppInfo />
      </main>
    </div>
  );
}
