import React from 'react'


const Tier3 = (props) => (
  <div onClick={(e) => {
    props.changeColor(3, props.parent)
    e.stopPropagation()
  }} className="tier3" style={{backgroundColor: props.color3, color: props.color3}}></div>
)

export default Tier3
