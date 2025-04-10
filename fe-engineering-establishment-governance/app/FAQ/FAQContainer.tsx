'use client';
import Tab from '@/app/component/tab/Tab';
import Search from '@/app/component/search/Search';
import Filter from '@/app/component/filter/Filter';
import List from '@/app/component/list/List';

import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchFAQ } from '@/app/api/faq/route';
import { getCategories } from '@/app/api/faq/route';

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
interface ICategory {
  categoryID: string;
  name: string;
}
export default function FAQContainer() {
  const tabList = [
    { id: 'CONSULT', name: '서비스 이용' },
    { id: 'USAGE', name: '서비스 도입' },
  ];
  const [selectedTab, setTab] = useState<string>('CONSULT');
  const [category, setCategory] = useState<string>('');
  const [question, setQuestion] = useState<string | undefined>('');

  const searchData = useQuery<ISearchFAQ>({
    queryKey: ['faq-dashboard', selectedTab, category, question],
    queryFn: () => searchFAQ(selectedTab, category),
    staleTime: 1000,
  });

  const categories = useQuery<ICategory[]>({
    queryKey: ['faq-categories', selectedTab],
    queryFn: () => getCategories(selectedTab),
    staleTime: 1000,
  });

  useEffect(() => {
    handleCategory('');
    handleSetQuestion('');
  }, [selectedTab]);

  const categoriesOfTab = useMemo(() => {
    if (categories.data) {
      return [{ categoryID: '', name: '전체' }, ...categories.data];
    } else return [{ categoryID: '', name: '전체' }];
  }, [selectedTab, categories]);

  function handleTab(tab: string) {
    setTab(tab);
  }
  function handleCategory(checked: string) {
    setCategory(checked);
  }

  function handleSetQuestion(question: string) {
    setQuestion(question);
  }

  return (
    <div>
      <Tab tabList={tabList} currentTab={selectedTab} handleTab={handleTab}>
        <Search
          tab={selectedTab}
          faqCategoryId={category}
          question={question}
          handleSetQuestion={handleSetQuestion}
        />
        <Filter
          categoriesOfTab={categoriesOfTab}
          current={category}
          handleCategory={handleCategory}
        />
        <List faqList={searchData.data?.items} />
      </Tab>
    </div>
  );
}
