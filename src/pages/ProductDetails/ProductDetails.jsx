/* eslint-disable no-unused-vars */
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "../../features/product/productApi";
import { useParams } from "react-router-dom";
import DetailsImage from "../../components/DetialsImage/DetailsImage";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import CategoryPage from "../CategoryPage/CategoryPage";
import SubCategoryPage from "../../components/SubCategoryPage/SubCategoryPage";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import { useEffect } from "react";
import ProductDetailsLoader from "../../components/Loader/ProductDetailsLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);

  const {
    data: allProductData,
    isSuccess: allProductSuccess,
    isError: allProductError,
    isLoading: allProductLoading,
  } = useGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div>
          {isLoading && <ProductDetailsLoader />}
          {!isLoading && isSuccess && data && (
            <div className="flex justify-center items-center lg:items-start lg:flex-row flex-col gap-8">
              <DetailsImage images={data?.images}></DetailsImage>
              <DetailsContent
                desc={data.description}
                img={data.images}
              ></DetailsContent>
            </div>
          )}
          {/* // youtube video  */}
          {!isLoading && data && data?.description?.videoLink && (
            <div
              className="aspect-w-16 aspect-h-9 mt-8 container"
              dangerouslySetInnerHTML={{
                __html: data?.description?.videoLink,
              }}
            ></div>
          )}
        </div>
        {isError && "Failed to load"}
      </div>
      {/* // item by the same categroy  */}
      {allProductSuccess && isSuccess && (
        <CategoryPage
          data={allProductData}
          category={data?.description?.category}
        ></CategoryPage>
      )}

      {/* // item by the same sub category  */}
      {allProductSuccess && isSuccess && (
        <SubCategoryPage
          data={allProductData}
          subcategory={data?.description?.subcategory}
        ></SubCategoryPage>
      )}
      <div className="mb-16"></div>
      <FooterBanner></FooterBanner>
    </div>
  );
};

export default ProductDetails;
