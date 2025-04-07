'use server';
export async function searchFAQ(question: string) {
  const params = { limit: '10', offset: '0', tab: 'CONSULT', question };
  const queryString = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/faq?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // error log 남기기
    /* eslint-disable-next-line no-console */
    if (!res.ok) {
      throw new Error(`${res.status} 에러가 발생했습니다.`);
    } else {
      const data = await res.json();
      return data;
    }
  } catch (Error) {
    // error log 남기기
    /* eslint-disable-next-line no-console */
    console.error(Error);
  }
}
