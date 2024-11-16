import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/ThemeSlice";
import { RootState } from "../../Redux/store";

const NavControl: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`w-full ${
        theme === "light" ? "bg-white" : "bg-stone-700"
      } rounded-b-[35px]`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <button
          onClick={handleToggle}
          className={`text-3xl ${
            theme === "light" ? "text-black" : "text-white"
          } flex`}
        >
          {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-slate-400 to-green-600">
          Mini Menu
        </h1>
        <select
          name=""
          id=""
          className={`text-xl rounded-lg px-2 ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-stone-800 text-white"
          } outline-none`}
        >
          <option value="" className="">
            English
          </option>
          <option value="" className="">
            Persian
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavControl;
