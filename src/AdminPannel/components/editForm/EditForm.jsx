import React, { useEffect } from "react";
import { useState } from "react";
// import "./ProductForm.scss";
import { useEditProductMutation } from "../../../features/product/productApi";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { modalOpen } from "../../../features/cartHandler/cartHandler";

const EditForm = ({editData}) => {
  const {name:editName, gender:editGender, category:editCategory, description:editDescription, discount:editDiscount, image:editImage, price:editPrice, tags:editTags, featured:editFeatured}=editData || {}
  
  const {productId}= useParams()
  const [name, setName] = useState(editName);
  const [gender, setGender] = useState(editGender);
  const [description, setDescription] = useState(editDescription);
  const [price, setPrice] = useState(editPrice);
  const [discount, setDiscount] = useState(editDiscount);
  const [tags, setTags] = useState(editTags);
  const [newImage1, setNewImage1] = useState(editImage[0]);
  const [newImage2, setNewImage2] = useState(editImage[1]);
  const [category, setCategory] = useState(editCategory);
  const [featured, setFeatured] = useState(Boolean(editFeatured));


  const [editProduct, {isSuccess}]=useEditProductMutation()
  const navigate= useNavigate()
  const dispatch= useDispatch()

  useEffect(()=>{
    if(isSuccess){
      dispatch(modalOpen())
        navigate('/dashboard/product')
    }
  },[isSuccess, navigate, dispatch])

  const productObj={
    name,
    category,
    description,
    tags,
    price,
    discount,
    gender,
    image:[newImage1, newImage2],
    featured:JSON.parse(featured)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct({productId,productObj})
  };

  return (
    <div className="productForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         {/* flex section  */}
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
        value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="product-description"
          name="product-description"
          required
        ></textarea>
        <label htmlFor="Tags">
          Tags: <span>(Write Tag Name Using Space)</span>
        </label>
        <input
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          type="text"
          id="tags"
          name="tags"
          required
        />
        <label htmlFor="product-price">Product Price:</label>
        <input
        value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="product-price"
          name="product-price"
          step="0.01"
          required
        />
        <label htmlFor="product-price">
          Discount: <span>(Discount Price in Taka... Not In Percent)</span>{" "}
        </label>
        <input
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          type="number"
          id="discount"
          name="discount"
          step="0.01"
          required
        />
        <label htmlFor="product-image">Product Image:</label>
        <input
        value={newImage1}
          onChange={(e) => setNewImage1(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          required
        />
        <input
        value={newImage2}
          onChange={(e) => setNewImage2(e.target.value)}
          type="text"
          id="product-image"
          name="product-image"
          style={{marginTop:"20px"}}
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

export default EditForm;
