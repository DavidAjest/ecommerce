import useShoppingCart from "../Hooks/useShoppingCart";

export function CartItem() {
  const { state, dispatch } = useShoppingCart();
  const cartItems = state.cartItems;
  // console.log("this is from cart item ", state.cartItems);

  return (
    <>
      {cartItems?.map((item) => (
        <div key={item._id}>
          <div>
            <li key={item._id} className="flex py-6">
              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  // alt={item.imageAlt}
                  src={item.imageUrl}
                  className="size-full object-cover"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      {/* removed href={item.href} */}
                      <a>{item.name}</a>
                    </h3>
                    <p className="ml-4">{item.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.quantity}x</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">{/* Qty {item.quantity} */}</p>

                  <div className="flex">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM_FROM_CART",
                          payload: { _id: item._id },
                        })
                      }
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      ))}
    </>
  );
}
