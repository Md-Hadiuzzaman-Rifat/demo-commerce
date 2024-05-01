import { useGetProductsQuery } from "../../features/product/productApi";
import CategoryItem from "./CategoryItem";


const NewCategory = () => {
  const {data, isSuccess, isError, isLoading}=useGetProductsQuery()
  console.log(data);

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 justify-between">
          {
            !isLoading && isError && "Error occurred..."
          }
        {
            isLoading && "Sorry for loading"
        }
        {
          isSuccess && data?.length>0 && data.map(item=> <CategoryItem key={item._id} item={item}/>)
        }
        {
          isError && "Failed to load"
        }
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
