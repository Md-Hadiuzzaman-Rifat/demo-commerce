/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ProductLayout2 from "../ProductLayout/ProductLayout2";
const SubCategoryPage = ({subcategory, data}) => {
  // console.log(subcategory, data);
  return (
    <div className="container mt-16">
      <h2 className="text-xl font-abc font-semibold">You may also like</h2>
      <div className="h-[1px] w-full bg-black mt-2 mb-4"></div>

      {/* // subcategory section  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md-grid-cols-4 lg:grid-cols-6">
      
      <ProductLayout2></ProductLayout2>
      <ProductLayout2></ProductLayout2>
      <ProductLayout2></ProductLayout2>
      <ProductLayout2></ProductLayout2>
      <ProductLayout2></ProductLayout2>
      <ProductLayout2></ProductLayout2> 
      </div>

    </div>
  );
};

export default SubCategoryPage;
