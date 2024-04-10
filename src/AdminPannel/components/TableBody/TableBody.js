import React, { useEffect } from "react";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import "./TableBody.scss"
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../features/product/productApi";

const TableBody = ({data}) => {
  let {name, category, discount,_id, featured, image, price}= data || {}

  const dis=Math.floor((discount/price)*100)

  const [image1, image2]= image || []

  const [deleteProduct, {isLoading, isSuccess:deleteSuccess}]= useDeleteProductMutation()

  useEffect(()=>{
    if(deleteSuccess){
      alert("Product Deleted Successfully")
    }
  },[deleteSuccess])

  if(name?.length>50){
    name= name.substring(0, 80)+"..."
  }
  
  const handleDelete=(id)=>{
    console.log(id);
    deleteProduct(id)
  } 

  const style={
    background:"orange"
  }

  return (
    <tr style={{
      background: featured ? '#dfd8ff' : ''
    }} className="tableBody">
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{dis}%</td>
      <td>
        <img
          className="table-img"
          src={image1}
          style={{marginRight:"5px"}}
          alt=""
        />
        <img
          className="table-img"
          src={image2}
          alt=""
        />
      </td>
      <td className="productAction">
        <span className="productDelete" onClick={()=>handleDelete(_id)}>
          <ImBin />{" "}
        </span>
        <span className="productEdit">
          <Link to={`/edit/${_id}`}><FiEdit /></Link>
        </span>
      </td>
    </tr>
  );
};

export default TableBody;
