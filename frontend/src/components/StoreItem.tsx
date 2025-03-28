import useShoppingCart from "../Hooks/useShoppingCart";
type StoreItemPorps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
}: // quantity,
StoreItemPorps) {
  const { state, dispatch } = useShoppingCart();
  const { cartItems } = state;

  const handleIncreaseAmount = () => {
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: { id, name, price, imgUrl },
    });
  };

  const handleDecreaseAmount = () => {
    if (cartItems.find((item) => item.id === id && item.quantity === 1)) {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { id } });
    } else {
      dispatch({ type: "DECREASE_AMOUNT", payload: { id } });
    }
  };
  // console.log("this is inssdsdsdsded REMOVE", cartItems);
  return (
    <div className="flex flex-col bg-orange-500 overflow-hidden rounded-lg shadow-md ">
      <div className="overflow-hidden">
        <img
          className=" w-130 object-cover hover:scale-110 duration-200"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col  items-center py-5">
        <span className="text-3xl font-bold py-3 px-3 hover:underline  ">
          {name}
        </span>
        <span className=" text-2xl block text-gray-700 py-3 px-3">
          Recipe By mario
        </span>
        <span className="font-bold text-1xl block text-gray-700 py-3 px-3">
          13$
        </span>
        {/*  */}
        <div className="flex flex-row justify-center mt-auto ">
          {!cartItems.find(
            (item) => item.id === id && (item.quantity || 0) > 0
          ) ? (
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
              <span className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg">
                {cartItems.map((item) => {
                  if (item.id === id) return item.quantity;
                })}
              </span>
              <button
                onClick={() => handleIncreaseAmount()}
                className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg"
              >
                +1
              </button>
            </div>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
}
