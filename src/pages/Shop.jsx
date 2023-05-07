import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import MainContainer from "../components/ui/MainContainer";
import { BsSortDownAlt } from "react-icons/all";
import {
  getUniqueCategories,
  getUniqueStorages,
} from "../redux/features/shop-slice";
import SortModal from "../components/SortModal";
import CheckboxContainer from "../components/ui/CheckboxContainer";

export default function Shop() {
  const dispatch = useDispatch();
  const { productItems } = useSelector((state) => state.products);
  const { uniqueCategories, uniqueStorages } = useSelector(
    (state) => state.shop
  );
  const modalRef = useRef();
  const [storageCheck, setStorageCheck] = useState([]);
  const [categoryCheck, setCategoryCheck] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleCloseOnClickOutsite = (e) => {
      if (modalRef?.current && !modalRef?.current?.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mouseup", handleCloseOnClickOutsite);
    return () =>
      document.removeEventListener("mouseup", handleCloseOnClickOutsite);
  }, []);

  useEffect(() => {
    dispatch(getUniqueCategories());
    dispatch(getUniqueStorages());
  }, [dispatch]);

  const handleShowModal = () => setShowModal(true);
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
    <MainContainer>
      <div className=" grid grid-cols-[1fr_4fr]">
        <div className=" flex items-start flex-col gap-4">
          <div className=" w-full flex flex-col items-start gap-2 pr-20">
            <div>
              <p className=" text-lg uppercase font-medium">Category</p>
            </div>
            <div className=" w-full flex items-start flex-col gap-2">
              {uniqueCategories?.map((category, index) => {
                return (
                  <CheckboxContainer
                    key={index}
                    item={category}
                    handler={handleChangeCategory}
                  />
                );
              })}
            </div>
          </div>
          <div className=" w-full flex flex-col items-start gap-2 pr-20">
            <div>
              <p className=" text-lg uppercase font-medium">Storages</p>
            </div>
            <div className=" w-full flex flex-col items-start gap-2">
              {uniqueStorages?.map((storage, index) => {
                return (
                  <CheckboxContainer
                    key={index}
                    item={storage}
                    handler={handleChangeStorage}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center flex-col gap-4">
          <div className=" w-full h-[60px] px-5 flex justify-start items-center bg-primary-black relative">
            <div
              className=" flex items-center gap-2 text-white cursor-pointer"
              onClick={handleShowModal}
            >
              <BsSortDownAlt className=" text-xl" />
              <p className=" text-md">Sort products</p>
            </div>
            <SortModal
              showModal={showModal}
              setShowModal={setShowModal}
              modalRef={modalRef}
            />
          </div>
          <div className=" w-full grid grid-cols-4 gap-4">
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
      </div>
    </MainContainer>
  );
}
