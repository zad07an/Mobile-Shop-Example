import React from "react";

export default function CheckboxContainer({ item, handler }) {
  return (
    <div className=" w-full flex items-center gap-2 py-1 rounded-sm px-3 bg-primary-black">
      <input
        type="checkbox"
        id={item}
        value={item}
        onChange={handler}
        className=" w-4 h-4 accent-primary-orange"
      />
      <label
        htmlFor={item}
        className=" w-full h-full cursor-pointer text-white"
      >
        {item[0]?.toUpperCase() + item?.slice(1)}
      </label>
    </div>
  );
}
