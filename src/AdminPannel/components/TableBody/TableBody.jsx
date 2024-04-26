/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdDeleteForever } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";

const TableBody = ({ data }) => {
  const { description: productDetails, images } = data || {};
  let { category, brand, price, discount, productName, featured, extra } =
    productDetails;

  if (productName?.length > 20) {
    productName = productName.substring(0, 18) + "...";
  }

  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{productName}</div>
          <div className="font-normal text-gray-500">{brand}</div>
        </div>
      </th>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
          {featured}
        </div>
      </td>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">{discount}</td>
      <td className="px-6 py-4">{discount}</td>
      <td className="px-6 py-4">{extra}</td>
      <td className=" px-6 py-4 ">
        <div className="flex gap-1 items-center">
          <MdDeleteForever className="text-[20px] text-red-500 cursor-pointer"/>
          <RiFileEditFill className="text-[16px] text-indigo-500 cursor-pointer"/>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
