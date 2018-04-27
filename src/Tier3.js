import React from 'react'


const Tier3 = (props) => (
  // this component does not need to change (but feel free to change however you like!)
  <div onClick={(e) => {
    props.changeColor(3)
    e.stopPropagation()
  }} className="tier3" style={{backgroundColor: props.color3, color: props.color3, zIndex: 3}}></div>
)

//onClick={props.handleChildClick}

export default Tier3
