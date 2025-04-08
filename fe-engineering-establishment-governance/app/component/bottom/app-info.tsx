import Link from 'next/link';
import Image from 'next/image';

import Styles from '@/app/component/bottom/bottom.module.css';

export default function appInfo() {
  return (
    <div className={Styles.app}>
      <h2>
        <em>기아 비즈 App</em> 지금 만나보세요!
      </h2>
      <Link
        href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
        target="_blank"
        className={Styles.gp}
        rel="noreferrer"
      >
        <Image
          src="/logo_googleplay.svg"
          width={28}
          height={28}
          alt="appstore"
        />
        Google Play
      </Link>

      <Link
        href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
        target="_blank"
        className={Styles.as}
        rel="noreferrer"
      >
        <Image src="/logo_appstore.svg" width={28} height={28} alt="appstore" />
        App Store
      </Link>
    </div>
  );
}
