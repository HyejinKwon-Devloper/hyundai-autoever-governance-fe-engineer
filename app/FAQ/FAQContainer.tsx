'use client';
import Tab from '@/app/component/tab/Tab';
import Search from '@/app/component/search/Search';
import Filter from '@/app/component/filter/Filter';
import List from '@/app/component/list/List';

import { useEffect, useMemo, useReducer, useState } from 'react';
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

interface actionType {
  type: 'initialize' | 'change';
  activeStatus: '' | 'active';
  activeItem: undefined | number;
}

export default function FAQContainer() {
  const tabList = [
    { id: 'CONSULT', name: '서비스 이용' },
    { id: 'USAGE', name: '서비스 도입' },
  ];
  const [selectedTab, setTab] = useState<string>('CONSULT');
  const [category, setCategory] = useState<string>('');
  const [question, setQuestion] = useState<string | undefined>('');
  const [state, dispatch] = useReducer(reducer, {
    activeStatus: '',
    activeItem: undefined,
  });

  const searchData = useQuery({
    queryKey: ['faq-dashboard', selectedTab, category],
    queryFn: () => searchFAQ(selectedTab, category),
    staleTime: 1000,
  });

  const categories = useQuery<ICategory[]>({
    queryKey: ['faq-categories', selectedTab],
    queryFn: () => getCategories(selectedTab),
    staleTime: 1000,
  });

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
    dispatch({ type: 'initialize', activeItem: undefined, activeStatus: '' });
  }

  function handleSetQuestion(question: string) {
    setQuestion(question);
  }

  function handleArrowButton(index?: number) {
    if (state.activeItem !== undefined) {
      dispatch({
        type: 'change',
        activeItem: index === state.activeItem ? undefined : index,
        activeStatus:
          index === state.activeItem
            ? state.activeStatus === 'active'
              ? ''
              : 'active'
            : 'active',
      });
    } else {
      dispatch({
        type: 'change',
        activeItem: index,
        activeStatus: 'active',
      });
    }
  }

  function reducer(
    state: { activeItem?: number; activeStatus: string },
    action: actionType,
  ) {
    if (action.type === 'initialize') {
      return {
        activeItem: undefined,
        activeStatus: '',
      };
    } else {
      return {
        ...state,
        activeItem: action.activeItem,
        activeStatus: action.activeStatus,
      };
    }
  }

  useEffect(() => {
    handleCategory('');
    handleSetQuestion('');
    dispatch({ type: 'initialize', activeItem: undefined, activeStatus: '' });
  }, [selectedTab]);

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
        <List
          faqList={searchData.data?.items}
          activeStatus={state.activeStatus}
          activeItem={state.activeItem}
          handleArrowButton={handleArrowButton}
        />
      </Tab>
    </div>
  );
}
