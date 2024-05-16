import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"
import logo  from "../assets/logo.svg";


export const Header = () => {
    const products = useSelector(state => state.cartState.cartList);

    return (
        <header className="poppins-regular ">

            <Link to="/" className="logo">
                <img src={logo} alt="Shopgad Logo" />
                <span>Shopgad Redux</span>
            </Link>

            <nav className="navigation">
                <NavLink to="/" className="link" end> Home</NavLink>

                <NavLink to="/cart" className="link">Cart</NavLink>

            </nav>

            <Link to="/cart" className="items">
                Cart: {products.length}
            </Link>

        </header>
  )
}

