import React,{useRef, useState,useEffect} from 'react'
import useOnclick from '../hooks/useOnclick';

const EditNoteComponent = (props) => {
     const [currentvalue, setcurrentvalue] = useState({ title: props.title, desc: props.desc });
     const containerRef = useRef(null)
       const titleRef = useRef(null);


  function editvalue(e) {
    const { name, value } = e.target;
    setcurrentvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
    useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

    useOnclick(containerRef,()=>{
        if( props.title === currentvalue.title && props.desc===currentvalue.desc ){
       props.setEditMode(false)
        }else{
               props.saveEditNote(currentvalue,props.id)
        }
        
    })
    

  console.log(props.id)
  return (
    <div ref={containerRef} className=' w-full h-full p-5 rounded-xl'>
    <input type="text" name="title" className='w-full  h-11 outline-none' value={currentvalue.title} onChange={editvalue}  ref={titleRef}/>
    <textarea name="desc"  className='w-full mt-3 outline-none' rows={5} value={currentvalue.desc} onChange={editvalue}></textarea>
    </div>
  )
}

export default EditNoteComponent