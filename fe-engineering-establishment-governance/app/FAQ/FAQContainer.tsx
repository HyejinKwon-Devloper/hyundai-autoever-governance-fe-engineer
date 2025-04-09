'use client';
import Tab from '@/app/component/tab/Tab';
import Search from '@/app/component/search/Search';
import Filter from '@/app/component/filter/Filter';
import List from '@/app/component/list/List';

import { useEffect, useState } from 'react';

export default function FAQContainer() {
  const tabList = [
    { id: 'CONSULT', name: '서비스 이용' },
    { id: 'USAGE', name: '서비스 도입' },
  ];
  const [selectedTab, setTab] = useState<string>('CONSULT');
  const [category, setCategory] = useState<string>('');
  function handleTab(tab: string) {
    setTab(tab);
  }
  function handleCategory(checked: string) {
    setCategory(checked);
  }
  useEffect(() => {
    setCategory('');
  }, [selectedTab]);

  return (
    <div>
      <Tab tabList={tabList} currentTab={selectedTab} handleTab={handleTab}>
        <Search tab={selectedTab} faqCategoryId={category} />
        <Filter
          tab={selectedTab}
          current={category}
          handleCategory={handleCategory}
        />
        <List tab={selectedTab} categoryId={category} />
      </Tab>
    </div>
  );
}
