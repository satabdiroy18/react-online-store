import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Productdetails() {
  const [details, setDetails] = useState({ status: false });
  const { id } = useParams();

  useEffect(
    () => {
      setTimeout(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(
          (res) => {
            // console.log(res.data);
            setDetails({ ...res.data, status: true });
          }
        )
      }, 10);
    }, []
  )

  const addToCart = () => {
    let cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      let arr = cartItems.filter((elm,index)=>{
        if(elm.id === details.id){
          return false;
        }
        else{
          return true;
        }
      })
      arr.push(details);
      cartItems = arr;
    }
    else{
      cartItems=[]
      cartItems.push(details)
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }


  return (
    <>
      {
        (details.status) ?


          <div class="card-wrapper clearfix">
            <div class="card bg-dark">

              <div class="product-imgs">
                <div class="img-display">
                  <div class="img-showcase">
                    <img src={details.image} alt="shoe image" />

                  </div>
                </div>

              </div>

              <div class="product-content">
                <h2 class="product-title">{details.title}</h2>

                <div class="product-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span> {details.rating.rate}({details.rating.count})</span>
                </div>

                <div class="product-price">

                  <p class="new-price">Price: <span>{details.price}</span></p>
                </div>

                <div class="product-detail">
                  <h2>about this item: </h2>
                  <p>{details.description}</p>

                  <ul>
                    <li>Color: <span>Black</span></li>
                    <li>Available: <span>in stock</span></li>
                    <li>Category: <span>Shoes</span></li>
                    <li>Shipping Area: <span>All over the world</span></li>
                    <li>Shipping Fee: <span>Free</span></li>
                  </ul>
                </div>

                <div class="purchase-info">

                  <button type="button" class="btn4" onClick={addToCart}>
                    Add to Cart <i class="fas fa-shopping-cart"></i>
                  </button>

                </div>


              </div>
            </div>
          </div>

          : ''
      }
    </>
  )


}