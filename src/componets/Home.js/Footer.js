import React from "react";
import { Link } from "react-scroll";
import './Footer.css';
const Footer =()=>{
    return(
      <section className=" footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Link to='Home' >Home</Link>
                    <Link  to="About-Us">About Us</Link>
                    <Link to="exp">Explore Food</Link>
                    <Link to="reviewes">Reviews</Link>
                    <Link to="faq">FAQ</Link>
                </div>
            </div>
            <div className="row">
             
                <p >© 2021. Foodera. All rights reserved</p>
             
            </div>
        </div>
      </section>
    )
}

export default Footer;