import React, { useEffect } from "react";
import { useState } from "react";
import "./ProductForm.scss";
import { useAddProductMutation } from "../../../features/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, modalOpen } from "../../../features/cartHandler/cartHandler";
import Modal from "../../../components/Modal/Modal";


const ProductForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [category, setCategory] = useState("sunglass");
  const [featured, setFeatured] = useState(false);

  const selector=useSelector(state=>state.cartHandler)
  const {modalCondition}= selector || {}

  const dispatch= useDispatch()

  const [addProduct, { data, isError, isLoading, isSuccess }] =
    useAddProductMutation();

    useEffect(()=>{
      if(isSuccess){
        dispatch(modalOpen())
        clearInput();
      }
    },[isSuccess, dispatch])

  const clearInput = () => {
    setName("");
    setGender("male");
    setDescription("");
    setPrice("");
    setDiscount("");
    setTags("");
    setImage1("");
    setImage2("");
    setCategory("sunglass");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name,
      category,
      description,
      tags,
      price,
      discount,
      gender,
      featured,
      image: [image1, image2],
    });
    
  };

  return (
    <div className="productForm">
      {
        modalCondition && <Modal></Modal>
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <div className="flex">
          <div>
            <label htmlFor="product-category">Product Category:</label>
            <select
              name="category"
              required
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="sunglass">Sunglass</option>
              <option value="frame">Frame</option>
              <option value="lense">Glass</option>
              <option value="all">All</option>
            </select>
          </div>
          {/* // featured product  */}
          <div>
            <label htmlFor="featured-product">Featured:</label>
            <select
            style={{background:"orange", color:"white"}}
              name="featured-product"
              required
              id=""
              value={featured}
              onChange={(e) => setFeatured(e.target.value)}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>

            </select>
          </div>
        </div>

        <label htmlFor="product-description">Product Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          id="product-description"
          name="product-description"
          value={description}
          required
        ></textarea>
        <label htmlFor="Tags">
          Tags: <span>(Write Tag Name Using Space)</span>
        </label>
        <input
          onChange={(e) => setTags(e.target.value)}
          type="text"
          id="tags"
          name="tags"
          value={tags}
          required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="product-price"
          name="product-price"
          step="0.01"
          value={price}
          required
        />
        <label htmlFor="product-price">
          Discount: <span>(Discount Price in Taka... Not In Percent)</span>{" "}
        </label>
        <input
          onChange={(e) => setDiscount(e.target.value)}
          type="number"
          id="discount"
          name="discount"
          step="0.01"
          value={discount}
          required
        />
        <label htmlFor="product-image">Product Image:</label>
        <input
          onChange={(e) => setImage1(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          style={{ marginBottom: "20px" }}
          placeholder="Image 1"
          value={image1}
          required
        />
        <input
          onChange={(e) => setImage2(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          placeholder="Image 1"
          value={image2}
          required
        />
        <select
          className="gender"
          name="gender"
          id=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <button type="submit" className="upload-btn">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
