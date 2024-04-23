import { useGetSingleProductQuery } from "../../features/product/productApi";
import { useParams } from "react-router-dom";
import DetailsImage from "../../components/DetialsImage/DetailsImage";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import CategoryPage from "../CategoryPage/CategoryPage";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);

  return (
    
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div>
          {isLoading && "Sorry for loading"}
          {!isLoading && isSuccess && data && (
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
              <DetailsImage images={data.images}></DetailsImage>
              <DetailsContent desc={data.description} img={data.images}></DetailsContent>
            </div>
          )}
          {!isLoading && data && (
            <div className="aspect-w-16 aspect-h-9 mt-6">

              <iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2F100095051778814%2Fvideos%2F1082289946341126%2F&show_text=false&width=560&t=0" width="560" height="317"   allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
            </div>
          )}
          {isError && "Failed to load"}
        </div>
      </div>
      <CategoryPage></CategoryPage>
    </div>
  );
};

export default ProductDetails;
