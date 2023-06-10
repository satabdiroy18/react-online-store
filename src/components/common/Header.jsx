import React from "react";
import '../css/Style.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [noofCartItems, setNoOfCartItems] = useState(0)

    useEffect(() => {
        let cartItems = localStorage.getItem('cartItems')
        if(cartItems){
            cartItems = JSON.parse(cartItems); 
            setNoOfCartItems(cartItems.length)
        }
    }, [])

    let navbar = [
        {
            menuName: "Home",
            menuLink: "/"
        },

        {
            menuName: "Cart",
            menuLink: "/cart"
        },

    ];


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light main-menu">
                <Link className="navbar-brand" to="/">Online Shopping Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        {
                            navbar.map((value) => {

                                return <li class="nav-item">
                                    <Link to={value.menuLink}>{value.menuName}</Link>

                                </li>
                            })
                        }
                        <li className="header-shop-cart"><a href="#" className="button js-toggle-cart" title="View cart"><i class="fa fa-cart-plus"></i><span class="ng-binding">{noofCartItems}</span></a>
                        </li>
                    </ul>



                </div>
            </nav>
        </>
    )


}



