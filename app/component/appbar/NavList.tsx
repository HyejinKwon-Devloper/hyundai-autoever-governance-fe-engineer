import Link from 'next/link';
export default function NavList(props: { handleNavMenu: () => void }) {
  const { handleNavMenu } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/Guide`} onClick={handleNavMenu}>
            서비스 소개
          </Link>
        </li>
        <li>
          <Link href={'/FAQ'} onClick={handleNavMenu}>
            자주 묻는 질문
          </Link>
        </li>
        <li>
          <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/News`} onClick={handleNavMenu}>
            새소식
          </Link>
        </li>
        <li>
          <Link href={`${process.env.NEXT_PUBLIC_PAGE_URL}/Counsel`} onClick={handleNavMenu}>
            상담문의
          </Link>
        </li>
      </ul>
    </nav>
  );
}
