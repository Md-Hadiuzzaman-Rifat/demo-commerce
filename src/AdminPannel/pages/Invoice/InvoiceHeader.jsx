/* eslint-disable react/prop-types */

const InvoiceHeader = ({ details }) => {
  
  return (
    <div className="invoiceHeader font-abc leading-5 pt-4">
      <div className="invoice-top">
        <div>
          <h1 className="invoice-logo">Urban Region BD</h1>
          <p>Invoice Id: {details?._id}</p>
          <p>Date: {details?.date}</p>
        </div>
        <div className="invoice-text">
          <h1>Invoice</h1>
        </div>
      </div>
      <hr />
      <div className="invoice-billing">
        <div>
          <p>
            BILL FROM: <strong>Urban Region BD</strong>
          </p>
          
            <p>Phone: +8801876273090</p>
          
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
