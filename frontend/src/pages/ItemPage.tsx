import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useShoppingCart from "../Hooks/useShoppingCart";

export default function ItemPage() {
  const { id: _id } = useParams();
  interface Item {
    quantity: number;
    imageUrl: string;
    name: string;
    price: number;
  }

  const [item, setItem] = useState<Item | null>(null);
  const { dispatch } = useShoppingCart();
  // const { cartItems } = state;

  useEffect(() => {
    const fetchItemById = async () => {
      const fechedItemById = await axios.get(
        `http://localhost:5000/items/${_id}`
      );
      setItem(fechedItemById.data.item);
    };
    try {
      fetchItemById();
    } catch (e: unknown) {
      console.log(e);
    }
  }, [_id]);

  const handleDecreaseAmount = () => {
    if ((item?.quantity || 0) === 1) {
      console.log("im in the remove");

      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { _id } });
    } else {
      console.log("im in the DECREASE");

      dispatch({
        type: "DECREASE_AMOUNT",
        payload: { _id },
      });
    }
    setItem((prevItem) => {
      if (!prevItem) return null;
      return { ...prevItem, quantity: prevItem.quantity - 1 };
    });
  };

  const handleIncreaseAmount = () => {
    setItem((prevItem) => {
      if (!prevItem) return null; // Handle the case where prevItem is null
      return { ...prevItem, quantity: prevItem.quantity + 1 };
    });
    dispatch({
      type: "INCREASE_AMOUNT",

      payload: { _id },
    });
  };

  return (
    <>
      {item && (
        <div className="container mx-auto px-4 mt-30">
          <div className="grid md:grid-cols-[9fr_8fr] gap-5 grid-rows-2 sm:grid-cols-1">
            {/*  */}

            <div className="bg-green-500 h-150 flex flex-col  justify-center items-center">
              <img src={item.imageUrl} className="w-100 h-100 " alt="" />
            </div>

            {/*  */}
            <div className="bg-blue-500 flex flex-col items-center h-150">
              <div className="p-20">
                <h1>{item.name}</h1>
                <h2>{item.price}$</h2>
              </div>
              <div className="p-20">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae culpa repudiandae ut veniam? Cupiditate consequatur
                  illo est ea fuga, dicta non, incidunt facere temporibus quo
                  eaque ratione numquam unde maiores?
                </p>
              </div>

              <div className="flex flex-row justify-center mt-auto ">
                {(item.quantity || 0) === 0 ? (
                  <button
                    onClick={() => handleIncreaseAmount()}
                    className="cursor-pointer ml-5 bg-green-500 w-full rounded-lg"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => handleDecreaseAmount()}
                      className="cursor-pointer  bg-green-500 size-10 rounded-lg"
                    >
                      -1
                    </button>
                    <span className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg"></span>
                    <button
                      onClick={() => handleIncreaseAmount()}
                      className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg"
                    >
                      +1
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
