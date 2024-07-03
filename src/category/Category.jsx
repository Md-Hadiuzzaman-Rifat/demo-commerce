/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/product/productApi";
import ProductLayout2 from "../components/ProductLayout/ProductLayout2";
import QuickView from "../components/QuickView/QuickView";
import ProductListSkeleton from "../components/ProductListSkeleton/ProductListSkeleton";
import FooterBanner from "../components/FooterBanner/FooterBanner";
import { useEffect } from "react";

export default function Category() {
  const {categoryName}= useParams()
  const { data, isSuccess, isLoading } = useGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white " id={categoryName}>
      {open && <QuickView />}
      
      <div className="container min-h-[100vh] mt-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold  text-indigo-600 bg-gray-100 font-abc p-2 mb-4">
          {categoryName?.toUpperCase()}
        </h2>
        {isLoading && <ProductListSkeleton />}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md-grid-cols-4 lg:grid-cols-6">
          {isSuccess &&
            !isLoading &&
            data

              ?.filter(
                (item) =>
                  item?.description?.category?.toLowerCase() ===
                  categoryName?.toLowerCase()
              )
              ?.map((item) => <ProductLayout2 key={item?._id} data={item} />)}
        </div>
      </div>
      <FooterBanner></FooterBanner>
    </div>
  );
}
