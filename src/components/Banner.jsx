import React from "react";
import './css/Style.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
    const imgArr = ['images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg'];
    const bannerArr = [
        {
            bannerImg: "images/slider1.jpg",
            titleImg: "abc.jpg",
            h1Text: "IDEAL PLACE TO UNWINnpmD",
            h2Text: "Spa Beauty"
        },
        {
            bannerImg: "images/slider2.jpg",
            titleImg: "abc.jpg",
            h1Text: "IDEAL PLACE TO UNWIND",
            h2Text: "Spa Beauty"
        },
        {
            bannerImg: "images/slider3.jpg",
            titleImg: "abc.jpg",
            h1Text: "IDEAL PLACE TO UNWIND",
            h2Text: "Spa Beauty"
        }
    ];
    return (

        <Carousel showArrows={true}>
            {
                bannerArr.map((val, index) => {
                    return (
                        <div>
                            <div className="carousel-caption">
                                <h1>{val.h1Text}</h1>
                                <h2>{val.h2Text}</h2>
                            </div>
                            <img src={val.bannerImg} />
                            <p className="legend">Legend {index + 1}</p>
                        </div>
                    )
                })

            }

        </Carousel>



    )

}