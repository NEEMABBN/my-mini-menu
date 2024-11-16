import React from "react";
import NavControl from "./Sections/navbar/NavControl";
import MyMenu from "./Sections/menu/MyMenu";
import OrdersList from "./Sections/order/OrdersList";
import { CartProvider } from "./components/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`w-full ${
        theme === "light" ? "bg-gray-200" : "bg-stone-800"
      } flex flex-col items-center h-screen`}
    >
      <NavControl />
      <CartProvider>
        <MyMenu />
        <OrdersList />
      </CartProvider>
    </div>
  );
};

export default App;
