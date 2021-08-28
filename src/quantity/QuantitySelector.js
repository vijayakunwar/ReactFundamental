import React from "react"
//import { render } from "react-dom";
import "./qntsel.css"


class QuantitySelector extends React.Component{
    
    constructor(props){
        super(props)
        this.state = { value : 1}
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState((prevState) =>({ value: ++prevState.value}))
    }

    decrement(){
        this.setState((prevState) => ({ value: prevState.value>0 ? --prevState.value : 0}))
    }
    
    render(){
        return(
            <div>
                <div><h2>QNTY selector</h2></div>
                <div className ="quantity-input">
                    
                    <button className ="left" onClick={this.decrement}>-</button>
                    <input className="qnt-input-box" value = {this.state.value}></input>
                    <button className="right" onClick={this.increment}>+</button>
                </div>
            </div>
        )

    }

}

export default QuantitySelector