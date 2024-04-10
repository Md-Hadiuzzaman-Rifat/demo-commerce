import "./OrderTable.scss";
import OrderTableBody from "../../components/OrderTableBody/OrderTableBody";
import { useState } from "react";
import { useGetAllOrderedQuery } from "../../../features/confirmOrder/confirmOrder";

const OrderTable = () => {
  const { data, isLoading, isError } = useGetAllOrderedQuery();
  console.log(data);
  return (
    <div className="orderTable">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total</th>
            <th>Advanced</th>
            <th>Transaction / Bkash</th>
            <th>Order Date</th>
            <th>Status</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((item) => (
              <OrderTableBody key={item._id} item={item}></OrderTableBody>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
