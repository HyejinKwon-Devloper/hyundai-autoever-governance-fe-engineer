import { http, HttpResponse } from 'msw';
const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faq`, ({ request }) => {
    const url = new URL(request.url);
    const question = url.searchParams.get('question');
    const tab = url.searchParams.get('tab');
    const faqCategoryID = url.searchParams.get('faqCategoryID');

    if (
      !question &&
      faqCategoryID &&
      !['', 'SIGN_UP', 'PRODUCT'].includes(faqCategoryID)
    ) {
      return HttpResponse.json({
        pageInfo: {
          totalRecord: 0,
          offset: 0,
          limit: 10,
          prevOffset: 0,
          nextOffset: 0,
        },
        items: [],
      });
    } else if (
      question &&
      faqCategoryID &&
      !['', 'SIGN_UP', 'PRODUCT'].includes(faqCategoryID)
    ) {
      return HttpResponse.json({
        pageInfo: {
          totalRecord: 0,
          offset: 0,
          limit: 10,
          prevOffset: 0,
          nextOffset: 0,
        },
        items: [],
      });
    }
    const consultItem = [
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
    ];
    const usageItem = [
      {
        id: 23,
        categoryName: '가입문의',
        subCategoryName: '가입',
        question: '가입 및 이용 조건은 어떻게 되나요?',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아래의 조건 충족 시 기아 비즈 가입 및 이용이 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 만 21세 이상 *단, 일부 차종에 따라 나이 기준 상이하므로 이용 전 확인 필요</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 취득일로부터 1년 이상 경과한 대한민국 운전면허 보유</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 본인 명의의 휴대폰 보유 (가족, 타인 명의 휴대폰 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 본인 명의의 신용/체크 카드 보유 (타인 명의 카드 등록 불가)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 가입/이용 필수 약관 동의</span></span></p>',
      },
      {
        id: 24,
        categoryName: '가입문의',
        subCategoryName: '가입',
        question: '가입 절차는 어떻게 되나요?',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈 앱에서 아래와 같은 절차를 통해 회원 가입을 할 수 있습니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 본인 인증 : 본인 명의 휴대폰을 통해 본인 인증</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 약관 동의 : 서비스 이용을 위한 필수/선택 약관 동의</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 개인정보 입력 : 아이디, 비밀번호, 주소 입력 및 마케팅 정보 수신동의 (선택)</span></span></p><p> </p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">상품 구매(예약) 및 차량을 이용하시려면 운전면허 정보와 결제카드 정보까지 등록해야 합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 운전면허 정보 입력 : 취득일로부터 1년 이상 경과한 대한민국 운전면허 등록 가능 (마이페이지 &gt; 결제/운전면허 관리)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">⑤ 결제정보 입력: 본인 명의의 신용/체크카드 입력 가능 (마이페이지 &gt; 결제/운전면허 관리)</span></span></p><p> </p>',
      },
      {
        id: 26,
        categoryName: '가입문의',
        subCategoryName: '가입',
        question:
          '가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않아요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">가입한 적이 없는데 이미 가입한 회원이라고 나오며 가입이 되지 않는 상황일 경우</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈 고객센터에 문의해주시면 바로 도움을 드리겠습니다.</span></span></p>',
      },
      {
        id: 27,
        categoryName: '가입문의',
        subCategoryName: '가입',
        question: '본인 인증이 정상적으로 되지 않아요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">휴대폰 본인인증이 안된다면 아래 경우를 확인해주세요.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">1. 안드로이드</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 본인 명의의 휴대폰을 사용하고 계신가요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 기기 접근 권한에 동의하셨나요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 기기 접근 권한에 동의하지 않으실 경우 인증을 진행할 수 없습니다. 아래 절차를 통해 기기 접근 권한에 동의해주세요.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">&lt;기기 접근 권한 동의 방법&gt;</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">휴대폰 [설정] - [어플리케이션] - [기아 비즈 앱 권한] - [전화] - 기기 접근 권한 동의</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 동일한가요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 입력한 휴대폰 번호와 인증을 시도한 휴대폰 번호가 다르다면 인증이 불가합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 휴대폰 정보에 등록된 번호가 없다고 나오나요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 내장된 USIM에 휴대폰 번호가 정상적으로 인식되지 않은 경우 해당 오류가 발생할 수 있습니다. 문제 해결을 위해 가입하신 통신사로 문의해 주세요.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">2. iOS</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 본인 명의의 휴대폰을 사용하고 계신가요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 타인 명의의 휴대폰을 사용하고 있다면 인증이 불가합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 문자 발송이 안되나요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 문자 내용을 수정한 경우, 문자 내용을 조금이라도 수정했을 경우 인증이 불가합니다. 반드시 자동 입력되는 문자 내용을 일체의 수정없이 그대로 발송해주세요.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 사용 중인 요금제 특성 상 문자 발송이 포함되어 있지 않은 경우, 본인인증은 문자 발송을 이용한 기기인증을 통해 이루어지며, 문자 발송을 하지 못하면 인증이 불가합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">*문자 건당 이용료를 지불하고 있는 회원의 경우 기기인증을 위한 SMS 전송으로 본인 부담 비용이 발생할 수 있습니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">③ 위 두 가지 사항에 해당하지 않을 경우, 와이파이 연결을 해제 후 본인인증을 다시 시도해 주세요.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">④ 인증 도중 앱이 종료되었나요?</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">: 인증 도중 앱이 종료된 경우 인증을 처음부터 다시 진행해 주세요.</span></span></p><p> </p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">위의 방법으로도 인증이 불가하신 경우, 기아 비즈 고객센터에 문의해주시면 도움을 드리겠습니다.</span></span></p>',
      },
      {
        id: 28,
        categoryName: '가입문의',
        subCategoryName: '로그인',
        question: '아이디/비밀번호를 분실했어요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">아이디/비밀번호를 분실하신 경우, 로그인 화면의 ‘아이디 찾기’ 혹은 ‘비밀번호 찾기’를 통해 해결 가능합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">① 아이디 분실 시 : 아이디 찾기 &gt; 휴대폰 본인 인증 &gt; 아이디 확인</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">② 비밀번호 분실 시 : 비밀번호 초기화 &gt; 휴대폰 본인 인증 &gt; 새로운 비밀번호 설정</span></span></p><p> </p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">위의 방법으로도 해결이 어려우신 경우, 기아 비즈 고객센터로 문의해주시면 도움을 드리겠습니다.</span></span></p>',
      },
      {
        id: 29,
        categoryName: '가입문의',
        subCategoryName: '회원등급',
        question: 'Greener 등급이란 무엇인가요? 등급별 혜택은 어떻게 되나요?',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈에서는 더 나은 환경을 위하여 친환경 차량 주행을 하시는 회원을 대상으로 ‘Greener’ 등급 제도를 운영하고 있습니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">운전면허를 등록하여 정상적으로 기아 비즈의 차량 이용이 가능한 시점부터 회원 등급이 부여되며, 개인, 비즈니스 프로필의 최근 6개월 간의 월평균 친환경차 주행거리 합산 실적을 기반으로 등급이 부여됩니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">(가입으로부터 6개월이 되지 않은 회원의 경우, 가입 후 개월수의 평균으로 산정)</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">매월 1일, Greener 등급이 재산정되며, 등급에 따른 다양한 혜택이 지급됩니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">자세한 혜택은 메뉴 &gt; 나의 등급 옆 &#39;혜택보기&#39; 를 통해 확인하실 수 있습니다.</span></span></p><p> </p><p> </p>',
      },
      {
        id: 30,
        categoryName: '가입문의',
        subCategoryName: '면허',
        question: '기아 비즈를 이용하려면 면허증이 반드시 필요한가요?',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈 차량 이용을 위해서는 반드시 취득일이 1년 이상 경과한 대한민국 운전면허증(실물) 또는 모바일 운전면허증이 필요합니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">운전면허증을 분실하였을 경우 운전면허 재발급을 받으신 후 이용이 가능합니다.</span></span></p>',
      },
      {
        id: 31,
        categoryName: '가입문의',
        subCategoryName: '면허',
        question: '운전면허를 취득한지 1년이 되지 않았어요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">안전한 차량 운행을 위하여 취득일이 1년 이상 경과한 면허증을 소지한 경우에만 차량 이용이 가능합니다.</span></span></p>',
      },
      {
        id: 32,
        categoryName: '가입문의',
        subCategoryName: '면허',
        question: '운전면허를 재발급 받은지 1년이 되지 않았어요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">면허 취득일로부터 1년이 지났으나 재발급으로 인해 발급일이 1년 미만인 운전면허를 신규로 등록하는 경우,</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈 앱 - 왼쪽 상단 메뉴 - [마이페이지] - [결제/운전면허 관리] 에서 면허증을 촬영하여 면허 정보를 우선 등록한 후, </span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기아 비즈 고객센터에 문의하여 안내받은 메일로 면허 승인을 위한 서류(운전경력증명서 - 정부 24(https://www.gov.kr/)에서 발급 가능)를 제출해주시기 바랍니다.</span></span></p><p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해 주시기 바랍니다.</span></span></p>',
      },
      {
        id: 33,
        categoryName: '가입문의',
        subCategoryName: '면허',
        question: '운전면허를 갱신/재발급했어요.',
        answer:
          '<p><span style="color:hsl(0, 0%, 0%);font-size:&#39;13pt&#39;;"><span style="word-break:keep-all;">기존에 면허 정보가 저장되어 있는 고객님 중 면허를 재발급 받아 운전면허 정보 변경이 필요하신 경우, 기아 비즈 고객센터에 문의하신 이후 운전면허를 재등록해주시기 바랍니다.</span></span></p>',
      },
    ];
    if (question && question != '') {
      if (tab?.includes('CONSULT')) {
        return HttpResponse.json({
          pageInfo: {
            totalRecord: 2,
            offset: 0,
            limit: 10,
            prevOffset: 0,
            nextOffset: 0,
          },
          items: consultItem.map((item) => item.question.includes(question)),
        });
      } else {
        return HttpResponse.json({
          pageInfo: {
            totalRecord: 21,
            offset: 0,
            limit: 10,
            prevOffset: 0,
            nextOffset: 10,
          },
          items: usageItem.map((item) => item.question.includes(question)),
        });
      }
    } else {
      if (tab?.includes('CONSULT')) {
        return HttpResponse.json({
          pageInfo: {
            totalRecord: 2,
            offset: 0,
            limit: 10,
            prevOffset: 0,
            nextOffset: 0,
          },
          items: consultItem,
        });
      } else {
        return HttpResponse.json({
          pageInfo: {
            totalRecord: 105,
            offset: 0,
            limit: 10,
            prevOffset: 0,
            nextOffset: 10,
          },
          items: usageItem,
        });
      }
    }
  }),
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faq/category`, ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get('tab');
    if (request.url.includes('category')) {
      if (tab?.includes('CONSULT')) {
        return HttpResponse.json([
          {
            categoryID: 'PRODUCT',
            name: '서비스 상품',
          },
          {
            categoryID: 'COUNSELING',
            name: '도입 상담',
          },
          {
            categoryID: 'CONTRACT',
            name: '계약',
          },
        ]);
      } else {
        return HttpResponse.json([
          {
            categoryID: 'SIGN_UP',
            name: '가입문의',
          },
          {
            categoryID: 'BUSINESS',
            name: '비즈니스(업무용)',
          },
          {
            categoryID: 'ACCIDENT',
            name: '사고/보험',
          },
          {
            categoryID: 'RESERVATION',
            name: '예약/결제',
          },
          {
            categoryID: 'VEHICLE',
            name: '차량문의',
          },
          {
            categoryID: 'REFUEL',
            name: '충전',
          },
          {
            categoryID: 'COUPON',
            name: '쿠폰/기타',
          },
        ]);
      }
    }
  }),
];
export default handlers;
