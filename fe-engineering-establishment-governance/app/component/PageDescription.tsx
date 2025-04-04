'use client';

import { usePathname } from 'next/navigation';
export default function PageDescription() {
  const pathname = usePathname();
  switch (pathname) {
    case '/FAQ':
      return (
        <h1>
          자주 묻는 질문
          <em>궁금하신 내용을 빠르게 찾아보세요.</em>
        </h1>
      );
    case 'Guide':
      return (
        <h1>
          서비스 소개
          <em>기아 비즈만의 차별화된 비즈니스 상품을 제안합니다.</em>
        </h1>
      );
    case 'News':
      return (
        <h1>
          새소식
          <em>기아 비즈의 새로운 소식을 알려드립니다.</em>
        </h1>
      );
    case 'Counsel':
      return (
        <h1>
          상담문의
          <em>기아 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em>
        </h1>
      );
  }
}
