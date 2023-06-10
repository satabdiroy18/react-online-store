import React from "react";
import { Link } from "react-router-dom";
export default function Productitems({elm}) {
    return (
        <div class="col-md-4">
            <div class="pro-sliders">
                <div class="products">
                    <figure><img src={elm.image} alt="" /></figure>
                    <div class="contents">
                        <h3>{elm.title}</h3>
                        <span>{elm.price}</span>

                        {/* <a href="#" class="btn4">Explore</a> */}
                        <Link  className="btn4" to={`productdeatils/${elm.id}`}>Explore</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}