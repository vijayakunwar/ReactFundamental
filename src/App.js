import React from "react"

import TodoList from "./TodoList"
import "./mystyle.css"

import QuantitySelector from "./quantity/QuantitySelector"

class  App extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this) // state binding
        this.deleteItem = this.deleteItem.bind(this)
    }

    render(){
        return(
            <div className ="grid-container">
                <form onSubmit = {this.addItem}>
                    <input  ref={(a)=>this._inputElement = a}
                            placeholder ="enter a list">

                    </input>
                    <button type= "submit">Add list</button>
                </form>
                <TodoList 
                    entries ={this.state.items}
                    delete = {this.deleteItem}
                
                
                />
                <div>
                    <QuantitySelector/>
                </div>
                
                
            </div>
        )
    }

    addItem(e){
       // return(console.log("hello "))
       if (this._inputElement.value !== "") {
        var newItem= {
            text: this._inputElement.value,
            key: Date.now()
        }
      
        this.setState((prevState)=>{
            return{
                items: prevState.items.concat(newItem)
            }
        })
        this._inputElement.value = ""
        
       }
       console.log(this.state.item)
       e.preventDefault()
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key);
        })
        this.setState({
            items: filteredItems
        })
    }
    
}
export default App