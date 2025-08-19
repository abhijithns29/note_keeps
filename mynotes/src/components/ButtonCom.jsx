import React from 'react'

const ButtonCom = (props) => {
  return (
    <button onClick={() => props.btnfn(props.id)}
    className={` ${props.className || ""}`}
>{props.icon} {props.buttontxt}</button>
  )
}

export default ButtonCom