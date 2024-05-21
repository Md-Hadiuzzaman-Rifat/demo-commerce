/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { MdAutoDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";
import { GrOrderedList } from "react-icons/gr";


const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    
    { title: "Orders", src: <MdOutlineBorderColor className="text-2xl"/>, gap: true , link:"/dashboard/orders"},
    { title: "Upload", src: <IoIosCreate className="text-2xl"/> , link:"/dashboard/upload"},
    { title: "Control ", src: <MdOutlineAdminPanelSettings className="text-2xl"/>, link:"/dashboard/control"},
    { title: "Garbage ", src: <MdAutoDelete className="text-2xl"/>, link:"/dashboard/garbage"},
    { title: "Products ", src: <GrOrderedList className="text-2xl"/>, link:"/dashboard/allProducts"},
    { title: "Category ", src: <MdCategory className="text-2xl"/>, link:"/dashboard/createCategory"},
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple-100 h-screen p-5  pt-8 relative duration-300 `}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-gray-600 origin-left font-medium text-xl duration-200 underline ${
              !open && "scale-0"
            }`}
          >
            Admin Panel
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={`${Menu.link}`}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-600 text-md font-mont items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div>{Menu.src}</div>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div className="min-h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">{children}</h1>
      </div>
    </div>
  );
};
export default AdminLayout;
