import { useState, useEffect } from 'react';

export function useScroll(props: boolean) {
  const [state, dispatch] = useState<boolean>(props);

  function handleScrollTop() {
    const scrollEl = document.querySelector('body');
    scrollEl?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const scrollEl = document.querySelector('body');
    if (!scrollEl) return;
    let timer: null | number = null;
    if (timer) {
      clearTimeout(timer);
    }
    const onScroll = () => {
      timer = window.setTimeout(() => {
        if (scrollEl.scrollTop > 1) dispatch(true);
        else dispatch(false);
      }, 100);
    };

    scrollEl.addEventListener('scroll', onScroll);
    return () => scrollEl.removeEventListener('scroll', onScroll);
  }, []);
  return { state, handleScrollTop };
}
