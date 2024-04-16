/* eslint-disable no-unused-vars */
import { useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { useAddCategoryMutation } from "../../../features/category/categoryApi";
import { useAddSubCategoryMutation } from "../../../features/subCategory/subCategoryApi";

const CreateCategory = () => {
  const [addNewCategory, setAddNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");


  const [addCategory, { data:categoryData, isError:categoryError, isLoading:categoryLoading, isSuccess:categorySuccess }] =
    useAddCategoryMutation();

  const [addSubCategory, { data:subData, isError:subError, isLoading: subLoading, isSuccess:subSuccess }] =
    useAddSubCategoryMutation();


  const items = [
    {
      id: 1,
      name: "mobile",
    },
    {
      id: 2,
      name: "mouse",
    },
    {
      id: 3,
      name: "keyboard",
    },
    {
      id: 4,
      name: "speaker",
    },
    {
      id: 5,
      name: "light",
    },
  ];

  const handleCategory = (e) => {
    e.preventDefault();
    addCategory({name:addNewCategory}) 
  };
  const handleSubCategory = (e) => {
    e.preventDefault();
    addSubCategory({name:newSubCategory})
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <h1 className="text-3xl font-semibold">
        Create Category and SubCategory
      </h1>
      <form onSubmit={handleCategory} className="flex gap-2 my-4">
        <div>
          <input
            onChange={(e) => setAddNewCategory(e.target.value)}
            type="text"
            name="category"
            id="category"
            autoComplete="family-name"
            className="block min-w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 text-white font-semibold rounded-lg px-4"
        >
          Add Category
        </button>
      </form>
      <div className="my-4 flex flex-wrap">
        {items.map((item) => (
          <CategoryItem key={item.id} name={item.name} />
        ))}
      </div>

      <form onSubmit={handleSubCategory} className="flex gap-2 ">
        <div>
          <input
            onChange={(e) => setNewSubCategory(e.target.value)}
            type="text"
            name="subCategory"
            id="subCategory"
            autoComplete="family-name"
            className="block min-w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 font-semibold text-white rounded-lg px-4"
        >
          Add Sub Category
        </button>
      </form>
      <div className="my-4 text-gray-800 flex flex-wrap font-semibold">
        {items.map((item) => (
          <CategoryItem key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CreateCategory;
