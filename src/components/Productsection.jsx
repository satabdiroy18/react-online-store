import React from "react";
import axios from "axios";
import Productitems from "./Productitems";
import Seacrhbar from "./Searchbar";
import { useState, useEffect } from "react";

export default function Productsection() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilterProducts] = useState([])

    const productSearch = (searchText) => {
        let arr = products.filter((product) => {
            if (!searchText) return true;
            let productTitle = product.title.toLowerCase();
            if (searchText && productTitle.includes(searchText.toLowerCase())) {
                return true;
            }
        })
        setFilterProducts(arr);

    }

    useEffect(
        () => {
            setTimeout(() => {
                axios.get("https://fakestoreapi.com/products").then(
                    (res) => {
                        // console.log(res.data);
                        setProducts(res.data);
                        setFilterProducts(res.data)
                    }
                )
            }, 10);
        }, []
    )
    return (
        <>


            <Seacrhbar onProductSearch={productSearch}/>


            <section class="products-area section bg-img jarallax">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="section-heading">
                                <h2>Our Products</h2>
                                <p>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks egestasut aliquam.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {
                            filteredProducts.map((elm, index) => {


                                return <Productitems elm={elm} />

                            })
                        }
                    </div>
                </div>
            </section>


        </>
    )


}