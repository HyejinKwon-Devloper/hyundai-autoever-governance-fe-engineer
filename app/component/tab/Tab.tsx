'use client';
import Button from '@/app/component/button/Button';
import { useState } from 'react';

import styles from '@/app/component/tab/tab.module.css';

interface ITabItem {
  id: string;
  name: string;
}
interface ITab {
  tabList: ITabItem[];
  children?: React.ReactNode;
}
export default function Tab(props: ITab) {
  const { tabList, children } = props;
  const [currentTab, setActiveTab] = useState<string>(tabList[0].id);

  function handleActiveTab(id: string) {
    setActiveTab(id);
  }
  return (
    <div className={styles.tabArea}>
      <div className={styles.tabs}>
        {tabList.map((tab) => {
          return (
            <Button
              key={tab.id}
              isActive={currentTab === tab.id}
              onClick={() => handleActiveTab(tab.id)}
            >
              {tab.name}
            </Button>
          );
        })}
      </div>
      {children && children}
    </div>
  );
}
