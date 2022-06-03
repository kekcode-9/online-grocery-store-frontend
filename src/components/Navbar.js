import { Link } from "react-router-dom";
import Orders from "./Orders";

function Navbar ({cart}) {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to='/' className="shop-logo">
                    <img src="images/icons/CartFresh.png" alt="logo"/>
                </Link>
            </div>
            <div className="nav-links">
                <Link to='/cart' className="link">cart {(cart.length > 0 && window.innerWidth > 900) && '[' + cart.length + ']'}</Link>
                <Link to='/orders' className="link">orders {(Orders.length > 0 && window.innerWidth > 900) && '[' + Orders.length + ']'}</Link>
            </div>
        </div>
    );
}

export default Navbar;