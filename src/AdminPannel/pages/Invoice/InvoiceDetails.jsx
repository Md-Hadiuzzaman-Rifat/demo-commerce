import React from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceDetails = ({details}) => {
  return (
    <div className="InvoiceDetails">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {
            details?.order?.map(item=><InvoiceItem key={item._id} item={item}></InvoiceItem>)
          }
        </tbody>
      </table>
      {/* <hr /> */}
    </div>
  );
};

export default InvoiceDetails;
