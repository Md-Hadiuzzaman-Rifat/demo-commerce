/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { popUpOpen, popUpToggle} from "../../features/quickView/quickViewSlice"

const ProductLayout2 = ({ data }) => {
  const { images, _id } = data || {};
  const navigate = useNavigate();
  const {open}=  useSelector(state=>state.popUp)

  const dispatch= useDispatch()
  const { price, discount } = data?.description || {};

  const handleDetails = (id) => {
    navigate(`/productDetails/${id}`);
    window.scrollTo(0, 0);
  };
  const handlePopUp=()=>{
    dispatch(popUpOpen())
  }

  return (
    <div>
      {data && (
        <div>
          <div className="relative flex flex-col items-center">
            <img
              src={`http://localhost:20220/images/${images[0].filename}`}
              alt=""
              className="cursor-pointer h-[180px] sm:h-[220px] w-full object-cover hover:opacity-70 duration-75"
              onClick={() => handleDetails(_id)}
            />
            <div className="flex items-center bg-white w-[120px] rounded-md absolute bottom-[-10px] justify-center gap-2 shadow-lg">
              <p className="font-semibold">৳{price}</p>
              <p className="font-thin line-through">৳{price - discount}</p>
            </div>
          </div>
          <div>
            <p onClick={handlePopUp} className="text-center mt-4 bg-gray-800 text-white p-1 cursor-pointer font-semibold">
              {" "}
              + Add To Cart
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductLayout2;
