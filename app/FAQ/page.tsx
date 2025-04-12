import type { Metadata } from 'next';

import PageDescription from '@/app/component/PageDescription';
import FAQContainer from '@/app/FAQ/FAQContainer';
import PageBottom from '@/app/component/bottom/PageBottom';
import { getDehydratedQuery, Hydrate } from '@/app/utils/dehydrate';

import { getCategories, searchFAQ } from '@/app/api/faq/request';

import styles from '@/app/FAQ/page.module.css';

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
        <PageBottom />
      </main>
    </div>
  );
}
