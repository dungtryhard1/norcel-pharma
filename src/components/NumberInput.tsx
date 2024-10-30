import React, { useEffect, useState } from "react";
import { addToCart, decreaseCart } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { CartItem } from "../redux/slice/cartSlice";
import { InputNumber } from "antd";

interface NumberInputProps {
  inputValue: number;
  cartItem: CartItem;
}

const NumberInput: React.FC<NumberInputProps> = ({ inputValue, cartItem }) => {
  const [value, setValue] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const handleIncrement = (value: number) => {
    if (value < 99) {
      setValue((prev) => prev + 1);
      dispatch(addToCart(cartItem));
    }
  };

  const handleDecrement = () => {
    setValue((prev) => prev - 1);
    dispatch(decreaseCart(cartItem));
  };

  const handleChange = (newValue: number | null) => {
    if (newValue !== null && typeof newValue === "number") {
      const difference = newValue - value;
      setValue(newValue);

      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          dispatch(addToCart(cartItem));
        }
      } else if (difference < 0) {
        for (let i = 0; i < -difference; i++) {
          dispatch(decreaseCart(cartItem));
        }
      }
    }
  };

  return (
    <div className="flex items-center rounded-md">
      <button
         className={`rounded-l-md border border-[#9CA4AB] px-3 py-1 ${value <= 1 ? "cursor-not-allowed" : "hover:bg-gray-300"}`}
        onClick={handleDecrement}
        disabled={value <= 1}
      >
        -
      </button>
      <InputNumber
        min={1}
        max={99}
        value={value}
        onChange={handleChange}
        className="h-full w-10 rounded-none border-b border-t border-[#9CA4AB] p-[1px] text-center outline-none"
      />
      <button
        className={`rounded-r-md border border-[#9CA4AB] px-3 py-1 ${value >= 99 ? "cursor-not-allowed" : "hover:bg-gray-300"}`}
        onClick={() => handleIncrement(value)}
        disabled={value >= 99}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
