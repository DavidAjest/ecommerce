import { useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import useShoppingCart from "../Hooks/useShoppingCart";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const { state } = useShoppingCart();
  const cartItems = state.cartItems;

  const linksStyle =
    "text-grey-100 font-bold text-sm px-2 py-1  border-grey-100 hover: bg-grey-100 hover:text-gray-800 rounded-lg transition duration-300";
  const links = (
    <ul className="flex flex-col md:flex-row">
      <li>
        <a className={linksStyle} href="/home">
          Home
        </a>
      </li>
      <li>
        <a className={linksStyle} href="/store">
          Store
        </a>
      </li>
      <li>
        <a className={linksStyle} href="/about">
          About
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-500 text-white fixed w-full top-0">
      <div className="flex flex-row justify-between items-center max-w-9/10 mx-auto h-16 ">
        <div className="flex flex-row items-center ">
          <div className="font-bold">brand name</div>
        </div>
        <div className="hidden md:flex">
          <div className="px-10  ">
            <button
              onClick={() => setIsShoppingCartOpen(!isShoppingCartOpen)}
              className="cursor-pointer flex flex-row items-center  bg-blue-500 h-12 w-12 rounded-full relative "
            >
              <img
                className="h-7 max-h-full mx-auto "
                src="./cart.svg"
                alt=""
              />
              <div className=" h-4 w-4 bg-pink-500 rounded-full absolute bottom-0 flex justify-center mx-auto items-center transform translate-x-0 translate-y-1">
                {cartItems.length}
              </div>
            </button>
          </div>
          <div className="flex items-center">{links} </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>icon</button>
        </div>
      </div>

      {isOpen && <div className="md:hidden">{links}</div>}

      {isShoppingCartOpen && (
        <div>
          <ShoppingCart />
        </div>
      )}
    </nav>
  );
}
