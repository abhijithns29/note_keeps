import React ,{useState,useEffect} from 'react'
import { Sun,CloudMoon } from 'lucide-react';

const ThemeButton = (props) => {
const [mode,setmode]=useState(document.cookie.split("=")[1])
  useEffect(() => {
    if (mode==="light") {
              document.documentElement.classList.remove("dark");
               document.cookie = "mode=light";
     
    } else {
       document.documentElement.classList.add("dark");
        document.cookie = "mode=dark";
    }


  }, [mode]);
 

  return (
    <div className=''>
        
        
      <button
        className=' text-black dark:text-gray-100 text-2xl px-10 py-4 rounded-xl text-amber-50'
        onClick={() => {
  setmode((prev) => (prev === "light" ? "dark" : "light"));
}}

      >
        {mode==="light" ? <CloudMoon className='dark:text-gray-100' />:<Sun className='text-gray-100' />}
      </button>
    </div>
  )
}

export default ThemeButton
