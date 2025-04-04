'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavList from '@/app/component/appbar/NavList';

import { useState } from 'react';

import styles from '@/app/component/appbar/appbar.module.css';

export default function Header() {
  const [isNavOpen, setNavOpen] = useState<boolean>();

  function handleNavMenu() {
    setNavOpen((prev) => !prev);
  }
  return (
    <>
      <header>
        <div className={styles.appbar}>
          <div className="logo">
            <Link href={'/'}>
              <Image
                src="/logo_kiabiz.svg"
                alt="logo"
                width={140}
                height={80}
              />
            </Link>
          </div>
          <div className={styles.navlist}>
            <NavList />
          </div>
          <div className={styles.nav}>
            <button onClick={handleNavMenu}>
              <Image src="/ic_menu.svg" alt="nav" width={40} height={40} />
            </button>
          </div>
        </div>
      </header>
      {isNavOpen && (
        <div className={styles.menu}>
          <NavList />
        </div>
      )}
    </>
  );
}
