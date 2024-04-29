/* eslint-disable no-unused-vars */
//  eslint-disable no-unused-vars

import { useEffect, useState } from "react";
import { useAddCategoryMutation, useGetCategoryQuery } from "../../features/category/categoryApi";
import axios from "axios";

function CategoryForm() {
  const [file, setFile] = useState();
  const [category, setCategory] = useState("");
  
  const [addCategory,{isSuccess: addSuccess}]=useAddCategoryMutation()
  const {data:getCatData, isSuccess: getCatSuccess}= useGetCategoryQuery()
 
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category.toLowerCase());
    // axios
    //   .post("http://localhost:20200/createCategory", formData)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((er) => console.log(er));

    addCategory(formData)
  };


  const handleDelete = (imageName) => {
    console.log(imageName);
    fetch(`http://localhost:20200/category/${imageName}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="container mx-auto max-w-2xl py-5 sm:px-6 sm:py-12 lg:max-w-7xl">

      <input className="m-2" type="file" onChange={(e) => setFile(e.target.files[0])} />
      
      <input type="text" placeholder="Category Name" onChange={(e) => setCategory(e.target.value)} />
      <button  className="bg-orange-500 m-2 font-semibold text-white rounded-md p-2" type="button" onClick={upload}>
        Upload
      </button>

      <div className="grid mt-4 p-4 bg-gray-100 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          getCatSuccess && getCatData?.length===0 && "No Category Found"
        }
        {getCatSuccess && getCatData?.length > 0 && getCatData.map((item) => (
          <div key={item._id} className="border-2  overflow-hidden">
            <div className="flex justify-between font-semibold bg-white px-4 text-xl items-center">
              <p className="">{item?.category}</p>
              <p
                onClick={() => handleDelete(item?.image)}
                className="cursor-pointer text-red-500 text-sm"
              >
                DELETE
              </p>
            </div>
            <div className="max-w-[300px]">
              <img
                key={item._id}
                src={`http://localhost:20200/images/${item.image}`}
                className="object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryForm;