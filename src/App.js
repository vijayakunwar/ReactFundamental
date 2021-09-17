import React from "react"

//import TodoList from "./TodoList"
import "./mystyle.css"

import Home from "./Home"

import QuantitySelector from "./quantity/QuantitySelector"
import SimpleForm from "./Form/SimpleForm"
import MemeGenerator from "./MemeGenerator/MemeGenerator"
import RandomMeme from "./MemeGenerator/RandomMeme"
import ToDoApp from "./ToDoList/ToDoApp"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

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
            <Router>
                
                <div  >
                    <div className ="component-list">
                        
                        <ol>
                            <li className ="vertical-text">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/todo-list">To Do List</Link>
                            </li>
                            <li>
                                <Link to="/qty-selector">Product Qty selector</Link>
                            </li>
                            <li>
                                <Link to="/simple-form">Simple Form</Link>
                            </li>
                            <li>
                                <Link to="/meme-api-image">Meme from API</Link>
                            </li>
                            <li>
                                <Link to="/meme-local-image">Meme from API</Link>
                            </li>
                            
                        </ol>
                        
                    </div>
                    <div  className = "component-view">
                        
                        <Switch>                           
                            
                            <Route path= "/todo-list">
                                <ToDoApp/>
                            </Route>

                            <Route path= "/qty-selector">
                                <QuantitySelector/>
                            </Route>
                            <Route path= "/simple-form">
                                <SimpleForm/>
                            </Route>
                            <Route path= "/meme-api-image">
                                <RandomMeme/>
                            </Route>
                            
                            <Route path= "/meme-local-image">
                                <MemeGenerator/>
                            </Route>

                            <Route path= "/">
                                <Home/>
                            </Route>
                            
                        </Switch>
                        
                    </div>
                </div>
        
            </Router>
            
            )
    }

    
}
export default App