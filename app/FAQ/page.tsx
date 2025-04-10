import PageDescription from '@/app/component/PageDescription';
import FAQContainer from '@/app/FAQ/FAQContainer';
import InquiryInfo from '@/app/component/bottom/inquiry-info';
import ProcessInfo from '@/app/component/bottom/process-info';
import AppInfo from '@/app/component/bottom/app-info';

import styles from '@/app/FAQ/page.module.css';
import type { Metadata } from 'next';
import { getDehydratedQuery, Hydrate } from '../utils/dehydrate';

import { getCategories, searchFAQ } from '@/app/api/faq/request';

export const metadata: Metadata = {
  title: '서비스 도입 FAQ | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스',
  description:
    '기아 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
};

export default async function FAQ() {
  const faq = await getDehydratedQuery({
    queryKey: ['faq-dashboard', 'CONSULT'],
    queryFn: () => searchFAQ('CONSULT'),
  });
  const categories = await getDehydratedQuery({
    queryKey: ['faq-categories', 'CONSULT'],
    queryFn: () => getCategories('CONSULT'),
  });
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <PageDescription />
        <Hydrate state={{ queries: [faq, categories] }}>
          <FAQContainer />
        </Hydrate>
        <InquiryInfo />
        <ProcessInfo />
        <AppInfo />
      </main>
    </div>
  );
}
