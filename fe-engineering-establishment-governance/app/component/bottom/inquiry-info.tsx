import Styles from '@/app/component/bottom/bottom.module.css';
import LargeIconButton from '@/app/component/button/LargeIconButton';

export default function InquiryInfo() {
  return (
    <>
      <h2 className="heading-2">서비스 문의</h2>
      <div className={Styles.inquiry}>
        <LargeIconButton
          alt="download"
          href="/static/media/proposal.e465bf89a6a3066e69af.pdf"
          download="기아 비즈 서비스 제안서"
          svg="/ic_download.svg"
        >
          서비스 제안서 다운로드
        </LargeIconButton>
        <LargeIconButton alt="write" href="/Counsel" svg="/ic_write.svg">
          상담문의 등록하기
        </LargeIconButton>
        <LargeIconButton
          alt="kakaotalk"
          href="https://pf.kakao.com/_xfLxjdb"
          svg="/ic_talk.svg"
          target="_blank"
          rel="noreferrer"
        >
          카톡으로 문의하기 <em>ID : 기아 비즈</em>
        </LargeIconButton>
      </div>
    </>
  );
}
