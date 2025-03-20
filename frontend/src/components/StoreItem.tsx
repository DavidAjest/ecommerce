type StoreItemPorps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemPorps) {
  const quantity = 0;
  const handleAddToCart = () => {};
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
        <div className="flex flex-row justify-center mt-auto ">
          {/* <button className="cursor-pointer  bg-green-500 size-10 rounded-lg">
            -1
          </button>
          <span className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg">
            0
          </span>
          <button className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg">
            +1
          </button> */}

          {quantity === 0 ? (
            <button
              onClick={() => handleAddToCart()}
              className="cursor-pointer ml-5 bg-green-500 w-full  rounded-lg"
            >
              Add To Cart
            </button>
          ) : (
            <div>
              <button className="cursor-pointer  bg-green-500 size-10 rounded-lg">
                -1
              </button>
              <span className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg">
                0
              </span>
              <button className="cursor-pointer ml-5 bg-green-500 size-10 rounded-lg">
                +1
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
