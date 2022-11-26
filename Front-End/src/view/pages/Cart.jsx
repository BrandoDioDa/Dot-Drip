import "../cssDesign/cart.css";
import {Link} from "react-router-dom";

const Cart =() => {
    return(
        <div className="BackgroundColor">
            <h1>
                Shopping Cart
            </h1>
            <Link to="/">
                 <button type="button" className="button">
                     Check-out
                 </button>
            </Link>
        </div>
    );
}
export default Cart;