import React from 'react'
import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserDetails = (props) => {
    const { UserInfo ,SetUserInfo,setLogedin} = useContext(UserContext);
  return (
    <div className={props.displayUserInfo ? 'bg-gray-700 absolute top-12 right-9 w-80 h-90  rounded-2xl z-10 py-1 px-3  text-gray-300 flex flex-col ':"hidden"}>
        <div className='bg-gray-600  mt-1 rounded-2xl flex items-center flex-col py-4 px-6'>
            <img src="" alt="My local asset" width="100" height="100" className='rounded-full bg-amber-100'/>
          <p className='mt-2 font-semibold'>{UserInfo.user.username} . Work</p>
           <p className='mt-2 font-semibold'>{UserInfo.user.email}</p>
        </div>
        <div className='flex  items-center flex-col mt-2'>
            <p className='mt-2 py-5 font-semibold'>Role: {UserInfo.user.role}</p>
          <button className='bg-gray-400 hover:bg-red-600 text-2xl px-10 py-4 rounded-xl text-amber-50 w-full' onClick={()=>{
            setLogedin(false)
          }}>LOG-OUT</button>
        </div>
        
    </div>
  )
}

export default UserDetails