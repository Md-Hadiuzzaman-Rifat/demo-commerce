/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const { description, images } = item || {};
  let { productName, price, discount } = description || {};

  let modifiedName;
  if (productName.length > 25) {
    modifiedName = productName.substring(0, 22) + "...";
  } else {
    modifiedName = productName;
  }
  const quickView=()=>{
    console.log("done");
  }

  return (
    <Link
      to={`/productDetails/${item?._id}`}
      className="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full  h-56 md:h-52 md:w-48"
        src={`http://localhost:20220/Images/${images[0]?.filename}`}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
          {modifiedName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-through">
          Price: {price} Taka
        </p>

        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 ">
          Offer Price: {discount}
        </p>
        <button onClick={quickView} className="bg-black py-1 px-2 font-semibold text-white">Save {price - discount}</button>
      </div>
    </Link>
  );
};

export default CategoryItem;
