import { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

export default function useShoppingCart() {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart Context must be uded within the scope of ShoppingCartCotnextProvider"
    );
  }

  return context;
}
