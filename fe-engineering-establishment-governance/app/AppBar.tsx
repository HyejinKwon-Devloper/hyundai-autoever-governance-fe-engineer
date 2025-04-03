'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/appbar.module.css';
import { useState } from 'react';

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
            <ul>
              <li>
                <Link href={'/Guide'}>서비스 소개</Link>
              </li>
              <li>
                <Link href={'/FAQ'}>자주 묻는 질문</Link>
              </li>
              <li>
                <Link href={'/News'}>새소식</Link>
              </li>
              <li>
                <Link href={'/Counsel'}>상담문의</Link>
              </li>
            </ul>
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
          <nav>
            <ul>
              <li>
                <Link href={'/Guide'}>서비스 소개</Link>
              </li>
              <li>
                <Link href={'/FAQ'}>자주 묻는 질문</Link>
              </li>
              <li>
                <Link href={'/News'}>새소식</Link>
              </li>
              <li>
                <Link href={'/Counsel'}>상담문의</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
