import Image from 'next/image';

import Styles from '@/app/component/bottom/bottom.module.css';

export default function ProcessInfo() {
  const data = [
    {
      svg: 'ic_process01.svg',
      title: '문의 등록',
      content: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
      contentWidth: '',
    },
    {
      svg: 'ic_process02.svg',
      title: '관리자 설정',
      content: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
      contentWidth: '225px',
    },
    {
      svg: 'ic_process03.svg',
      title: '임직원 가입',
      content: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
      contentWidth: '200px',
    },
    {
      svg: 'ic_process04.svg',
      title: '서비스 이용',
      content: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
      contentWidth: '230px',
    },
  ];
  return (
    <>
      <h2 className="heading-2">이용 프로세스 안내</h2>
      <ol className={Styles.process}>
        {data.map((item, index) => {
          return (
            <li key={`${item.svg}-${index}`}>
              <Image
                src={`${item.svg}`}
                width={56}
                height={56}
                alt={item.title}
              />
              <span>
                <strong>{item.title}</strong>
                <em style={{ maxWidth: item.contentWidth }}>{item.content}</em>
              </span>
            </li>
          );
        })}
      </ol>
    </>
  );
}
