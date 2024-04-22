/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { makeSizes } from "../../utils/sizes";
import { addCard } from "../../features/CardOrder/cardOrderSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToDb,
  findOne,
  reduceFromDb,
  getStoredCart,
} from "../../utilities/localStorage";

const DetailsContent = ({ desc }) => {
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const [selectSize, setSelectSize] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [warning , setWarning]= useState(false)

  const { id } = useParams();

  const {
    brand,
    category,
    description,
    discount,
    extra,
    extraInfo,
    price,
    productName,
    review,
  } = desc;

  const sizes = makeSizes(extra);
  console.log(count);

  // string to array info
  let newArr = [];
  if (review) {
    for (let el = 0; el < review; el++) {
      newArr.push(el);
    }
  }

  console.log(findOne(id));

  function counter(id) {
    return findOne(id) || 0;
  }
  let result = counter(id);
  console.log(result);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cardOrder);
  console.log(selector);

  const addCount = () => {
    setCount((prev) => prev + 1);
    addToDb(id);
  };

  const minusCount = () => {
    if (result > 0) {
      setCount((prev) => prev - 1);
      reduceFromDb(id);
    }
  };
  const handleSize = (value, index) => {
    console.log(index);
    setSelectSize(value);
    setSelectedIndex(index);
  };

  const details = { id, count:findOne(id), selectSize };

  const handlePurchase = () => {
    if(selectSize === null){
      setWarning(true)
    }else{
      setWarning(false)
      dispatch(addCard({ id, details }));
    }
  };



  return (
    <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
      <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600 dark:text-gray-400">
        {category}
      </p>
      <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4 dark:text-gray-200">
        {productName}
      </h2>

      {/* // total start  */}
      <div className=" flex flex-row justify-between  mt-5">
        <div className=" flex flex-row space-x-3 text-xl">
          {newArr.map((val) => (
            <FaStar key={val} />
          ))}
        </div>
        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
          22 reviews
        </p>
      </div>
      {/* price  */}
      <div className="flex flex-row gap-4 ">
        <p className=" font-semibold text-gray-400 line-through lg:text-xl text-md lg:leading-6 leading-5 mt-6 ">
          $ {price}
        </p>
        <span className="inline font-semibold, lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 font-bold">
          $ {discount}
        </span>
      </div>

      {/* sizes start */}
      <div className="flex flex-row gap-2 mt-4">
        {sizes.map((item, index) => (
          <div
            key={index}
            className={`${
              selectedIndex === index
                ? "transition border cursor-pointer hover:shadow-md font-bold bg-gray-800 text-gray-100 px-4 py-1 duration-100"
                : "transition border cursor-pointer hover:shadow-md px-4 py-1 duration-100"
            }`}
            onClick={() => handleSize(item, index)}
          >
            {item.replace(/\s/g, "").toUpperCase()}
          </div>
        ))}
      </div>
      {/*  sizes end  */}

      {/* // warning  */}
      <div style={warning ? {display:"block"}:{display:"none"}}>
        <p className="bg-red-200 border text-red-700 border-red-700 rounded-sm p-1 text-center mt-2 duration-100">
          Please Select Size
        </p>
      </div>

      {/* // quantity  */}
      <div className="lg:mt-11 mt-10">
        <div className="flex flex-row justify-between">
          <p className=" font-medium text-base leading-4 text-gray-600 dark:text-gray-200">
            Select quantity
          </p>
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
              className="border text-black text-xl font-semibold border-gray-300 h-full text-center w-14 pb-1"
              type="text"
              value={result}
              onChange={(e) => e.target.value}
            />
            <span
              onClick={addCount}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-2xl dark:bg-gray-600 border border-gray-300 border-l-0 w-10 h-10 flex items-center justify-center pb-1 "
            >
              +
            </span>
          </div>
        </div>
        <hr className=" bg-gray-200 w-full my-2" />
        <div className=" flex flex-row justify-between items-center mt-4">
          <p className="font-medium text-base leading-4 text-gray-600">
            Dimensions
          </p>
          <svg
            onClick={() => setRotate(!rotate)}
            id="rotateSVG"
            className={
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
              (rotate ? "rotate-180" : "rotate-0")
            }
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L5 5L1 1"
              stroke="#4B5563"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className=" bg-gray-200 w-full mt-4" />
      </div>

      <p className=" font-normal text-base leading-6 text-gray-600 mt-7 dark:text-gray-400">
        {description}
      </p>

      <button
        className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
        onClick={handlePurchase}
      >
        Add to shopping bag
      </button>
    </div>
  );
};

export default DetailsContent;
