import {useState} from "react"
const SingleCartItem = () => {
  const [count, setCount]= useState(0)


  
  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const addCount = () => {
    setCount((prev) => prev + 1);

  };

  return (
    <div>
      <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200">
        <div className="w-full md:max-w-[126px]">
          <img
            src="https://pagedone.io/asset/uploads/1701162866.png"
            alt="perfume bottle image"
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <div className="md:col-span-2">
            <div className="flex flex-col max-[500px]:items-center gap-3">
              <h6 className="font-semibold text-base leading-7 text-black dark:text-gray-200">
                Musk Rose Cooper
              </h6>
              <h6 className="font-normal text-base leading-7 text-gray-400">
                Perfumes
              </h6>
              <h6 className="font-semibold text-base leading-7 text-indigo-600 dark:text-indigo-300">
                $120.00
              </h6>
            </div>
          </div>
           {/* //  */}
           <div className="flex">
            <span
              onClick={minusCount}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border text-2xl dark:bg-gray-600 border-gray-300 border-r-0 w-10 h-10 flex items-center justify-center pb-1"
            >
              -
            </span>
            <input
              id="counter"
              aria-label="input"
              className="border text-black text-xl font-semibold border-gray-300 max-h-10 text-center w-14 pb-1"
              type="text"
              value={count}
              onChange={(e) => e.target.value}
            />
            <span
              onClick={addCount}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-2xl dark:bg-gray-600 border border-gray-300 border-l-0 w-10 h-10 flex items-center justify-center pb-1 "
            >
              +
            </span>
          </div>
           {/* / */}
          <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
            <p className="font-bold text-lg leading-8 text-indigo-600 text-center dark:text-indigo-300">
              $240.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
