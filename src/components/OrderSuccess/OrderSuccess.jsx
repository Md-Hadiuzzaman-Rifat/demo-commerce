import "./OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <div className="OrderSuccess">
      <div className="container">
        <i className="fas fa-check-circle"></i>
        <h1>Thank you for your order!</h1>
        <p>
          Your order has been received and is being processed. You will receive
          an email confirmation shortly.
        </p>
        <a href="/" className="button">
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default OrderSuccess;