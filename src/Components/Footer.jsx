import React from "react";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#43766C", height: "390px", display: "flex" }}
      >
        <div className="col-3">
          <img
            style={{ marginTop: "15%", marginLeft: "5%" }}
            src="https://commondeer.com/cdn/shop/files/CDeer_background_removed_360x.png?v=1613756365"
            alt=""
            height={"210px"}
            width={"211px"}
          />
          <p style={{ fontSize: "13px", paddingTop: "17%", paddingLeft: "5%" }}>
            © 2024, Common Deer <br /> POS and Ecommerce by Shopify
          </p>
        </div>
        <div className="col-3">
          <ul
            style={{
              fontSize: "18px",
              fontFamily: "sans-serif",
              marginTop: "70px",
            }}
          >
            <li style={{ listStyle: "none", paddingBottom: "5px" }}>About</li>
            <li style={{ listStyle: "none", paddingBottom: "5px" }}>
              Contact Us
            </li>
            <li style={{ listStyle: "none", paddingBottom: "5px" }}>
              Exchanges, Shipping, Pickup, etc
            </li>
            <li style={{ listStyle: "none", paddingBottom: "5px" }}>
              New Maker Application
            </li>
            <li style={{ listStyle: "none", paddingBottom: "6px" }}>Jobs</li>
            <li style={{ listStyle: "none", paddingBottom: "6px" }}>
              Terms & Conditions
            </li>
            <li style={{ listStyle: "none", paddingBottom: "5px" }}>
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="col-3">
          <p
            style={{
              paddingLeft: "25px",
              paddingTop: "60px",
              fontSize: "17px",
              lineHeight: "33px",
            }}
          >
            Our woman-owned small business <br /> and  the family of makers we
            support <br /> rely on  people like you to stay afloat. <br />
            <br /> Thank you for celebrating American <br /> Made  with us.{" "}
            <br /> <br />
            <u style={{ color: "black" }}>our current "open" hours</u>
          </p>
        </div>

        <div className="col-3">
          <p style={{
              paddingLeft: "29px",
              paddingTop: "60px",
              fontSize: "18px",
              
            }}>
            210 College Street, Suite 101 <br /> Burlington, VT Vermont <br /> 05401 United
            States
            <br /> <br />
             <div className="icon" >
             <CgFacebook style={{border:"1px solid black",borderRadius:"50%",padding:"7px",fontSize:"35px"}} />
            <IoLogoInstagram style={{border:"1px solid black",borderRadius:"50%",padding:"7px",fontSize:"35px",marginLeft:"10px"}} />
             </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
