import React from "react"
import { render } from "react-dom";
import "./mystyle.css"


class  Comp2 extends React.Component{

    constructor(props){
        super(props)
        this.createTasks= this.createTasks.bind(this)
    }

    delete(key){
        this.props.delete(key)
    }
    
    createTasks(item) {
        return  <li onClick={()=> this.delete(item.key)} key={item.key}>
                    {item.text}
                </li>
      }

    
    
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(
            <div className ="grid-child green">
                <ul>
                     {listItems}
                </ul>
            </div>
        )
    }
}


export default Comp2