import React, { useState } from "react";
import { useCart } from "./CartContext";
import FinalizationFactor from "../Sections/Factor/FinalizationFactor";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const Finalization: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { cart, getTotal, resetCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinalizeOrder = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="flex flex-row-reverse items-center gap-10">
          <button
            onClick={handleFinalizeOrder}
            className={`bg-green-600 ${
              theme === "light" ? "text-white" : "text-stone-700"
            } font-extrabold text-lg py-7 px-5 rounded-full border-solid border-2 border-green-600 ${
              theme === "light" ? "hover:bg-white" : "hover:bg-stone-700"
            } hover:text-green-600 transition-all`}
          >
            Done
          </button>
          <div className="flex flex-col items-center gap-3">
            <h3
              className={`text-xl font-bold ${
                theme === "light" ? "text-gray-600" : "text-stone-300"
              } underline-offset-[10px] underline`}
            >
              Order Total
            </h3>
            <span
              className={`${
                theme === "light" ? "text-green-800" : "text-green-600"
              } font-bold`}
            >
              $ {getTotal().toFixed(2)}
            </span>
          </div>
        </div>
      )}
      <FinalizationFactor
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cart={cart}
        total={getTotal()}
        resetCart={resetCart}
      />
    </div>
  );
};

export default Finalization;
