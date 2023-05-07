import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { getSortedProducts } from "../redux/features/products-slice";

export default memo(
  function SortModal({ showModal, modalRef, setShowModal }) {
    const dispatch = useDispatch();

    const handleSortProducts = (sort) => {
      dispatch(getSortedProducts(sort));
      setShowModal(false);
    };

    return (
      <div
        className=" w-[200px] h-0 overflow-hidden absolute left-0 top-[60px] bg-primary-black flex items-start flex-col px-4 transition-all duration-150"
        style={{ height: showModal ? "130px" : null }}
        ref={modalRef}
      >
        <div
          className=" h-[40px] w-full flex items-center cursor-pointer"
          onClick={() => handleSortProducts("default")}
        >
          <p className=" text-white">Default</p>
        </div>
        <div
          className=" h-[40px] flex items-center cursor-pointer"
          onClick={() => handleSortProducts("lower")}
        >
          <p className=" text-white">Lower to higher</p>
        </div>
        <div
          className=" h-[40px] flex items-center cursor-pointer"
          onClick={() => handleSortProducts("higher")}
        >
          <p className=" text-white">Higher to lower</p>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps?.showModal === nextProps?.showModal) {
      return true;
    }
    if (prevProps?.modalRef?.current === nextProps?.modalRef?.current) {
      return true;
    }
    return false;
  }
);
