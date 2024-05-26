import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../features/product/productApi";

const Products = () => {
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  return (
    <div>
      <div className="container mt-8">
        {isLoading && "Sorry for loading..."}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-5 place-items-center">
            {
              !isLoading && isSuccess && data?.length> 0 && data.map((item, index)=><ProductCard key={item._id} data={item}  index={index}/>)
            }
          </div>
        </div>
        {!isLoading && isSuccess && data?.length == 0 && "No Data found"}
      </div>
    </div>
  );
};

export default Products;
