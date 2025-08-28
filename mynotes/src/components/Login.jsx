import React ,{useState,useContext}from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import {useNavigate} from "react-router-dom"
import { UserContext } from "./UserContext";

const Login = (props) => {
  const [credential,SetCredential] = useState({})
  const { SetUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  
  function setcredentials(e){
    const {name,value}=e.target

    SetCredential((prev)=>{
   return {
        ...prev,
        [name]: value,
      };
    })
 
  }
// async function  handleLogin() {
  
// const res = await fetch('https://api.freeapi.app/api/v1/users/login', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(credential),
// })
// if(res.status===200){
//    props.setLogedin(true)
//   navigate('/home');
 
// }

// }
  async function handleLogin() {
  try {
    const res = await fetch('https://api.freeapi.app/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credential),
    });

    const data = await res.json();

    if (res.ok) {
      props.setLogedin(true);
      SetUserInfo(data.data);
      navigate('/home');
    } else {
      console.error("Login failed:", data?.message || "Invalid credentials");
      alert(data?.message || "Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Network error. Please try again later.");
  }
}



  return (
 <div className="min-h-screen bg-gradient-to-r from-blue-500 to-red-200 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Enter your email"
              onChange={setcredentials}
              name='username'
            />
          </div>
          <div>
            <label className="block text-white/80 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Enter your password"
              onChange={setcredentials}
              name='password'
            />
          </div>
          <button
            // type="submit"
            className="w-full bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition duration-300"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login