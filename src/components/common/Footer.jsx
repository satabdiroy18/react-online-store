import React from "react";
import '../css/Style.css';
import { useState, useEffect } from "react";
export default function Footer() {
    let footer = [
        {
            footerName:"Home",
            footerLink:"/"
        },
        

        {
            footerName:"Cart",
            footerLink:"/cart"
        }
        
    ];


    let footerDetails = 
        {
            footerAddress:"2972 Westheimer Rd. Santa Ana, Illinois 85486",
            footerEmail:"support@example.com",
            footerPhone:"(406) 555-0120"
        }
        let icon = {
            location: "fas fa-map-marker-alt",
            email: "fas fa-envelope",
            phone: "fas fa-phone"
        }
         
    
    return (

        <section class="sec-padding section-dark footer">

            <div className="container">
                <div className="row">
                    <div className=" col-md-12 col-centered text-center"> <img src="images/logo.png" alt="" />
                        <div className="clearfix"></div>

                        <div className="row">
                            <div className="col-md-4 margin-bottom">
                                <div className="iconbox-small left round outline-gray"><i className={icon.location}></i></div>
                                <div className="text-box-right">
                                    <h5 className="text-white text-left uppercase">Address</h5>
                                    <p className="text-left">Address:{footerDetails.footerAddress}</p>

                                </div>
                            </div>


                            <div className="col-md-4 margin-bottom">
                                <div className="iconbox-small left round outline-gray"><i className={icon.email}></i></div>
                                <div className="text-box-right">
                                    <h5 className="text-white text-left uppercase">Email:</h5>
                                    <p className="text-left">{footerDetails.footerEmail}</p>
                                </div>
                            </div>



                            <div className="col-md-4 margin-bottom">
                                <div className="iconbox-small left round outline-gray"><i className={icon.phone}></i></div>
                                <div className="text-box-right">
                                    <h5 className="text-white text-left uppercase">Phone Number: </h5>
                                    <p className="text-left">{footerDetails.footerPhone}</p>

                                </div>
                            </div>



                        </div>



                        <div className="clearfix"></div>
                        <ul className="footer-quick-links">
                        {
                            footer.map((value) => {

                                return <li class="nav-item">
                                    <a class="nav-link" href={value.footerLink}>{value.footerName}
                                        <span class="sr-only">(current)</span></a>
                                </li>
                            })
                        }
                        </ul>
                        <div className="divider-line solid light opacity-1"></div>

                        <div className="col-md-12 pt-4 pb-4">
                            <p className="text-white">Copyright © 2023 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

