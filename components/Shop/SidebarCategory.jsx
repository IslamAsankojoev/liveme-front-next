import React from 'react';
import axios from 'axios';
import { CategiryItem } from '../index';
import style from './SidebarCategory.module.scss';
import { useRouter } from 'next/router.js';
import { useSelector } from 'react-redux';

export default function SidebarCategory({ setCategory, setPage }) {
  const [categories, setCategories] = React.useState([]);
  const lang = useSelector((state) => state.lang.lang);

  const onClickCategory = (category) => {
    setCategory(category);
  };
  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/category/`, {
        headers: {
          'Accept-Language': localStorage.getItem('lang'),
        },
      })
      .then((res) => setCategories(res.data));
  }, [lang]);
  return (
    <div className={`sidebar-categories ${style.sidebar_categories}`}>
      <div className="head">Категории</div>
      <ul className="main-categories">
        <li
          style={{ cursor: 'pointer' }}
          className={`main-nav-list ${style.cat_item}`}
          onClick={() => {
            onClickCategory('');
          }}>
          <a>
            <span className="lnr lnr-arrow-right"></span>
            Все
            {/* <span className="number"></span> */}
          </a>
        </li>
        {categories?.map((category) => {
          return (
            <CategiryItem
              key={category.id + category.title}
              {...category}
              onClick={onClickCategory}
            />
          );
        })}
      </ul>
    </div>
  );
}
