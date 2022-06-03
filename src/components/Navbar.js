import { Link } from "react-router-dom";

function Navbar ({cart}) {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to='/' className="shop-logo">
                    <img src="images/icons/CartFresh.png" alt="logo"/>
                </Link>
            </div>
            <div className="nav-links">
                <Link to='/cart' className="link">cart</Link>
                <Link to='/orders' className="link">orders</Link>
            </div>
        </div>
    );
}

export default Navbar;