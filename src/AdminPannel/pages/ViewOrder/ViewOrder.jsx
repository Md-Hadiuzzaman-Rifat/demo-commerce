import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../features/confirmOrder/confirmOrder";
import "./ViewOrder.scss";

const ViewOrder = () => {
  const { orderId } = useParams();
  const { data, isLoading, isError } = useGetSingleOrderQuery(orderId);

  const {
    _id,
    address,
    timestamp,
    city,
    country,
    email,
    firstName,
    lastName,
    order,
    phone,
  } = data || [];
  console.log(order);
  return (
    <div className="viewOrder">
      {isLoading && "Loading..."}
      {!isLoading && data && (
        <div>
          <h4>Order Id: {_id}</h4>
          <h2>Personal Details</h2>
          <div className="viewOrder_flex">
            <div className="left">
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
              <p>Phone: {phone}</p>
              <p>Email: {email}</p>
            </div>
            <div className="right">
              <p>Country: {country}</p>
              <p>City: {city}</p>
              <p>Address: {address}</p>
              <p>Time: {timestamp}</p>
            </div>
          </div>
        </div>
      )}
      <h2>Your Orders</h2>
      {!isLoading && order?.length>0 && (
        order.map(item=> <div key={item._id}>
          <div>
            <p>Order id:{item._id}</p>
            {/* <img src={item.image[0]} alt="" /> */}
            <img style={{width:"80px"}} src={item.image[0]} alt="" />
            <p>Name: {item.name}</p>
            <p>Unit Price: {item.price - item.discount}</p>
            <p>Amount: {item.amount}</p>
          </div>
        </div> )
      )}
    </div>
  );
};

export default ViewOrder;
