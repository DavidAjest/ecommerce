import { createContext, useReducer, ReactNode } from "react";

const ShoppingCartContext = createContext({});

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartState = {
  cartItems: CartItem[];
};

type ShopingCartAction = {
  type: string;
  payload: CartItem;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartReducer = (
  state: ShoppingCartState,
  action: ShopingCartAction
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_ITEM":
      return { cartItems: [...state.cartItems, action.payload] };
    case "GET_ITEM":
      return { cartItems: [...state.cartItems, action.payload] };

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [state, dispatch] = useReducer(ShoppingCartReducer, { cartItems: [] });

  return (
    <ShoppingCartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
