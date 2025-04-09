'use client';
import Styles from '@/app/component/filter/filter.module.css';
import { useState, useEffect, Suspense } from 'react';
import { categories } from '@/app/api/faq/route';

interface ICategory {
  categoryID: string;
  name: string;
}

export default function Filter(props: {
  tab: string;
  current: string;
  handleCategory: (value: string) => void;
}) {
  const { current, handleCategory, tab } = props;
  const [categoriesOfTab, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      const data = await categories(tab);
      const result = [{ categoryID: '', name: '전체' }, ...data];
      setCategories(result);
      handleCategory('');
    }
    fetchCategory();
  }, [tab]);

  function handleCheckedCategory(value: string) {
    handleCategory(value);
  }

  return (
    <div className={Styles.filter}>
      <Suspense fallback={<p>Loading categories...</p>}>
        {categoriesOfTab?.map((category) => {
          return (
            <div key={category.categoryID}>
              <label
                onChange={() => handleCheckedCategory(category.categoryID)}
              >
                <input
                  type="radio"
                  name="category"
                  value={category.categoryID}
                  onChange={() => handleCheckedCategory(category.categoryID)}
                  checked={current === category.categoryID}
                />
                <i>{category.name}</i>
              </label>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}
