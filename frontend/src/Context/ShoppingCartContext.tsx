import { createContext, useReducer, ReactNode } from "react";
import { CartItem } from "../components/CartItem";

type CartItem = Partial<{
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}>;

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

type ContextType = {
  state: ShoppingCartState;
  dispatch: React.Dispatch<ShopingCartAction>;
};

export const ShoppingCartContext = createContext<ContextType | undefined>(
  undefined
);

const ShoppingCartReducer = (
  state: ShoppingCartState,
  action: ShopingCartAction
) => {
  switch (action.type) {
    case "INCREASE_AMOUNT": {
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: (item.quantity || 0) + 1 };
        } else {
          return item;
        }
      });
      return { ...state, cartItems: newCartItems };
    }
    case "DECREASE_AMOUNT": {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id && (item.quantity || 0) > -1) {
          return { ...item, quantity: (item.quantity || 0) - 1 };
        } else {
          return item;
        }
      });
      return { ...state, cartItems: newCartItems };
    }
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "GET_ITEM":
      return { cartItems: [...state.cartItems, action.payload] };

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [state, dispatch] = useReducer(ShoppingCartReducer, {
    cartItems: [],
  });

  console.log(state);
  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
