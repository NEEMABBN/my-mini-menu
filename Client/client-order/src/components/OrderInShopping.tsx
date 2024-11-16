import React from "react";
import { useCart } from "./CartContext";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const OrderInShopping: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { cart, removeFromCart } = useCart();

  return (
    <div className="w-1/2 overflow-hidden px-2">
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="w-full flex items-center gap-5">
          {cart.map((item, index) => (
            <div key={index} className="w-[70px] flex flex-col items-center">
              <div className="w-full relative flex items-center justify-center">
                <div className="absolute top-0 left-[-5px] bg-green-600 rounded-full px-[8px]">
                  <span className="text-white text-sm">{item.quantity}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-[-2px] right-[-6px] text-red-600 text-2xl"
                >
                  <MdDelete />
                </button>
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-[70px] h-[70px] rounded-full"
                />
              </div>
              <h3 className="text-sm font-bold text-green-600">
                $ {(item.price * item.quantity).toFixed(2)}
              </h3>
              <h2
                className={`font-bold ${
                  theme === "light" ? "text-black" : "text-stone-300"
                }`}
              >
                {item.category}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderInShopping;
