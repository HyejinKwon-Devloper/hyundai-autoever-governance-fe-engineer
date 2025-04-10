'use server';
async function searchFAQ(tab: string, categoryId?: string, question?: string) {
  let params = { limit: '10', offset: '0', tab };

  params = { ...params, ...{ tab } };
  if (question) {
    params = { ...params, ...{ question } };
  }
  if (categoryId) {
    params = { ...params, ...{ faqCategoryID: categoryId } };
  }

  const queryString = new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/faq?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
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
async function searchFAQuestion(prevState: any, queryData: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/faq?${new URLSearchParams(queryData).toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
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

async function getCategories(tab: string) {
  const params = { tab };
  const queryString = new URLSearchParams(params).toString();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/faq/category?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
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

export { searchFAQ, getCategories, searchFAQuestion };
