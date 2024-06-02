/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../features/product/productApi";
import ProductLayout2 from "../components/ProductLayout/ProductLayout2";
import QuickView from "../components/QuickView/QuickView";
import ProductListSkeleton from "../components/ProductListSkeleton/ProductListSkeleton";

export default function Category() {
  const { state } = useLocation();
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  console.log(state);
  console.log(data);

  return (
    <div className="bg-white">
      {open && <QuickView />}
      {isLoading && <ProductListSkeleton />}
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold  text-gray-900 bg-gray-100 font-abc p-2 mb-4">
          {state?.toUpperCase()}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md-grid-cols-4 lg:grid-cols-6">
          {isSuccess &&
            !isLoading &&
            data

              ?.filter(
                (item) =>
                  item?.description?.category?.toLowerCase() ===
                  state?.toLowerCase()
              )
              ?.map((item) => <ProductLayout2 key={item?._id} data={item} />)}
        </div>
      </div>
    </div>
  );
}
