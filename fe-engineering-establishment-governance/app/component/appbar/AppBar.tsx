'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavList from '@/app/component/appbar/NavList';

import { useState } from 'react';
import { useScroll } from '@/app/hook/useScroll';

import styles from '@/app/component/appbar/appbar.module.css';

export default function AppBar() {
  const [isNavOpen, setNavOpen] = useState<boolean>();
  const { state } = useScroll(false);

  function handleNavMenu() {
    setNavOpen((prev) => !prev);
  }
  return (
    <header className={state ? styles.pinned : ''}>
      <div className={styles.appbar}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <Image src="/logo_kiabiz.svg" alt="logo" width={140} height={80} />
          </Link>
        </div>
        <div
          className={[styles.menu, isNavOpen ? styles.opened : ''].join(' ')}
        >
          <NavList handleNavMenu={handleNavMenu} />
        </div>
        <div className={styles.util}>
          <button
            onClick={handleNavMenu}
            className={[styles.nav, isNavOpen ? styles.opened : ''].join(' ')}
          >
            메뉴 열기/닫기
          </button>
        </div>
      </div>
    </header>
  );
}
