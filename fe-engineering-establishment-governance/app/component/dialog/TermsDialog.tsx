import Image from 'next/image';
import { useState, useCallback, useMemo } from 'react';

import Button from '@/app/component/button/Button';

import { timestampToYYYYMMDD } from '@/app/util/date';

import styles from '@/app/component/dialog/dialog.module.css';
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

interface IDialog {
  title: string;
  handleDialog: () => void;
  contents?: ITerms;
}
export default function TermsDialog(props: IDialog) {
  const { title, handleDialog, contents } = props;
  function handleBackDropClicked(e?: React.MouseEvent<HTMLDialogElement>) {
    e?.stopPropagation();
    if (e && e.target === e.currentTarget) {
      handleDialog();
    }
  }
  const [selectedOption, setOption] = useState<number>(0);
  const termsDates = useMemo(() => {
    return contents?.terms
      .sort((a, b) => {
        if (a.termsVersion > b.termsVersion) {
          return -1;
        }
        if (a.termsVersion < b.termsVersion) {
          return 1;
        }
        return 0;
      })
      .map((term) => {
        return {
          startDate: term.startDate,
          endDate: term.endDate,
          contents: term.contents,
        };
      });
  }, [contents]);

  const content = useCallback(() => {
    return (
      termsDates && (
        <div
          dangerouslySetInnerHTML={{
            __html: termsDates[selectedOption].contents,
          }}
        />
      )
    );
  }, [termsDates, selectedOption]);

  function handleOption(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log('index');
    setOption(parseInt(e?.currentTarget.value || '0'));
  }
  return (
    <dialog onClick={handleBackDropClicked}>
      <div className={styles.backdrop}>
        <div
          className={[styles['dialog-wrapper'], styles['dialog-policy']].join(
            ' ',
          )}
        >
          <div className={styles['dialog-header']}>
            <h4>{title}</h4>
            <Button onClick={handleDialog}>
              <Image
                src="/ic_close.svg"
                alt="close"
                width={24}
                height={24}
                className={styles.close}
              />
            </Button>
          </div>
          <div className={styles['dialog-body']}>
            <div className={styles['policy-top']}>
              <select onChange={handleOption}>
                {termsDates?.map((termsDates, index) => {
                  return (
                    <option key={`${index}-option`} value={index}>
                      {timestampToYYYYMMDD(termsDates.startDate, '.')} -{' '}
                      {timestampToYYYYMMDD(termsDates.endDate, '.') || '현재'}
                    </option>
                  );
                })}
              </select>
            </div>
            {content()}
          </div>
        </div>
      </div>
    </dialog>
  );
}
