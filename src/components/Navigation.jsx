import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


function Navigation() {
	return (
		<nav>
			<ul className="nav-links">
				<Link style={{textDecoration:"none"}} to="/product"> <li>Product</li> </Link>
				<Link style={{textDecoration:"none"}} to="/ShoppingCart"> <li>ShoppingCart</li> </Link>
                <Link style={{textDecoration:"none"}} to="/productDetail"> <li>productsDetail</li> </Link>
			</ul>
		</nav>
	)
}

export default Navigation;