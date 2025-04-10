'use client';
import Link from 'next/link';
import Button from '@/app/component/button/Button';
import { getTerms } from '@/app/api/terms/route';
import TermsDialog from '@/app/component/dialog/TermsDialog';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import Style from '@/app/component/footer/footer.module.css';

interface ITerms {
  terms: [
    {
      termsName: string;
      termsVersion: number;
      startDate: number;
      endDate: number;
      contents: string;
    },
  ];
}
export default function Footer() {
  const [terms, setTerms] = useState<ITerms>();
  const [isOpend, setOpend] = useState<boolean>(false);

  async function handleJoinServiceUse() {
    const data = await getTerms('JOIN_SERVICE_USE');
    setTerms(data);
    setOpend(true);
  }

  function handleDialog() {
    setOpend((prev) => !prev);
  }
  return (
    <footer>
      {isOpend &&
        createPortal(
          <TermsDialog
            title={'이용약관'}
            contents={terms}
            handleDialog={handleDialog}
          />,
          document.body,
        )}
      <div className={Style.inner}>
        <div className={Style.information}>
          <span className={Style.util}>
            <Link
              href="https://privacy.kia.com/overview/full-policy"
              target="_blank"
            >
              <b>개인정보 처리방침</b>
            </Link>
            <Button onClick={handleJoinServiceUse}>이용약관</Button>
          </span>
          <address className={Style.address}>
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>
            <br />
            <span>
              대표: <i>송호성, 최준영</i>
            </span>
            <br />
            <span>
              사업자등록번호:
              <i>119-81-02316</i>
            </span>
            <br />
            <span>
              통신판매번호: <i>2006-07935</i>
            </span>
            <br />
            <span>
              고객센터: <i>1833-4964</i>
            </span>
            <br />
            <span>
              제휴문의:
              <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
        <p className={Style.copyright}>
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
