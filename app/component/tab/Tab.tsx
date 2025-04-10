'use client';
import Button from '@/app/component/button/Button';

import styles from '@/app/component/tab/tab.module.css';

interface ITabItem {
  id: string;
  name: string;
}
interface ITab {
  tabList: ITabItem[];
  currentTab: string;
  handleTab: (selectedTab: string) => void;
  children?: React.ReactNode;
}
export default function Tab(props: ITab) {
  const { tabList, currentTab, handleTab, children } = props;

  function handleActiveTab(id: string) {
    handleTab(id);
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
