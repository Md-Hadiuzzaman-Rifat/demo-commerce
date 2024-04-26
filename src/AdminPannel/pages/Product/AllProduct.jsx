/* eslint-disable no-unused-vars */
import "./Product.scss";
import ProductTable from "../../components/ProductTable/ProductTable";
import { useSelector } from "react-redux";
import Modal from "../../../components/Modal/Modal";
import ProductUploadForm from "../ProductUploadForm/ProductUploadForm";

const AllProduct = () => {
  const handleSelector= useSelector(state=>state.cartHandler)
  const {modalCondition}=handleSelector || {}

  return (
    <div className="product container">
      {
        modalCondition && <Modal></Modal>
      }
      <div>
        <h1 className="text-2xl font-semibold underline">Upload a Product</h1>
        <ProductUploadForm></ProductUploadForm>
      </div>
      <ProductTable></ProductTable>
    </div>
  );
};

export default AllProduct;
