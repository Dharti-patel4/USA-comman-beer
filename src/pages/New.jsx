import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

function New() {
  const [product, setproduct] = useState([]);
  const [order,setorder]=useState(null)
  const [catagory,setcatagory]=useState(null);
  const [page,setpage]= useState(1)
  const [search,setsearch]=useState("")


  const getdata = () => {
    axios
      .get(`http://localhost:3000/products`,{

      params:{
        _page:page,
        _limit:10,
        _sort:"money",
        _order:order,
        catagory:catagory,
        q:search

      }
      })
      .then((res) => {
        setproduct(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, [page,order,catagory,search]);
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          color: "#45474B",
          fontSize: "25px",
          fontFamily: "sans-serif",
          paddingTop: "10px",
        }}
      >
        NEWLY ONLINE AMERICAN MADE GOODS!
      </p>
      <div
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "black",
          marginLeft: "47%",
        }}
      ></div>
      
      <div>
         <div className="btns">
         <button onClick={()=>setorder("asc")} style={{backgroundColor:"black",color:"whitesmoke",marginLeft:"5%",padding:"5px 10px"}}>LowtoHigh</button>
      <button onClick={()=>setorder("desc")} style={{backgroundColor:"black",color:"whitesmoke",marginLeft:"3%",padding:"5px 10px"}}>HightoLow</button>

      
         </div>
         <div style={{display:"flex"}}> 
         <div className="select" style={{marginLeft:'5%',marginTop:"3%"}} >
             <select name="" id="" onChange={(e)=>setcatagory(e.target.value)} style={{marginLeft:"6%",padding:"10px 20px"}}>
               <option value="">select your catagory</option>
               <option value="paper">Paper</option>
               <option value="food">Food</option>
               <option value="product">product</option>
             </select>
         </div>
           
           <div className="input" style={{marginLeft:"60%"}}>
           <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder= " Search Here" style={{padding:"5px 10px"}}/>
           </div>
         
         </div>
        
      </div>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,2fr)",
          gap: "5px",
          marginTop: "60px",
          marginLeft: "5%"
        }}
      >
        {product.map((el) => (
          <div style={{ paddingTop: "5px" }} key={el.id}>
           
              <div
                style={{
                  width: "80px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  paddingTop: "2px",
                  marginLeft: "300px",
                }}
              >
                NEW
              </div>
              <Link to={`/Description/${el.id}`}>
              <div className="hover-switch">
                <img
                  src={el.img} 
                  style={{ height: "370px", width: "370px" }}
                  alt=""
                />
                <img
                  src={el.img2}  
                  style={{ height: "370px", width: "370px" }}
                  alt=""
                />
              </div>
              </Link>
              <p style={{ fontSize: "20px" }}>{el.product__title}</p>
              <p>{el.money}</p>
              <p>Category : {el.catagory}</p>
             
          </div>
        ))}
      </div>
      {/* pagination */}

      <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"10px",marginLeft:"42%",marginBottom:"10px",width:"200px"}}>
    <button disabled={page==1} style={{padding:"6px 10px"}}  onClick={()=>setpage(page-1)}><FaChevronLeft /></button>
      <span style={{border:"1px solid black",padding:"10px 15px"}}>{page}</span>
     <button disabled={page==4} style={{padding:"6px 10px"}}  onClick={()=>setpage(page+1)}><FaChevronRight /></button>
    </div>
    </div>
  );
}

export default New;



// import React from 'react'

// const New = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default New
