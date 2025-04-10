'use client';
import Image from 'next/image';

import { useMemo, Suspense } from 'react';

import styles from '@/app/component/list/list.module.css';

interface IListItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}
export default function List(props: {
  activeStatus: string;
  handleArrowButton: (index: number) => void;
  faqList?: IListItem[];
  activeItem?: number;
}) {
  const { faqList, activeItem, activeStatus, handleArrowButton } = props;

  const faqs = useMemo(() => {
    return (
      faqList &&
      faqList.length > 0 && (
        <ul className={styles.list}>
          {faqList.map((item, index: number) => {
            return (
              <li
                key={`${item.id}-${index}-li`}
                className={`${index === activeItem ? styles[activeStatus] : ''}`}
              >
                <h4 className={styles.q}>
                  <button onClick={() => handleArrowButton(index)}>
                    <em>{item.subCategoryName}</em>
                    <strong>{item.question}</strong>
                    <Image
                      src={'/ic_arrow.svg'}
                      alt="더보기"
                      width={32}
                      height={32}
                    />
                  </button>
                </h4>
                <div className={styles.a}>
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </li>
            );
          })}
        </ul>
      )
    );
  }, [faqList, activeItem, activeStatus]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {faqs ? (
        faqs
      ) : (
        <div className={styles['no-data']}>
          <Image src="/ic_nodata.svg" alt="nodata" width={64} height={64} />
          <p>검색결과가 없습니다.</p>
        </div>
      )}
    </Suspense>
  );
}
