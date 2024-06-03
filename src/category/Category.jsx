/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../features/product/productApi";
import ProductLayout2 from "../components/ProductLayout/ProductLayout2";
import QuickView from "../components/QuickView/QuickView";
import ProductListSkeleton from "../components/ProductListSkeleton/ProductListSkeleton";
import FooterBanner from "../components/FooterBanner/FooterBanner";

export default function Category() {
  const { state } = useLocation();
  const { data, isSuccess, isLoading } = useGetProductsQuery();

  return (
    <div className="bg-white ">
      {open && <QuickView />}
      
      <div className="container mt-4 mb-12">
        <h2 className="text-2xl font-bold  text-gray-900 bg-gray-100 font-abc p-2 mb-4">
          {state?.toUpperCase()}
        </h2>
        {isLoading && <ProductListSkeleton />}

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
      <FooterBanner></FooterBanner>
    </div>
  );
}
