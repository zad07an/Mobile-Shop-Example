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
          <p className=" text-3xl">{productItem?.title}</p>
        </div>
        <div>
          <p className="text-gray-600">{productItem?.description}</p>
        </div>
        <div>
          <p className=" text-xl">
            Price: {productItem?.price?.toLocaleString()}{" "}
            <span className=" text-orange-500 font-medium">AMD</span>
          </p>
        </div>
        <div>
          <p className=" text-xl flex items-center gap-2">
            Color:
            <div
              className=" w-5 h-5 rounded-sm border border-gray-300"
              style={{ background: productItem?.color }}
            ></div>
            <p>{productItem?.color_name}</p>
          </p>
        </div>
        <div>
          <p className=" text-xl">Storage: {productItem?.storage}</p>
        </div>
      </div>
    </div>
  );
}
