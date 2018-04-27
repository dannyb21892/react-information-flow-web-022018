import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color1: initialColor,
      color2: getReducedColor(initialColor),
      color3a: getReducedColor(getReducedColor(initialColor)),
      color3b: getReducedColor(getReducedColor(initialColor))
    }
  }

  changeColor = (input, parent) => {
    let newState={}
    if (input === 1) {
      newState.color1 = getRandomColor()
      newState.color2 = getReducedColor(newState.color1)
      newState.color3a = getReducedColor(newState.color2)
      newState.color3b = newState.color3a
    } else if (input === 2) {
      newState.color2 = getRandomColor()
      newState.color3a = getReducedColor(newState.color2)
      newState.color3b = newState.color3a
    } else {
      if (parent === "2a") {
        newState.color3a = getRandomColor()
      } else if (parent === "2b") {
        newState.color3b = getRandomColor()
      }
    }
    this.setState(newState)
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.changeColor(1, "")}} className="tier1" style={{backgroundColor: this.state.color1, color: this.state.color1, zIndex: 1}}>
        <Tier2 color2={this.state.color2} color3a={this.state.color3a} changeColor={this.changeColor} type = "2a"/>
        <Tier2 color2={this.state.color2} color3b={this.state.color3b} changeColor={this.changeColor} type = "2b"/>
      </div>
    )
  }
}
