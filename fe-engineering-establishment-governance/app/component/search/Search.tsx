'use client';
import Image from 'next/image';
import Form from 'next/form';

import { ChangeEvent, useActionState, useState } from 'react';

import Styles from '@/app/component/search/search.module.css';

import { searchFAQ } from '@/app/api/faq/actions';

interface ISearchFAQ {
  message: string;
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: [
    {
      id: number;
      categoryName: string;
      subCategoryName: string;
      question: string;
      answer: string;
    },
  ];
}
const initialState = {};
export default function Search() {
  const [state, formAction, pending] = useActionState(searchFAQ, initialState);
  const [searchInput, setInput] = useState<string | undefined>('');

  function handleInputChange(e?: ChangeEvent<HTMLInputElement>) {
    setInput(e?.target.value ?? '');
  }
  function resetInput() {
    setInput('');
  }

  return (
    <>
      <Form action={formAction} className={Styles.search}>
        <div className={Styles.inputWrap}>
          <input
            type="text"
            name="question"
            value={searchInput}
            placeholder="찾으시는 내용을 입력해 주세요"
            onChange={handleInputChange}
          />
          {searchInput && (
            <button type="reset" className={Styles.clear} onClick={resetInput}>
              다시입력
              <Image
                src="/ic_clear.svg"
                alt="clear"
                width={20}
                height={20}
                className={Styles.clear}
              />
            </button>
          )}
          <button type="submit" disabled={pending} className={Styles.submit}>
            검색
            <Image src="/ic_search.svg" alt="search" width={24} height={24} />
          </button>
        </div>
      </Form>
    </>
  );
}
