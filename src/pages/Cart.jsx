import React, { useEffect, useState } from 'react'

import axios from "axios";

const Cart = () => {
  const [cart,setCart]= useState([]);
 

   const fetchCartItems = () => {
    axios
      .get("http://localhost:3000/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };

  const handledelete=(id)=>{
     axios.delete(`http://localhost:3000/cart/${id}`)
     .then((res)=>{
       alert("Deleted...")
       fetchCartItems()
     })
     .catch((err)=>{
        console.log(err)
     })
  }
  useEffect(() => {
    fetchCartItems();
  }, []);
     
  
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Cart page</h1>
 <div  style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,2fr)",
          gap: "5px",
          marginTop: "60px",
          marginLeft: "5%"
        }}>
 {cart.map((item) => (
                <section key={item.id} >
                  <div className="container  mb-3">

                    <div className="col-3" style={{width:"300px",height: "300px",marginRight: "15px"}}>
                      <img src={item.img} alt=""  style={{width:"300px",height: "300px"}} />
                    </div>
                    <div className="col-3" style={{ width: "300px" }}>
                      <div>{item.product__title}</div>
                      <div>{item.money}</div>
                     <button onClick={()=>handledelete(item.id)} style={{marginTop:"5px",backgroundColor:"black",color:"white",padding:"10px 15px"}}>Delete</button>
                    </div>
                   
                   
                  </div>
                 
                  
                 
                </section>
              ))}
 </div>
       
    </div>
  )
}

export default Cart
