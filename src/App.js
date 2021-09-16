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
            <div className="two-column">
                <aside className ="component-list">
                    <ol>
                        <li className ="vertical-text"><a href ="#" >to do list</a></li>
                        <li><a href ="#" >simple form</a></li>
                        <li><a href ="#" >meme from api image</a></li>
                        <li><a href ="#" >meme from file upload</a></li>
                    </ol>
                </aside>
                <div  className = "component-view">
                    
                    <div><ToDoApp/> </div>
                    <div><QuantitySelector/></div>
                    <div><SimpleForm/></div>
                    <div><RandomMeme/></div>
                    <div><MemeGenerator/></div>
                    
                </div>
            </div>
        )
    }

    
}
export default App