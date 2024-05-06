import GarbageProduct from "../../components/GarbageProduct/GarbageProduct";
import { useGetGarbageQuery } from "../../features/garbage/garbageApi";

const GarbageCollection = () => {
  const { data, isSuccess, isError, isLoading } = useGetGarbageQuery();
  console.log(data);

  return (
    <div className="container">
      {!isLoading && isSuccess && data?.length > 0 && (
        <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 md:grid-flow-col-2">
          {data?.map((item) => (
            <GarbageProduct data={item} key={item._id} />
          ))}
        </div>
      )}
      {isLoading && "Sorry for loading.."}
      {!isLoading && isError && "Error occurred"}
    </div>
  );
};

export default GarbageCollection;
