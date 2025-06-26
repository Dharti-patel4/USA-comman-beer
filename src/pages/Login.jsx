import React from 'react'
import GoogleButton from 'react-google-button'
import { auth ,provider} from '../service/Firebase';
import { signInWithPopup } from 'firebase/auth'
const Login = () => {
  const handlelogin=()=>{
    
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"3%"}}>Login page</h1>
      <GoogleButton onClick={handlelogin} style={{marginTop:"5%",marginLeft:"42%"}} />
      <div className='mt-5'></div>
    </div>
    
  )
}

export default Login