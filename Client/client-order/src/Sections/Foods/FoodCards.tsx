import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useCart } from "../../components/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
};

const FoodCards: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:2081/")
      .then((Response) => Response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
      });
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      {products.map((item) => {
        const cartItem = cart.find((i) => i.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        const handleAddToCart = () => {
          addToCart(item);
        };

        return (
          <SwiperSlide key={item.id} className="py-4">
            <div
              className={`w-full ${
                theme === "light" ? "bg-white" : "bg-stone-700"
              } flex flex-col p-4 gap-3 rounded-2xl`}
            >
              <img
                src={item.image}
                alt={`some image about ${item.category}`}
                className="w-full h-[300px] rounded-2xl"
              />
              <h2
                className={`text-xl ${
                  theme === "light" ? "text-black" : "text-stone-300"
                } font-bold`}
              >
                {item.name}
              </h2>
              <div className="w-full flex justify-between px-4">
                <h3 className="text-center text-green-600 text-lg font-bold">
                  $ {item.price}
                </h3>
                <h3
                  className={
                    theme === "light" ? "text-gray-500" : "text-green-200"
                  }
                >
                  {item.category}
                </h3>
              </div>
              {quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-green-200 font-bold text-green-800 text-lg w-full py-[10px] rounded-2xl"
                >
                  Add To Order
                </button>
              ) : (
                <div className="w-full rounded-2xl py-2 px-4 bg-green-200 flex items-center justify-between">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={quantity <= 1}
                    className="bg-green-600 text-white p-[7px] text-lg rounded-full flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-green-800 font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-600 text-white p-[7px] text-lg rounded-full flex items-center justify-center"
                  >
                    <FaPlus />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FoodCards;
