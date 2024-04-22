import SingleCartItem from "../../components/SingleCartItem/SingleCartItem";
import { getStoredCart } from "../../utilities/localStorage";

const ShoppingCart = () => {
  const allStoredCart= getStoredCart()
  console.log(Object.entries(allStoredCart));
  
  return (
    <div className="container">

      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black dark:text-white">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black dark:text-white ">
                3 Items
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* // Single Shopping Item  */}
            <SingleCartItem></SingleCartItem>
            <SingleCartItem></SingleCartItem>
            <SingleCartItem></SingleCartItem>

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
      </div>

    </div>
  );
};

export default ShoppingCart;
