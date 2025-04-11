import Image from 'next/image';
import { HTMLAttributeAnchorTarget } from 'react';

import styles from '@/app/component/button/button.module.css';

interface ILargeIconButton {
  alt: string;
  href: string;
  svg?: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget | undefined;
  rel?: string;
  download?: string;
}
export default function LargeIconButton(props: ILargeIconButton) {
  const { alt, children, href, svg, target, rel, download } = props;
  return (
    <a
      className={[styles.xxlg, styles.tertiary].join(' ')}
      href={href}
      target={target}
      rel={rel}
      download={download}
    >
      {svg && <Image src={svg} width={48} height={48} alt={alt} />}
      <span>{children}</span>
    </a>
  );
}
