'use client';
import Image from 'next/image';
import Button from '@/app/component/button/Button';

import { useScroll } from '@/app/hook/useScroll';

import styles from '@/app/component/button/button.module.css';

export default function FloatingButton() {
  const { state, handleScrollTop } = useScroll(false);

  return (
    <div className={styles.top}>
      <div className={styles.inner}>
        <Button
          className={state ? styles.active : ''}
          onClick={handleScrollTop}
        >
          <Image src="/ic_top.svg" alt="top" width={28} height={28} priority />
          상단으로
        </Button>
      </div>
    </div>
  );
}
