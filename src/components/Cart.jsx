import React from "react";
import { useState, useEffect } from "react";

export default function Cart() {

    const [cartItems, setCartData] = useState([])

    useEffect(() => {
        let cartData = localStorage.getItem('cartItems')
        if (cartData) {
            cartData = JSON.parse(cartData)
            setCartData(cartData)
        }
    }, [])

    const deleteItem = (id) => {
        const arr = cartItems.filter((elm, index) => {
            if (elm.id === id) {
                return false;
            }
            else {
                return true;
            }
        });
        setCartData(arr);
        localStorage.setItem('cartItems',JSON.stringify(arr))

    }

    return (

        <>
            <header id="site-header">
                <div class="container">
                    <h1>Shopping cart </h1>
                </div>
            </header>

            <div class="container mt-5 mb-5">
                {
                    cartItems.map((value, index) => {

                        return <section id={'cart-' + index}>
                            <article class="product">
                                <header>
                                    <a class="remove"  onClick={() => { deleteItem(value.id) }}>
                                        <img src={value.image} alt="" />

                                        <h3>Remove product</h3>
                                    </a>
                                </header>

                                <div class="content">

                                    <h1>{value.title}</h1>

                                   <p>{value.description}</p> 

                                    <div title="You have selected this product to be shipped in the color yellow."></div>

                                </div>

                                <footer class="content">

                                    <h2 class="full-price">
                                       Price:  {value.price}
                                    </h2>


                                </footer>
                            </article>



                        </section>
                    })
                }
            </div>

            {/* <footer id="site-footer">
                <div class="container clearfix">

                    <div class="left">
                        <h2 class="subtotal">Subtotal: <span>163.96</span>€</h2>
                        <h3 class="shipping">Shipping: <span>5.00</span>€</h3>
                    </div>

                    <div class="right">
                        <h1 class="total">Total: <span>177.16</span>€</h1>
                        <a class="btn">Checkout</a>
                    </div>

                </div>
            </footer> */}
            <div className="clearfix"></div>
        </>
    )
}