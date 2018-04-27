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
      color3: getReducedColor(getReducedColor(initialColor))
    }
  }

  changeColor = (input) => {
    console.log(input)
    let newColor1 = input === 1 ? getRandomColor() : this.state.color1
    let newColor2 = input === 2 ? getRandomColor() : getReducedColor(newColor1)
    newColor2 = input === 3 ? this.state.color2 : newColor2
    let newColor3 = input === 3 ? getRandomColor() : getReducedColor(newColor2)
    this.setState({
      color1: newColor1,
      color2: newColor2,
      color3: newColor3
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.changeColor(1)}} className="tier1" style={{backgroundColor: this.state.color1, color: this.state.color1, zIndex: 1}}>
        <Tier2 color2={this.state.color2} color3={this.state.color3} changeColor={this.changeColor}/>
        <Tier2 color2={this.state.color2} color3={this.state.color3} changeColor={this.changeColor}/>
      </div>
    )
  }
}
