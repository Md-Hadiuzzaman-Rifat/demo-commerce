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
import { CgSidebarOpen } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";


const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Orders", src: <MdOutlineBorderColor className="text-2xl"/>, gap: true , link:"/dashboard/orders"},
    { title: "Products ", src: <GrOrderedList className="text-2xl"/>, link:"/dashboard/allProducts"},
    { title: "Upload", src: <IoIosCreate className="text-2xl"/> , link:"/dashboard/upload"},
    { title: "Control ", src: <MdOutlineAdminPanelSettings className="text-2xl"/>, link:"/dashboard/control"},
    { title: "Garbage ", src: <MdAutoDelete className="text-2xl"/>, link:"/dashboard/garbage"},
    { title: "Category ", src: <MdCategory className="text-2xl"/>, link:"/dashboard/createCategory"},
  ];
  
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-700 min-h-screen p-5  pt-8 relative duration-300 `}
      >
        <div
          className={`absolute text-2xl text-purple-500 cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}> <FaArrowLeft/>
          </div>
        <div className="flex gap-x-4 items-center">
          <div
            src="./src/assets/logo.png"
            className={`cursor-pointer text-2xl duration-500 ${
              open && "rotate-[360deg]"
            }`}><CgSidebarOpen className="text-white"/>
          </div>
          <Link to="/dashboard"
            className={`text-gray-200 origin-left font-medium text-xl duration-200 underline ${
              !open && "scale-0"
            }`}
          >
            Admin Panel
          </Link>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={`${Menu.link}`}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-md font-mont items-center gap-x-4 
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
