/* eslint-disable no-unused-vars */
import "./OrderTable.scss";
import OrderTableBody from "../../components/OrderTableBody/OrderTableBody";
import { useGetAllOrderedQuery } from "../../../features/confirmOrder/confirmOrder";

const OrderTable = () => {
  const { data, isLoading, isError } = useGetAllOrderedQuery();

  return (
    <div className="orderTable font-abc text-sm">
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
          {!isLoading && data?.length > 0 &&
            data
            
            .map((item) => (
              <OrderTableBody key={item._id} item={item}></OrderTableBody>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
