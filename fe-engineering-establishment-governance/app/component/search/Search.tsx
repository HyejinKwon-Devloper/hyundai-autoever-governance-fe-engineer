'use client';
import Image from 'next/image';
import Form from 'next/form';

import { ChangeEvent, useActionState, useEffect, useState } from 'react';

import styles from '@/app/component/search/search.module.css';

import { searchFAQuestion } from '@/app/api/faq/route';

interface ISearchFAQ {
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
export default function Search(props: { tab: string; faqCategoryId: string }) {
  const { tab, faqCategoryId } = props;
  const [state, formAction, pending] = useActionState(searchFAQuestion, {
    tab,
    faqCategoryId,
  });
  const [searchInput, setInput] = useState<string | undefined>('');
  const [isSubmit, setSubmit] = useState<boolean>(false);

  function handleInputChange(e?: ChangeEvent<HTMLInputElement>) {
    if (e?.target.value) {
      setInput(e.target.value);
    } else {
      setInput('');
      setSubmit(false);
    }
  }
  function resetInput() {
    setInput('');
    setSubmit(false);
  }
  function handleSubmit(formData: FormData) {
    setSubmit(true);
    formAction(formData);
  }

  useEffect(() => {
    resetInput();
  }, [tab]);

  return (
    <>
      <Form action={handleSubmit} className={styles.search}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            name="question"
            value={searchInput}
            placeholder="찾으시는 내용을 입력해 주세요"
            onChange={handleInputChange}
          />
          <input name="tab" defaultValue={tab} value={tab} hidden />
          <input
            name="faqCategoryId"
            defaultValue={faqCategoryId}
            value={faqCategoryId}
            hidden
          />
          {searchInput && (
            <button type="reset" className={styles.clear} onClick={resetInput}>
              다시입력
              <Image
                src="/ic_clear.svg"
                alt="clear"
                width={20}
                height={20}
                className={styles.clear}
              />
            </button>
          )}
          <button type="submit" disabled={pending} className={styles.submit}>
            검색
            <Image src="/ic_search.svg" alt="search" width={24} height={24} />
          </button>
        </div>
      </Form>
      {state?.pageInfo && isSubmit && (
        <div className={styles['search-info']}>
          <h2 className={styles['heading-info']}>
            검색결과 총 <em>{state?.pageInfo.totalRecord}</em>건
          </h2>
          <button type="button" className={styles['init']} onClick={resetInput}>
            <Image src="ic_init.svg" width={24} height={24} alt="init" />
            검색초기화
          </button>
        </div>
      )}
    </>
  );
}
