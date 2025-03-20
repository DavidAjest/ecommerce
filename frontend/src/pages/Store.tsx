import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <div className="container  mx-auto px-4 mt-30">
        <div className="grid md:grid-cols-3 gap-20 grid-rows-3 sm:grid-cols-1">
          {storeItems.map((item) => {
            return <StoreItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
