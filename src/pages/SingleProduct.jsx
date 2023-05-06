import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/features/product-slice";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productItem } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch]);

  return (
    <div className=" w-full px-[60px] pt-10 grid grid-cols-2">
      <div>
        <img src={productItem?.thumbnail} alt="" />
      </div>
      <div className=" flex flex-col items-start gap-4">
        <div>
          <p className=" text-2xl">{productItem?.title}</p>
        </div>
        <div>
          <p className=" font-medium">
            Price: {productItem?.price?.toLocaleString()}{" "}
            <span className=" text-purple-700">AMD</span>
          </p>
        </div>
        <div>
          <p>{productItem?.description}</p>
        </div>
      </div>
    </div>
  );
}
