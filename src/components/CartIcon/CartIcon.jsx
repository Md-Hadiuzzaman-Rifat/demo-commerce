import img from "../../assets/cart.png"
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
    const navigate= useNavigate()
    const redirect=()=>{
        navigate('/shoppingCart')
    }
    return (
        <div onClick={redirect} className="w-12 md:w-16 fixed bottom-[50%] z-50 right-2 animate-bounce h-22">
            <img src={img} alt="cart"  className="cursor-pointer"/>
        </div>
    );
};

export default CartIcon;