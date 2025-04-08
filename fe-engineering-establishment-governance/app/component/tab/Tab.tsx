'use client';
import Button from '@/app/component/button/Button';
import { useState } from 'react';

import styles from '@/app/component/tab/tab.module.css';

interface ITab {
  children?: React.ReactNode;
}
export default function Tab(props: ITab) {
  const [currentTab, setActiveTab] = useState<'using' | 'introduction'>(
    'introduction',
  );
  const { children } = props;
  function handleActiveTab() {
    setActiveTab((prev) =>
      prev === 'introduction' ? 'using' : 'introduction',
    );
  }
  return (
    <div className={styles.tabArea}>
      <div className={styles.tabs}>
        <Button
          isActive={currentTab === 'introduction'}
          onClick={handleActiveTab}
        >
          서비스 도입
        </Button>
        <Button isActive={currentTab === 'using'} onClick={handleActiveTab}>
          서비스 이용
        </Button>
      </div>
      {children && children}
    </div>
  );
}
