import PageDescription from '@/app/component/PageDescription';
import FAQContainer from '@/app/FAQ/FAQContainer';
import InquiryInfo from '@/app/component/bottom/inquiry-info';
import ProcessInfo from '@/app/component/bottom/process-info';
import AppInfo from '@/app/component/bottom/app-info';

import styles from '@/app/FAQ/page.module.css';

export default async function FAQ() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <FAQContainer />
        <InquiryInfo />
        <ProcessInfo />
        <AppInfo />
      </main>
    </div>
  );
}
