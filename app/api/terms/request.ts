async function getTerms(termsId: string) {
  const params = { termsClassID: termsId };

  const queryString = new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/terms?${queryString}`,
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

export { getTerms };
