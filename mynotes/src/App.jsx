import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import { useState } from "react";   
import { UserContext } from "./components/UserContext";


 


function App() {
  const [islogedin ,setLogedin]=useState(false)
  const [UserInfo,SetUserInfo]=useState()
  
  return (
    <UserContext.Provider value={{ UserInfo, SetUserInfo,setLogedin }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setLogedin={setLogedin} />} />
        <Route path="/home" element={islogedin ?<Home islogedin={islogedin}/> :<Login setLogedin={setLogedin} />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
