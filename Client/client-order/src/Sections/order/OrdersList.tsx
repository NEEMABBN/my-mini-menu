import React from "react";
import OrderInShopping from "../../components/OrderInShopping";
import Finalization from "../../components/Finalization";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const OrdersList: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`fixed z-10 bottom-0 w-full flex items-center justify-between ${
        theme === "light" ? "bg-white" : "bg-stone-700"
      } rounded-t-[30px] py-1 px-7`}
    >
      <OrderInShopping />
      <Finalization />
    </div>
  );
};

export default OrdersList;
