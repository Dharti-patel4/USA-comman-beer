import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TiSocialFacebook } from "react-icons/ti";
import { LiaPinterestP } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Description = () => {
  const [singledata, setsingledata] = useState({});
  let id = 3;
  const params = useParams();
  console.log(params.id);
  const GetSingleData = () => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then((res) => setsingledata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetSingleData();
  }, []);

  const addToCardFunction = () => {
    axios
      .post("http://localhost:3000/cart",singledata)
      .then((res) => {
        console.log(res);
        alert("Data added successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <p style={{ textAlign: "center", paddingTop: "20px", fontSize: "20px" }}>
        Home Newly Online American Made Goods Dreams Candle - 8oz
      </p>

      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <div className="col-5">
        <div className="hover-switch1">
        <img src={singledata.img} style={{marginLeft:"5%"}} alt="" height={"500px"} width={"500px"} />
        <img src={singledata.img2} style={{marginLeft:"5%"}} alt="" height={"500px"} width={"500px"} />
              </div>
           <div className="imgs mt-4" style={{marginLeft:"220px"}} >
             <img className="img1" style={{marginLeft:"0px"}} src={singledata.img} alt="" height={"100px"} width={"100px"} />
             <img className="img2" style={{marginLeft:"10px"}} src={singledata.img2} alt="" height={"100px"} width={"100px"}/>
           </div>
          <hr style={{marginTop:"8%",marginLeft:"8%"}} />
        </div>
        <div className="col-5">
          <div className="dis" style={{ paddingLeft: "20%" }}>
            <p
              style={{
                fontSize: "30px",
                fontFamily: "Arial",
                paddingTop: "3px",
                color: "#373A40",
              }}
            >
              {singledata.product__title}{" "}
            </p>
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "black",
                marginLeft: "2%",
             
              }}
            ></div>

            <p
              style={{
                fontSize: "22px",
                fontFamily: "Arial",
                paddingTop: "15px",
                color: "#373A40",
              }}
            >
              {singledata.money}
            </p>
            <hr />
            <Link to={"/cart"}>
            <button
              className="mt-3"
              onClick={addToCardFunction}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                width: "470px",
              }}
            >
              ADD TO CART
            </button>
            </Link>
            <div
              className="icons mt-3"
              style={{
                fontSize: "28px",
                marginLeft: "180px",
                color: "#686D76",
              }}
            >
              <TiSocialFacebook /> <LiaPinterestP /> <MdEmail />
            </div>
            <ul style={{ fontSize: "18px", marginTop: "20px" }}>
              <li style={{ paddingTop: "5px" }}>Sweet & Wild</li>
              <li style={{ paddingTop: "5px" }}>
                This Surreal Fragrance Smells Of Lazy Afternoons Daydreams And
                Future Plans
              </li>
              <li style={{ paddingTop: "5px" }}>
                black currant | amber | coconut | fig jam | and citrus essential
                oils
              </li>
              <li style={{ paddingTop: "5px" }}>8oz</li>
            </ul>
            <p style={{ fontSize: "18px" }}>Made in United States of America</p>
            <p style={{ fontSize: "18px" }}>
              Thank you for supporting American Made. Goods Made Here.
            </p>
          </div>
        </div>
      </div>

      <p style={{fontSize:"19px",paddingLeft:"10%"}}>WHY COMMON DEER?</p>
      <div className="container mt-5" style={{display:"flex",height:"350px",width:"80%",backgroundColor:"#AAAAAA"}}>
           <div className="col-5" style={{color:"white",marginLeft:"5%",paddingTop:"50px"}}>
              <h3>NEED IT WREPPED? </h3>
              <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "black",
                marginLeft: "2%",
              
              }}
            ></div>
              <p style={{paddingTop:"10px",fontSize:"18px",lineHeight:"30px"}}>Please write which items you'd like "gift wrapped" in the <br /> notes before submitting your order! We're happy to wrap <br /> non-sale items over $25 in our reusable burlap bags.</p>
           </div>
           <div className="col-4" style={{marginLeft:"25%",marginTop:"2%"}}>
               <img src="https://static.vecteezy.com/system/resources/thumbnails/012/027/453/small/deer-logo-with-leaf-element-on-the-antler-free-vector.jpg" alt="" height={"310px"} width={"310px"} />
           </div>
      </div>
      <p className="mt-5" style={{fontSize:"30px",textAlign:"center"}}>WE THINK YOU'D BE INTO...</p>
      <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "black",
                marginLeft: "49%",
                marginBottom:"5%"
              
              }}
            ></div>
    </div>
  );
};
export default Description;
