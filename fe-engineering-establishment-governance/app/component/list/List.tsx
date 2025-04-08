'use client';
import Image from 'next/image';

import { useState } from 'react';

import Styles from '@/app/component/list/list.module.css';

interface IListItem {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}
export default function List(props: { list: IListItem[] }) {
  const { list } = props;
  const [activeStatus, setActiveStatus] = useState<string>('');
  const [activeItem, setActiveItem] = useState<number>();

  async function handleArrowButton(index: number) {
    setActiveItem(index === activeItem ? undefined : index);
    setActiveStatus(Styles.ing);
    if (activeStatus === '') {
      setActiveStatus(Styles.active);
    } else {
      setActiveStatus('');
    }
  }

  return (
    <ul className={Styles.list}>
      {list?.map((item, index: number) => {
        return (
          <li
            key={`${item.id}-${index}-li`}
            className={`${index === activeItem ? activeStatus : ''}`}
          >
            <h4 className={Styles.q}>
              <button onClick={() => handleArrowButton(index)}>
                <em>{item.categoryName}</em>
                <strong>{item.question}</strong>
                <Image
                  src={'/ic_arrow.svg'}
                  alt="더보기"
                  width={32}
                  height={32}
                />
              </button>
            </h4>
            <div className={Styles.a}>
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
