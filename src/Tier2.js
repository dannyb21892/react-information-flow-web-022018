import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let color3 = this.props.color3a ? this.props.color3a : this.props.color3b
    return (
      <div onClick={(e)=>{
        e.stopPropagation()
        this.props.changeColor(2, "")
      }} className="tier2" style={{backgroundColor: this.props.color2, color: this.props.color2}}>
        <Tier3 color3={color3} changeColor={this.props.changeColor} parent={this.props.type}/>
        <Tier3 color3={color3} changeColor={this.props.changeColor} parent={this.props.type}/>
      </div>
    )
  }
}
