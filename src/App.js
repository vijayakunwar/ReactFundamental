import React from "react"

//import TodoList from "./TodoList"
import "./mystyle.css"

import QuantitySelector from "./quantity/QuantitySelector"
import SimpleForm from "./Form/SimpleForm"
import MemeGenerator from "./MemeGenerator/MemeGenerator"
import RandomMeme from "./MemeGenerator/RandomMeme"
import ToDoApp from "./ToDoList/ToDoApp"

class  App extends React.Component{

    /* constructor(props){
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this) // state binding
        this.deleteItem = this.deleteItem.bind(this)
    } */

    render(){
        return(
            <div className ="grid-container">
                
                <div>
                 <ToDoApp/> 
                </div>
                <div><QuantitySelector/></div>
                <div></div>
                
                <div><SimpleForm/></div>

                <div><RandomMeme/></div>

                <div></div>

                <div><MemeGenerator/></div>
                
            </div>
        )
    }

    
}
export default App