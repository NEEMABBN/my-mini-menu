import React from "react";
import { FaSackXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface FinalizationFactorModal {
  isOpen: boolean;
  onClose: () => void;
  cart: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  total: number;
  resetCart: () => void;
}

const FinalizationFactor: React.FC<FinalizationFactorModal> = ({
  cart,
  isOpen,
  onClose,
  total,
  resetCart,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  if (!isOpen) return null;
  const handleNewOrder = () => {
    resetCart();
    onClose();
  };
  return (
    <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#FFFFFF47] backdrop-blur-[5.5px] flex items-center justify-center">
      <div
        className={`w-[40%] flex flex-col items-center relative ${
          theme === "light" ? "bg-white" : "bg-stone-700"
        } p-9 rounded-2xl gap-5 shadow-2xl`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-6 text-2xl text-red-600 hover:scale-150 transition-all"
        >
          <FaSackXmark />
        </button>
        <h2 className="text-3xl font-extrabold text-green-700">
          Order Confirmation
        </h2>
        <p className="font-bold text-lg">I hope to see U again :)</p>
        <div className="w-full flex flex-col items-start gap-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center justify-between border rounded-full px-2 py-1 shadow"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-green-600">{item.name}</h3>
                  <span
                    className={
                      theme === "light" ? "text-gray-600" : "text-stone-300"
                    }
                  >
                    {item.quantity} X
                  </span>
                </div>
              </div>
              <span className="font-bold">$ {item.price}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row-reverse items-center justify-between">
          <button
            onClick={handleNewOrder}
            className={`bg-green-600 ${
              theme === "light" ? "text-white" : "text-slate-700"
            } border-solid border-2 border-green-600 ${
              theme === "light" ? "hover:bg-white" : "hover:bg-stone-700"
            } hover:text-green-600 transition-all font-bold py-2 px-5 rounded-full`}
          >
            New Order
          </button>
          <div className="flex items-center gap-2">
            <h3
              className={`${
                theme === "light" ? "text-gray-700" : "text-stone-300"
              } font-extrabold`}
            >
              Orders Total :{" "}
            </h3>
            <span className="text-green-600 font-bold">
              {" "}
              $ {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizationFactor;
