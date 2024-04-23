/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import SingleCartItem from "../../components/SingleCartItem/SingleCartItem";
import { getStoredCart } from "../../utilities/localStorage";
import { useGetSelectedProductMutation } from "../../features/product/productApi";
import { useEffect } from "react";

const ShoppingCart = () => {
  const allStoredCart = getStoredCart();
  const initialStored = Object.entries(allStoredCart);

  const filterLs = [];
  if (initialStored?.length > 0) {
    for (let i = 0; i < initialStored.length; i++) {
      filterLs.push({
        id: initialStored[i][0].split(">")[0],
        size: initialStored[i][0].split(">")[1],
        amount: initialStored[i][1],
        img: initialStored[i][0].split(">")[2],
        name: initialStored[i][0].split(">")[3],
        price: initialStored[i][0].split(">")[4],
      });
    }
  }

  let findDatabase = [];

  const keys = Object.keys(allStoredCart);

  if (keys.length > 0) {
    for (const element of keys) {
      findDatabase.push(element.split("-")[0]);
    }
  }

  const [getSelectedProduct, { data, isLoading, isError, isSuccess }] =
    useGetSelectedProductMutation();

  useEffect(() => {
    getSelectedProduct(findDatabase);
  }, [getSelectedProduct]);

  return (
    <div>
      <div className="flex cursor-cell hover:bg-gray-200 hover:text-gray-500 flex-col items-center justify-center w-full pb-4 bg-gray-500 text-gray-200 h-32 lg:h-52 duration-300">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Shopping Cart</h1>

      </div>
      <div className="container">
        <div className="py-8">
          {/* // need to modify these two line of code  col-span-12 md:col-span-4 col-span-12 md:col-span-8*/}

          <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
            <div className="col-span-12 md:col-span-4">
              <p className="font-normal text-lg leading-8 text-gray-400">
                Product Details
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-5">
                <div className="col-span-2">
                  <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                    Quantity
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                    Size
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                    Total
                  </p>
                </div>
              </div>
            </div>
          </div>

          {filterLs.map((item, index) => (
            <SingleCartItem key={index} data={item} />
          ))}
        </div>
        {/* // purchase button  */}
        <div>
          <div className="bottom-16 md-block border hover:text-gray-200 text-indigo-600  border-indigo-600 flex rounded-lg justify-center bg-indigo-100 cursor-pointer shadow-md hover:bg-indigo-600 transition duration-500">
            <p className="text-xl align-middle p-4 font-semibold">
              ক্যাশ অন ডেলিভারি করিতে ক্লিক করুন
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end mt-8">
          <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-50 dark:hover:text-indigo-600 dark:text-indigo-300">
            Add Coupon Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                stroke="#4F46E5"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
