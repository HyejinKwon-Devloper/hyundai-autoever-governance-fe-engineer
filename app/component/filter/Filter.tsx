'use client';
import Styles from '@/app/component/filter/filter.module.css';
import { Suspense } from 'react';

interface ICategory {
  categoryID: string;
  name: string;
}
export default function Filter(props: {
  categoriesOfTab: ICategory[];
  current: string;
  handleCategory: (value: string) => void;
}) {
  const { current, handleCategory, categoriesOfTab } = props;

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
