'use client';
import Image from 'next/image';

import { useState, Suspense } from 'react';

import styles from '@/app/component/list/list.module.css';

interface IListItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}
export default function List(props: { faqList?: IListItem[] }) {
  const { faqList } = props;
  const [activeStatus, setActiveStatus] = useState<string>('');
  const [activeItem, setActiveItem] = useState<number>();

  function handleArrowButton(index: number) {
    setActiveItem(index === activeItem ? undefined : index);
    setActiveStatus(styles.ing);
    setActiveStatus(activeStatus === '' ? styles.active : '');
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {faqList && faqList.length > 0 ? (
        <ul className={styles.list}>
          {faqList.map((item, index: number) => {
            return (
              <li
                key={`${item.id}-${index}-li`}
                className={`${index === activeItem ? activeStatus : ''}`}
              >
                <h4 className={styles.q}>
                  <button
                    key={`${index}-button`}
                    onClick={() => handleArrowButton(index)}
                  >
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
      ) : (
        <div className={styles['no-data']}>
          <Image src="/ic_nodata.svg" alt="nodata" width={64} height={64} />
          <p>검색결과가 없습니다.</p>
        </div>
      )}
    </Suspense>
  );
}
