import { useGetSingleProductQuery } from "../../features/product/productApi";
import { useParams } from "react-router-dom";
import DetailsImage from "../../components/DetialsImage/DetailsImage";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import CategoryPage from "../CategoryPage/CategoryPage";
import SubCategoryPage from "../../components/SubCategoryPage/SubCategoryPage";
import FooterBanner from "../../components/FooterBanner/FooterBanner"
import { useEffect } from "react";

const ProductDetails = () => {
  
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div>
          {isLoading && "Sorry for loading"}
          {!isLoading && isSuccess && data && (
            <div className="flex justify-center items-center lg:items-start lg:flex-row flex-col gap-8">
              <DetailsImage images={data.images}></DetailsImage>
              <DetailsContent desc={data.description} img={data.images}></DetailsContent>
            </div>
          )}
    
          {!isLoading && data && (
            <div className="aspect-w-16 aspect-h-9 mt-6 container">
             <iframe className="w-full aspect-video md:aspect-square" src="https://www.youtube-nocookie.com/embed/OmcCuVlpyhs?si=X1GiEdoYXIjnwSTb&amp;controls=0"></iframe>
            </div>
          )}

          {isError && "Failed to load"}
        </div>
      </div>
      <CategoryPage></CategoryPage>
      <SubCategoryPage></SubCategoryPage>
      <div className="mb-16"></div>
      <FooterBanner></FooterBanner>
    </div>
  );
};

export default ProductDetails;
