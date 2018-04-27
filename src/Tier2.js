import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={(e)=>{
        e.stopPropagation()
        this.props.changeColor(2)
      }} className="tier2" style={{backgroundColor: this.props.color2, color: this.props.color2, zIndex: 2}}>
        <Tier3 color3={this.props.color3} changeColor={this.props.changeColor}/>
        <Tier3 color3={this.props.color3} changeColor={this.props.changeColor}/>
      </div>
    )
  }
}
