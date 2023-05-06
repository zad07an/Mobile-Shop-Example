import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

export default function Shop() {
  const { productItems } = useSelector((state) => state.products);
  const [storageCheck, setStorageCheck] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState([]);

  const uniqueCategories = [
    ...new Set(productItems?.map((item) => item?.category)),
  ];
  const uniqueStorages = [
    ...new Set(productItems?.map((item) => item?.storage)),
  ];

  const handleChangeStorage = (e) => {
    const { value, checked } = e.target;
    checked
      ? setStorageCheck((prev) => [...prev, value])
      : setStorageCheck(storageCheck?.filter((storage) => storage !== value));
  };

  const handleChangeCategory = (e) => {
    const { value, checked } = e.target;
    checked
      ? setCategoryCheck((prev) => [...prev, value])
      : setCategoryCheck(
          categoryCheck?.filter((category) => category !== value)
        );
  };

  return (
    <section className=" w-full flex items-center px-[60px] flex-col">
      <div className=" grid grid-cols-[1fr_3fr]">
        <div>
          <div>
            <div>
              <p>Category</p>
            </div>
            <div>
              {uniqueCategories?.map((category, index) => {
                return (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={category}
                      value={category}
                      onChange={handleChangeCategory}
                    />
                    <label htmlFor={category}>
                      {category[0]?.toUpperCase() + category?.slice(1)}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div>
              <p>Storages</p>
            </div>
            <div>
              {uniqueStorages?.map((storage, index) => {
                return (
                  <div key={index} className=" flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={storage}
                      id={storage}
                      onClick={handleChangeStorage}
                    />
                    <label htmlFor={storage}>{storage}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-4 py-4">
          {productItems
            ?.filter((item) =>
              categoryCheck.length
                ? item?.category ===
                  categoryCheck.find(
                    (categoryItem) => categoryItem === item?.category
                  )
                : storageCheck?.length
                ? item?.storage ===
                  storageCheck.find(
                    (storageItem) => storageItem === item?.storage
                  )
                : item
            )
            ?.map((item) => {
              return <Product key={item?.id} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
