/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Shared/Button";
// eslint-disable-next-line react/prop-types

const ProductCard = ({ data, index }) => {
  const { description, images } = data || {};
  const { productName, price, discount } = description || {};
  let modifiedName;
  if (productName.length > 25) {
    modifiedName = productName.substring(0, 22) + "...";
  } else {
    modifiedName = productName;
  }
  return (
      <div
        data-aos="fade-up"
        data-aos-delay={index * 50}
        className="group"
        key={data._id}
      >
        <div className="relative">
          <img
            src={`https://demo-commerce-backend.vercel.app/Images/${images[0].filename}`}
            alt=""
            className="h-[180px] w-[260px] object-cover rounded-md"
          />
          {/* hover button */}
          <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
            <Link to={`/productDetails/${data?._id}`}>
              <Button
                text={"View Details"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </Link>
          </div>
        </div>
        <div className="leading-7">
          <h2 className="font-semibold">{modifiedName}</h2>
          <h2 className="font-semi-bold line-through text-red-500">${price}</h2>
          <h2 className="font-bold">${discount}</h2>
        </div>
      </div>
  );
};

export default ProductCard;
