'use client';
import Styles from '@/app/component/filter/filter.module.css';
import { useState, useEffect, Suspense } from 'react';
import { categories } from '@/app/api/faq/route';

interface ICategory {
  categoryID: string;
  name: string;
}

export default function Filter(props: { category: string }) {
  const [checked, setCheckValue] = useState('');
  const [categoriesOfTab, setCategories] = useState<ICategory[]>([]);
  const { category } = props;

  useEffect(() => {
    async function fetchCategory() {
      const data = await categories(category);
      setCategories(data);
    }
    fetchCategory();
  }, [category]);

  function handleCheckedCategory(value: string) {
    setCheckValue(value);
  }

  return (
    <div className={Styles.filter}>
      <Suspense fallback={<p>Loading categories...</p>}>
        <div key="">
          <label onClick={() => handleCheckedCategory('')}>
            <input
              type="radio"
              name="category"
              value={''}
              checked={checked === ''}
              onChange={() => handleCheckedCategory('')}
            />
            <i>전체</i>
          </label>
        </div>
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
                  checked={checked === category.categoryID}
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
