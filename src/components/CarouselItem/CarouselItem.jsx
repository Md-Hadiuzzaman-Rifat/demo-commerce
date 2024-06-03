/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types

import { useNavigate } from "react-router-dom";
import { resizeName } from "../../utils/sizes";

const CarouselItem = ({ data }) => {
  const { description, images, _id } = data || {};
  const { productName, price, discount, review } = description || {};

  const navigate= useNavigate()

  const handleDescription=(id)=>{
    navigate(`/productDetails/${id}`)
  }

  return (
    <div onClick={()=>handleDescription(_id)} className="w-full max-w-sm p-2 bg-white dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img 
          className="rounded-t-lg max-h-[110px] sm:h-[150px] md:max-h-[250px] w-full object-cover"
          src={`https://backend.urbanregionbd.com/Images/${images[0]?.filename}`}
          alt="product image"
        />
      </a>
      <div className="px-2">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white font-abc">
            {resizeName(productName, 15)?.toUpperCase()}
          </h5>
          <div className="flex gap-1 items-center justify-between">
            <h5 className="text-md tracking-tight text-gray-500 dark:text-white font-abc line-through	">
              ৳ {price}
            </h5>
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white font-abc	me-4">
              ৳ {price - discount}
            </h5>
          </div>
        </a>
  
      </div>
    </div>
  );
};

export default CarouselItem;
