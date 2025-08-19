import React from 'react'

const ClearAllButton = (props) => {
  return (
    <div className='absolute bottom-24 right-6'>
       <button className='bg-red-600 text-2xl px-10  py-4 rounded-xl text-amber-50' onClick={()=>{
        props.clearAll()
       }}>clear</button>
    </div>
    
  )
}

export default ClearAllButton