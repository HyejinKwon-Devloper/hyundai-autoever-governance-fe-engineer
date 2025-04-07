import { http, HttpResponse } from 'msw';
const handlers = [
  http.get(
    `${process.env.NEXT_BASE_URL}/faq?limit=10&offset=0&tab=CONSULT`,
    () => {
      return HttpResponse.json({
        pageInfo: {
          totalRecord: 4,
          offset: 0,
          limit: 10,
          prevOffset: 0,
          nextOffset: 0,
        },
        items: [
          {
            id: 38,
            categoryName: '도입문의',
            subCategoryName: '서비스 상품',
            question: '기아 비즈에서는 어떤 상품을 이용할 수 있나요?',
            answer:
              '<p>소속 회사가 기아 비즈 이용 계약이 되어있다면,<br>업무 시간에는 이용 건별 별도 결제 없이 편리하게 업무용 차량을 이용할 수 있고(대여 요금은 소속 회사에서 부담), <br>비업무 시간에는 출퇴근 및 주말 여가옹으로 차량을 이용 (대여 요금은 개인이 부담) 할 수 있습니다.</p><p> </p><p>자세한 상품 안내는 메뉴 &gt; 하단의 &#39;이용가이드&#39; &gt; 상품 안내 탭을 통해 확인하실 수 있습니다.<br> </p><p> </p>',
          },
          {
            id: 107,
            categoryName: '도입문의',
            subCategoryName: '서비스 상품',
            question: '기아 비즈 비즈니스용 상품 이용 시 무엇이 좋은가요?',
            answer:
              '<p>기아 비즈의 &#39;비즈니스 상품&#39; 이용 시, 기존 차량 이용 대비 아래와 같은 장점이 있습니다.</p><p>- 차량 보유 및 유지관리비 부담 없이, 우리 회사의 차량 이용 패턴에 딱 맞는 상품으로 계약 후 업무용 차량 운영 가능</p><p>- App 하나로 편하게 예약하고, 스마트키로 제어하는 비대면 간편 대여</p><p>- 회사가 등록한 결제 수단으로 자동 결제 및 간편한 증빙 가능</p><p>* 재직 중인 회사의 기아 비즈 차량 이용과 관련한 자세한 내용은 사내 기아 비즈 담당자에게 문의하시기 바랍니다.</p>',
          },
          {
            id: 134,
            categoryName: '도입문의',
            subCategoryName: '도입 상담',
            question: '비즈니스 상품 도입 기간은 얼마나 걸리나요?',
            answer:
              '<p><span style="font-size: &#39;13pt&#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;">기아 비즈 도입 상담을 신청하신 경우, 빠른 시일 내에 기재해주신 연락처로 연락드릴 예정입니다. </span></p><p><span style="font-size: &#39;13pt&#39;; color: rgba(106, 122, 135, 1); word-break: keep-all;">담당자와의 1:1 상담 후 최대한 원하시는 시기에 맞춰 서비스가 도입될 수 있도록 도와드리고 있으나, 도입하시는 상품에 따라 소요되는 기간은 다소 상이할 수 있습니다. </span></p>',
          },
          {
            id: 135,
            categoryName: '도입문의',
            subCategoryName: '계약',
            question: '비즈니스 상품 도입 절차가 어떻게 되나요?',
            answer:
              '<p>기아 비즈 &#39;비즈니스 상품&#39; 도입 절차는 아래와 같습니다.</p><p>① 상담 문의 등록 후 1:1 맞춤 상담 진행</p><p>② 서비스 도입 상품 및 세부 조건 협의 후 계약 진행</p><p>③ 관리자 Web 계정 생성 후 회사 정보 설정</p><p>④ 임직원 회원가입 진행</p><p>⑤ 전용 K존에서 차량 대여 및 이용</p>',
          },
        ],
      });
    },
  ),
];
export default handlers;
