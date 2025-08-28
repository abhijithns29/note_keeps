import React,{useState} from 'react'
import { User } from 'lucide-react';
import UserDetails from './UserDetails';

const UserInfo = (props) => {
    const [displayUserInfo,SetdisplayUserInfo] =useState(false)
  return (

    <div className='flex flex-col '>
         <div className='px-10 py-4 bg-gray-900 hover:bg-gray-500 rounded-full' onClick={()=>{
            SetdisplayUserInfo((prev)=>!prev)
         }}><User /></div>
         <UserDetails displayUserInfo={displayUserInfo} />
    </div>
   
  )
}

export default UserInfo