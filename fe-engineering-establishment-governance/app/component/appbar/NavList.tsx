import Link from 'next/link';
export default function NavList() {
  return (
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
  );
}
