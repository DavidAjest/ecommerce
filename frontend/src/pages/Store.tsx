import { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem";

import axios from "axios";

export function Store() {
  type StoreItem = {
    _id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };

  const [items, setItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fechedItems = await axios.get("http://localhost:5000/items");
      setItems(fechedItems.data.items);
    };
    try {
      fetchItems();
    } catch (e: unknown) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="container  mx-auto px-4 mt-30">
        <div className="grid md:grid-cols-3 gap-20 grid-rows-3 sm:grid-cols-1">
          {items &&
            items.map((item: StoreItem) => {
              return <StoreItem key={item._id} {...item} />;
            })}
        </div>
      </div>
    </>
  );
}
