import React from "react";

const InvoiceTotal = ({details}) => {
  console.log(details);
  return (
    <div className="invoiceTotal">
      <div className="invoice-content">
        <div>
          <p>Terms & Conditions:</p>
        </div>
        <div className="total-cost">
          <div className="left">
            <p>Subtotal:</p>
            <p>Paid:</p>
            <p>Total:</p>
          </div>
          <div className="right">
            <p>{details.payable} Taka</p>
            <p>{details.advancePaid} Taka</p>
            <p>{Math.floor(details.payable - details.advancePaid)} Taka</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="invoice-payable">
        <h2>Total: {Math.floor(details.payable - details.advancePaid)}</h2>
      </div>
    </div>
  );
}; 

export default InvoiceTotal;
