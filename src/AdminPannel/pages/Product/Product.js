import React from "react";
import "./Product.scss";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductTable from "../../components/ProductTable/ProductTable";
import Exp from "../../../components/Exp/Exp";
import { UseDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal/Modal";

const Product = () => {
  const selector= useSelector(state=>state.productApi)
  const handleSelector= useSelector(state=>state.cartHandler)
  const {modalCondition}=handleSelector || {}
  
  return (
    <div className="product">
      {
        modalCondition && <Modal></Modal>
      }
      <div className="container">
        <h1>Upload a Product</h1>
        <ProductForm></ProductForm>
      </div>
      <ProductTable></ProductTable>
    </div>
  );
};

export default Product;
