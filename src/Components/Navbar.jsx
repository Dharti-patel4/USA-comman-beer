import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { auth } from '../service/Firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const handlelogout=()=>{
    signOut(auth)
    .then((res)=>{
      alert("logout ....")
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <nav>
        <div className="navbar-container-fluid ">
          <div className="nav-img">
          <Link to="/">
            {" "}
            <img 
              src="https://commondeer.com/cdn/shop/files/email_header_b238e17b-a27a-4b69-a448-2a0fc254bc62_630x.png?v=1613756149"
              alt=""
              srcset=""
              height={"50px"}
              width={"250px"}
            />
          </Link>
          </div>

        <div>
        <ul className="nav-menu mt-3" >
            <li className="nav-item">
              <Link to="/login" className="nav-links">LOG IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links">CART</Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-links"
                style={{ fontSize: "20px" }}
              >
                <CiSearch />
              </Link>
            </li> */}
            <button  onClick={handlelogout} style={{backgroundColor:"lightblue",padding:"5px 10px",border:'none',borderRadius:'5px',fontWeight:"bold"}}>logout  </button>
          </ul>
        </div>
        </div>
        <div className="navbar-container1">
          <ul className="nav-menu1">
            <li className="nav-item1">
              <Link to="/new" className="nav-links1">
                NEW!
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/gifs" className="nav-links1">
                GIFTS
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/cards" className="nav-links1">
                CARDS
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/vermot" className="nav-links1">
                VERMONT
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/thehome" className="nav-links1">
                THE HOME
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/fun" className="nav-links1">
                {" "}
                FUN
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/access" className="nav-links1">
                {" "}
                ACCESSORIES
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/jewelry" className="nav-links1">
                {" "}
                JEWELRY
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/kids" className="nav-links1">
                KIDS
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/food" className="nav-links1">
                FOOD
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/other" className="nav-links1">
                OTHERS
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="" className="nav-links1">
                ABOUT
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="/about" className="nav-links1">
                SALE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
