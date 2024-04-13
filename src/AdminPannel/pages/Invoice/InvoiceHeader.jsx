import React from "react";

const InvoiceHeader = ({ details }) => {
  return (
    <div className="invoiceHeader">
      <div className="invoice-top">
        <div>
          <h1 className="invoice-logo">The Spectacle 23</h1>
          <p>Invoice Id: {details._id}</p>
          <p>Date: {details.timestamp}</p>
        </div>
        <div className="invoice-text">
          <h1>Invoice</h1>
        </div>
      </div>
      <hr />
      <div className="invoice-billing">
        <div>
          <p>
            BILL FROM: <strong>The Spectacle 23</strong>
          </p>
          <p>
            <p>Phone: +8801876273090</p>
          </p>
          <p>Address: Mirpur-11, Dhaka-1216</p>
          </div>
          <hr />
          <div>
            <p>
              BILL TO:{" "}
              <strong>
                {details.firstName} {details.lastName}
              </strong>
            </p>
            <p>Phone: {details.phone}</p>
            <p>Address: {details.address}</p>
            <p>Zip Code: {details.zip}</p>
            <p>Email: {details.email}</p>
          </div>

         
        
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default InvoiceHeader;
