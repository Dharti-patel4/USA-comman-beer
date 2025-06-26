import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <Carousel className="mt-5 slider" fade>
        <Carousel.Item>
          <img
            src="https://media.licdn.com/dms/image/C561BAQE1j5dlipY7ng/company-background_10000/0/1583925988310?e=2147483647&v=beta&t=xvqY7xgaTMx7-alKqIAeAOLWBrK7Gr6tSH1xi5Wsch4"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "630px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://commondeer.com/cdn/shop/files/American_made_hero_2700x.jpg?v=1613759498"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "630px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://commondeer.com/cdn/shop/files/Commondeer_2021_0901.jpg?v=1637183560s"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "630px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://commondeer.com/cdn/shop/files/Commondeer_2021_0846_1_2700x.jpg?v=1642193811"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "630px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://commondeer.com/cdn/shop/files/Commondeer_2021_0860_1_2700x.jpg?v=1642193616"
            alt=""
            className="img-fluid"
            style={{ width: "100%", height: "630px" }}
          />
        </Carousel.Item>
      </Carousel>

      <section>
        <div
          className="container section1 "

        >
          <div className="col-6  " >
            <img
              src="https://images.pexels.com/photos/2131929/pexels-photo-2131929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height={"370px"}
              width={"640px"}
            />
            <div
              className="text1"

            >
              <div className="textchild1">

              </div>
              <h3>MADE IN VARMOTE</h3>
              <p>
                Looking for great products made in Varmote? looking for varmote
                Souvenirs? We havw you covered!{" "}
              </p>
            </div>
          </div>
          <div className="col-6 ">
            <img
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              height={"370px"}
              width={"640px"}
            />
            <div
              className="text2"

            >
              <div className="textchild2" >

              </div>
              <h3>
                <u>BEST</u> GIFTS
              </h3>
              <p>
                We Were voted best gifts in Vermote by our community <br /> for
                two years in a row.With something for everyone on <br /> Your
                list and unique ideas to WOW!-We're here to help!
              </p>
            </div>
          </div>
        </div>
      </section>


      <div
        className="container-fluid  bgimg"

      >
        <div
          className="col-5 bg1"

        >
          <div
            className="text3"

          >
            <h4>WHY COMMON DEER?</h4> <br />
            <p>
              Common Deer was founded in 2013 by two women looking to make{" "}
              <br /> American Made more accessible, both for customers looking
              for <br /> quality and transparency, but also for makers looking
              for those <br /> customers that care.{" "}
            </p>
          </div>
        </div>
        <div className="col-4 bg2">
          <img
            src="https://commondeer.com/cdn/shop/files/C__New_Duds_Map_in_Store_3_900x.jpg?v=1613756149"
            alt=""
            height={"360px"}
            width={"768px"}
          />
        </div>
      </div>

      <div className="container mt-5">
        <iframe
          width="95%"
          height="650px"
          style={{ marginLeft: "45px" }}
          src="https://www.youtube.com/embed/NOMy0nFbKM4"
          title="5 Ways to Use Video on Your Website"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>


      <div
        className="container-fluid bgimg2 mt-5"
        
      >
        <div
          className="col-5  bgimg2-1"
          
        >
          <div className="text4">
            
            <p className='p1'>
              210 College St <br />  Burlington, VT 05401 <br />  802.497.0100 <br /> info@commondeer.com
             
            </p>

            <p className='p2'>Order online for pick-up, local delivery, or <br /> shipment. <br /> <br />
            In-store Shopping and pickup hours available <br /> at <u>this link.</u>
            </p>


            
          </div>
        </div>
        <div className="col-4" style={{ marginTop: "50px" }}>
          <img
            src="https://commondeer.com/cdn/shop/files/aimee_busystore_1.png?v=1613756364"
            alt=""
            height={"500px"}
            width={"783px"}
          />
        </div>
      </div>  
       <div className="mt-5">
           <h5  style={{textAlign:"center"}}>Join the Common Club for deals, stories, and treats!</h5>
           <input  type="text" placeholder=" email address" style={{marginLeft:"32%",marginTop:"1%",border:"1px solid gray",width:"29%",padding:"5px 2px"}} />
           <button style={{marginLeft:"5px",padding:"5px 10px",backgroundColor:"gray",color:"white",border:"none",borderRadius:"2px"}}>subscribe</button>
      </div>
      <div className="mt-5">

</div>


    </div>
  )
}

export default Home
